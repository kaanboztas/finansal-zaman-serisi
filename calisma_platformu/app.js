// FZSA Sınav Hazırlık Platformu Uygulama Mantığı

const STATE_KEY = "fzsa_prep_state_v1";
let state = {
  done: {},
  miniScores: {},
  examScores: {},
  dark: false,
  fontSize: 16.5,
  activeSection: "plan",
  activeMiniTab: "Ders 1",
  activeExam: 0,
  fcIndex: 0,
  fcFlipped: false
};

try {
  const saved = localStorage.getItem(STATE_KEY);
  if (saved) state = { ...state, ...JSON.parse(saved) };
} catch (e) {}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch (e) {}
  updateNavChecks();
}

function go(secId) {
  state.activeSection = secId;
  saveState();
  document.querySelectorAll("main > section").forEach(s => {
    s.classList.toggle("show", s.id === secId);
  });
  document.querySelectorAll("#nav a[data-s]").forEach(a => {
    a.classList.toggle("active", a.dataset.s === secId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (secId === "ilerleme") renderProgress();
}

function updateNavChecks() {
  document.querySelectorAll("#nav a[data-s]").forEach(a => {
    const id = a.dataset.s;
    let chk = a.querySelector(".chk");
    if (state.done[id]) {
      if (!chk) {
        chk = document.createElement("span");
        chk.className = "chk";
        chk.textContent = "✓";
        a.appendChild(chk);
      }
    } else if (chk) {
      chk.remove();
    }
  });
  document.querySelectorAll("button[data-done]").forEach(btn => {
    const id = btn.dataset.done;
    if (state.done[id]) {
      btn.textContent = "✓ Tamamlandı (Geri almak için tıkla)";
    } else {
      btn.textContent = "✓ Bu bölümü bitirdim";
    }
  });
}

function normalizeTr(str) {
  return (str || "")
    .toLocaleLowerCase("tr-TR")
    .trim()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/\s+/g, " ");
}

function renderQuestionCard(q, idx, prefix) {
  const wrap = document.createElement("div");
  wrap.className = "q";
  const typeLabel =
    q.type === "mc" ? "Çoktan Seçmeli" :
    q.type === "tf" ? "Doğru / Yanlış" :
    q.type === "fill" ? "Boşluk Doldurma" : "Klasik / Yorum";
  const ptsText = q.pts ? ` · ${q.pts} Puan` : "";

  wrap.innerHTML = `
    <div class="qh"><span>Soru ${idx + 1} (${typeLabel}${ptsText})</span><span>Kaynak: ${q.src || ""}</span></div>
    <div class="qt" style="white-space:pre-line">${q.q}</div>
    <div class="qbody"></div>
    <div class="row"><button class="checkBtn">Kontrol Et</button></div>
    <div class="fb"></div>
  `;

  const body = wrap.querySelector(".qbody");
  const fb = wrap.querySelector(".fb");
  const checkBtn = wrap.querySelector(".checkBtn");

  if (q.type === "mc") {
    q.opts.forEach((opt, oi) => {
      const lbl = document.createElement("label");
      lbl.innerHTML = `<input type="radio" name="${prefix}_${idx}" value="${oi}"> <span>${opt}</span>`;
      body.appendChild(lbl);
    });
  } else if (q.type === "tf") {
    ["Doğru", "Yanlış"].forEach((txt, ti) => {
      const val = ti === 0 ? "true" : "false";
      const lbl = document.createElement("label");
      lbl.innerHTML = `<input type="radio" name="${prefix}_${idx}" value="${val}"> <span>${txt}</span>`;
      body.appendChild(lbl);
    });
  } else if (q.type === "fill") {
    const inp = document.createElement("input");
    inp.type = "text";
    inp.placeholder = "Cevabınızı yazınız...";
    body.appendChild(inp);
  } else if (q.type === "open") {
    const ta = document.createElement("textarea");
    ta.placeholder = "Kendi cevabınızı buraya yazıp model cevapla karşılaştırabilirsiniz...";
    body.appendChild(ta);
    checkBtn.textContent = "Model Cevabı Göster";
  }

  checkBtn.addEventListener("click", () => {
    const res = evaluateQuestion(q, wrap, prefix, idx);
    showFeedback(q, fb, res);
  });

  return wrap;
}

function evaluateQuestion(q, wrap, prefix, idx) {
  if (q.type === "mc") {
    const sel = wrap.querySelector(`input[name="${prefix}_${idx}"]:checked`);
    const labels = wrap.querySelectorAll("label");
    labels.forEach((l, li) => {
      l.classList.remove("correct", "wrong");
      if (li === q.ans) l.classList.add("correct");
    });
    if (!sel) return { ok: false, empty: true };
    const chosen = parseInt(sel.value, 10);
    if (chosen !== q.ans) labels[chosen].classList.add("wrong");
    return { ok: chosen === q.ans };
  }
  if (q.type === "tf") {
    const sel = wrap.querySelector(`input[name="${prefix}_${idx}"]:checked`);
    if (!sel) return { ok: false, empty: true };
    const chosen = sel.value === "true";
    return { ok: chosen === q.ans };
  }
  if (q.type === "fill") {
    const inp = wrap.querySelector("input[type=text]");
    const val = normalizeTr(inp.value);
    if (!val) return { ok: false, empty: true };
    const accepted = q.ans.map(a => normalizeTr(a));
    return { ok: accepted.includes(val) };
  }
  if (q.type === "open") {
    return { ok: true, isOpen: true };
  }
}

function showFeedback(q, fb, res) {
  fb.className = "fb show";
  if (q.type === "open") {
    fb.classList.add("info");
    fb.innerHTML = `<b>📌 Model Cevap:</b><br><div style="white-space:pre-line;margin-top:4px">${q.model}</div>`;
    return;
  }
  if (res.empty) {
    fb.classList.add("no");
    fb.innerHTML = `Lütfen önce bir cevap seçin veya yazın.<br><small>${q.exp || ""}</small>`;
    return;
  }
  if (res.ok) {
    fb.classList.add("ok");
    fb.innerHTML = `<b>✓ Doğru!</b> ${q.exp || ""}`;
  } else {
    fb.classList.add("no");
    const rightTxt =
      q.type === "mc" ? q.opts[q.ans] :
      q.type === "tf" ? (q.ans ? "Doğru" : "Yanlış") :
      q.ans[0];
    fb.innerHTML = `<b>✗ Yanlış.</b> Doğru cevap: <b>${rightTxt}</b><br>${q.exp || ""}`;
  }
}

// Konu Testleri
function renderMiniQuizzes() {
  const tabs = document.getElementById("miniTabs");
  const body = document.getElementById("miniBody");
  tabs.innerHTML = "";
  body.innerHTML = "";

  Object.keys(MINI_QUIZZES).forEach(tabName => {
    const b = document.createElement("button");
    b.textContent = tabName;
    if (state.activeMiniTab === tabName) b.classList.add("primary");
    b.addEventListener("click", () => {
      state.activeMiniTab = tabName;
      saveState();
      renderMiniQuizzes();
    });
    tabs.appendChild(b);
  });

  const list = MINI_QUIZZES[state.activeMiniTab] || [];
  const cards = [];
  list.forEach((q, idx) => {
    const c = renderQuestionCard(q, idx, "mini_" + state.activeMiniTab);
    cards.push({ q, el: c, idx });
    body.appendChild(c);
  });

  const allRow = document.createElement("div");
  allRow.className = "card row";
  allRow.innerHTML = `<button class="primary" id="miniCheckAll">Tümünü Değerlendir & Puanla</button> <span id="miniScoreOut" class="score"></span>`;
  body.appendChild(allRow);

  allRow.querySelector("#miniCheckAll").addEventListener("click", () => {
    let correct = 0;
    let totalAuto = 0;
    cards.forEach(({ q, el, idx }) => {
      const fb = el.querySelector(".fb");
      const res = evaluateQuestion(q, el, "mini_" + state.activeMiniTab, idx);
      showFeedback(q, fb, res);
      if (q.type !== "open") {
        totalAuto++;
        if (res.ok) correct++;
      }
    });
    state.miniScores[state.activeMiniTab] = `${correct} / ${totalAuto}`;
    saveState();
    allRow.querySelector("#miniScoreOut").textContent = `Otomatik puanlanan sorular: ${correct} / ${totalAuto} doğru (Klasik soruları model cevapla kontrol ediniz).`;
  });
}

// Deneme Sınavları
let examTimerInterval = null;
let examRemainingSec = 0;

function renderExams() {
  const container = document.getElementById("examBody");
  container.innerHTML = "";

  const tabRow = document.createElement("div");
  tabRow.className = "row";
  EXAMS.forEach((ex, ei) => {
    const b = document.createElement("button");
    b.textContent = ex.title;
    if (state.activeExam === ei) b.classList.add("primary");
    b.addEventListener("click", () => {
      state.activeExam = ei;
      saveState();
      stopTimer();
      renderExams();
    });
    tabRow.appendChild(b);
  });
  container.appendChild(tabRow);

  const exam = EXAMS[state.activeExam];
  examRemainingSec = exam.durationMin * 60;

  const timerBar = document.createElement("div");
  timerBar.className = "timer";
  timerBar.innerHTML = `
    <div><b>${exam.title}</b></div>
    <div class="row" style="margin:0">
      <span class="t" id="timerDisp">${formatTime(examRemainingSec)}</span>
      <button id="startTimerBtn">▶ Süreyi Başlat</button>
      <button id="resetTimerBtn">↺ Sıfırla</button>
    </div>
  `;
  container.appendChild(timerBar);

  timerBar.querySelector("#startTimerBtn").addEventListener("click", (e) => {
    if (examTimerInterval) {
      stopTimer();
      e.target.textContent = "▶ Devam Et";
    } else {
      e.target.textContent = "⏸ Duraklat";
      examTimerInterval = setInterval(() => {
        if (examRemainingSec > 0) {
          examRemainingSec--;
          const disp = document.getElementById("timerDisp");
          if (disp) disp.textContent = formatTime(examRemainingSec);
        } else {
          stopTimer();
        }
      }, 1000);
    }
  });

  timerBar.querySelector("#resetTimerBtn").addEventListener("click", () => {
    stopTimer();
    examRemainingSec = exam.durationMin * 60;
    const disp = document.getElementById("timerDisp");
    if (disp) disp.textContent = formatTime(examRemainingSec);
    timerBar.querySelector("#startTimerBtn").textContent = "▶ Süreyi Başlat";
  });

  const qCards = [];
  exam.questions.forEach((q, idx) => {
    const c = renderQuestionCard(q, idx, "exam_" + state.activeExam);
    qCards.push({ q, el: c, idx });
    container.appendChild(c);
  });

  const finishBox = document.createElement("div");
  finishBox.className = "card";
  finishBox.innerHTML = `
    <div class="row">
      <button class="primary" id="finishExamBtn">Sınavı Bitir ve Puanı Hesapla</button>
      <span class="score" id="examScoreOut"></span>
    </div>
    <p style="font-size:14px;color:var(--muted);margin:8px 0 0">Not: Klasik sorular için model cevaplar açılır; kendi cevabınıza göre puan ekleyebilirsiniz.</p>
  `;
  container.appendChild(finishBox);

  finishBox.querySelector("#finishExamBtn").addEventListener("click", () => {
    stopTimer();
    let autoPts = 0;
    let maxAutoPts = 0;
    let openMaxPts = 0;
    qCards.forEach(({ q, el, idx }) => {
      const fb = el.querySelector(".fb");
      const res = evaluateQuestion(q, el, "exam_" + state.activeExam, idx);
      showFeedback(q, fb, res);
      if (q.type === "open") {
        openMaxPts += q.pts || 0;
      } else {
        maxAutoPts += q.pts || 0;
        if (res.ok) autoPts += q.pts || 0;
      }
    });
    state.examScores[exam.title] = `${autoPts} / ${maxAutoPts} (+${openMaxPts} klasik)`;
    saveState();
    finishBox.querySelector("#examScoreOut").textContent =
      `Otomatik Puan: ${autoPts} / ${maxAutoPts} (Klasik sorular toplam ${openMaxPts} puandır, yukarıdaki model cevaplarla karşılaştırınız).`;
  });
}

function stopTimer() {
  if (examTimerInterval) {
    clearInterval(examTimerInterval);
    examTimerInterval = null;
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// Bilgi Kartları
function renderFlashcards() {
  const body = document.getElementById("flashBody");
  const total = FLASHCARDS.length;
  const idx = ((state.fcIndex % total) + total) % total;
  const item = FLASHCARDS[idx];

  body.innerHTML = `
    <p>Kartın üzerine tıklayarak cevabı çevirebilirsin. Toplam <b>${total}</b> kart.</p>
    <div class="progress"><div style="width:${((idx + 1) / total) * 100}%"></div></div>
    <div class="fc ${state.fcFlipped ? "back" : ""}" id="fcCard" style="white-space:pre-line">
      <div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:8px">
          Kart ${idx + 1} / ${total} · ${state.fcFlipped ? "CEVAP (Ön yüz için tıkla)" : "SORU / KAVRAM (Cevap için tıkla)"}
        </div>
        <div>${state.fcFlipped ? item.a : item.q}</div>
      </div>
    </div>
    <div class="row" style="justify-content:space-between;margin-top:14px">
      <button id="fcPrev">← Önceki Kart</button>
      <button id="fcFlip" class="primary">Kartı Çevir</button>
      <button id="fcNext">Sonraki Kart →</button>
    </div>
  `;

  const flip = () => {
    state.fcFlipped = !state.fcFlipped;
    renderFlashcards();
  };
  body.querySelector("#fcCard").addEventListener("click", flip);
  body.querySelector("#fcFlip").addEventListener("click", flip);
  body.querySelector("#fcPrev").addEventListener("click", () => {
    state.fcIndex = idx - 1;
    state.fcFlipped = false;
    renderFlashcards();
  });
  body.querySelector("#fcNext").addEventListener("click", () => {
    state.fcIndex = idx + 1;
    state.fcFlipped = false;
    renderFlashcards();
  });
}

// İlerleme
function renderProgress() {
  const body = document.getElementById("progBody");
  const topics = [
    ["d1", "Ders 1 · Giriş"],
    ["d2", "Ders 2 · Piyasa, Veri, Getiri"],
    ["d3", "Ders 3 · Temel Veri Analizi"],
    ["d4", "Ders 4 · ZS Kavramları & Bileşenler"],
    ["d5", "Ders 5 · Normallik & Durağanlık"],
    ["u1", "Uygulama 1 · DJI"],
    ["u2", "Uygulama 2 · TESLA"]
  ];
  const doneCount = topics.filter(([k]) => state.done[k]).length;

  let html = `
    <div class="card">
      <h4>Tamamlanan Konular: ${doneCount} / ${topics.length}</h4>
      <div class="progress"><div style="width:${(doneCount / topics.length) * 100}%"></div></div>
      <table>
        <tr><th>Bölüm</th><th>Durum</th></tr>
        ${topics.map(([k, name]) => `<tr><td>${name}</td><td>${state.done[k] ? "✅ Tamamlandı" : "⏳ Bekliyor"}</td></tr>`).join("")}
      </table>
    </div>
    <div class="card">
      <h4>Konu Testi Sonuçları</h4>
      <table>
        <tr><th>Test</th><th>Son Puan</th></tr>
        ${Object.keys(MINI_QUIZZES).map(k => `<tr><td>${k}</td><td>${state.miniScores[k] || "Henüz çözülmedi"}</td></tr>`).join("")}
      </table>
    </div>
    <div class="card">
      <h4>Deneme Sınavı Sonuçları</h4>
      <table>
        <tr><th>Sınav</th><th>Son Puan</th></tr>
        ${EXAMS.map(ex => `<tr><td>${ex.title}</td><td>${state.examScores[ex.title] || "Henüz çözülmedi"}</td></tr>`).join("")}
      </table>
    </div>
    <div class="row">
      <button id="resetProgBtn">Tüm İlerlemeyi Sıfırla</button>
    </div>
  `;
  body.innerHTML = html;

  body.querySelector("#resetProgBtn").addEventListener("click", () => {
    state.done = {};
    state.miniScores = {};
    state.examScores = {};
    saveState();
    renderProgress();
  });
}

// Başlangıç
document.addEventListener("DOMContentLoaded", () => {
  if (state.dark) document.body.classList.add("dark");
  document.body.style.fontSize = state.fontSize + "px";

  document.querySelectorAll("#nav a[data-s]").forEach(a => {
    a.addEventListener("click", () => go(a.dataset.s));
  });

  document.querySelectorAll("button[data-done]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.done;
      state.done[id] = !state.done[id];
      saveState();
    });
  });

  document.getElementById("themeBtn").addEventListener("click", () => {
    state.dark = !state.dark;
    document.body.classList.toggle("dark", state.dark);
    document.getElementById("themeBtn").textContent = state.dark ? "☀️ Açık tema" : "🌙 Koyu tema";
    saveState();
  });
  document.getElementById("themeBtn").textContent = state.dark ? "☀️ Açık tema" : "🌙 Koyu tema";

  document.getElementById("fontUp").addEventListener("click", () => {
    state.fontSize = Math.min(21, state.fontSize + 1);
    document.body.style.fontSize = state.fontSize + "px";
    saveState();
  });

  document.getElementById("fontDown").addEventListener("click", () => {
    state.fontSize = Math.max(14, state.fontSize - 1);
    document.body.style.fontSize = state.fontSize + "px";
    saveState();
  });

  renderMiniQuizzes();
  renderExams();
  renderFlashcards();
  updateNavChecks();
  go(state.activeSection || "plan");

  // Grafik büyütme (Lightbox)
  const lb = document.createElement("div");
  lb.id = "lightbox";
  lb.innerHTML = `<img id="lbImg" src="" alt=""><div class="lb-cap" id="lbCap"></div>`;
  document.body.appendChild(lb);
  lb.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lb.classList.remove("open");
  });
  document.querySelectorAll(".fig-img-wrap img").forEach(img => {
    img.addEventListener("click", () => {
      document.getElementById("lbImg").src = img.src;
      const fig = img.closest(".fig");
      const head = fig ? fig.querySelector(".fig-head") : null;
      document.getElementById("lbCap").textContent = head ? head.textContent : (img.alt || "");
      lb.classList.add("open");
    });
  });
});

