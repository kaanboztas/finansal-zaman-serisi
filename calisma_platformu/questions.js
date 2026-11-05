// Yalnızca ders ve uygulama PDF'lerinden hazırlanmış soru bankası ve bilgi kartları

const MINI_QUIZZES = {
  "Ders 1": [
    {
      type: "mc",
      q: "Ders 1'e göre aşağıdakilerden hangisi finansal zaman serilerinin temel özelliklerinden biri olarak verilmemiştir?",
      opts: ["Doğrusal değildirler", "Yapısal kırılmalara sahiptirler", "Yüksek frekanslı ve oynaktırlar", "Her zaman simetriktirler"],
      ans: 3,
      exp: "Finansal zaman serileri simetrik değil, ASİMETRİKTİRLER (Ders 1, s.8-11).",
      src: "Ders 1 s.8-11"
    },
    {
      type: "tf",
      q: "Dersin temel amacı; finansal verilerin temel özellikleri ve finansal ekonometrik modeller konusunda bilgi verilerek, finansal zaman serisi verilerinin modellenmesi ve öngörü yapılmasını sağlamaktır.",
      ans: true,
      exp: "Ders 1 s.2'de dersin amacı tam olarak bu şekilde tanımlanmıştır.",
      src: "Ders 1 s.2"
    },
    {
      type: "fill",
      q: "Finansal zaman serileri yüksek frekanslıdırlar, oynaktırlar ve _________ kırılmalara sahiptirler.",
      ans: ["yapısal", "yapisal"],
      exp: "Finansal zaman serileri yapısal kırılmalara sahiptirler (Ders 1 s.9).",
      src: "Ders 1 s.9"
    },
    {
      type: "open",
      q: "Finansal zaman serilerinin Ders 1'de belirtilen 4 temel özelliğini maddeler halinde yazınız.",
      model: "1) Doğrusal değildirler.\n2) Yapısal kırılmalara sahiptirler.\n3) Yüksek frekanslıdırlar ve oynaktırlar.\n4) Asimetriktirler.",
      src: "Ders 1 s.8-11"
    }
  ],
  "Ders 2": [
    {
      type: "mc",
      q: "Para piyasası ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
      opts: [
        "Kullandıkları araçların vadeleri 12 ayı geçmeyen piyasaları ifade eder.",
        "İşlem gören varlıkların likiditesi yüksektir.",
        "Tasarrufların uzun vadeli yatırıma dönüşmesinden çok likidite ihtiyacının karşılandığı piyasalardır.",
        "Orta ve uzun vadeli ödünç verilebilir fonların aktarıldığı birincil ve ikincil piyasalardır."
      ],
      ans: 3,
      exp: "Orta ve uzun vadeli fonların aktarıldığı, birincil/ikincil ve spot/vadeli olarak ayrılan piyasa Sermaye Piyasasıdır (Ders 2 s.3-5).",
      src: "Ders 2 s.3-5"
    },
    {
      type: "mc",
      q: "Campbell, Lo ve MacKinlay (1997)'e göre fiyat serileri yerine GETİRİ serilerinin tercih edilmesinin iki sebebi nedir?",
      opts: [
        "Yatırım fırsatlarının tam ve ölçek-bağımsız özet bilgisini vermesi; fiyat serilerine göre daha çekici istatistiksel özellikler içermesi",
        "Her zaman pozitif değer alması; hesaplanmasının daha zor olması",
        "Temettü ödemelerini otomatik olarak içermesi; varyansının sonsuz olması",
        "Sadece yıllık verilerde kullanılabilmesi; trend içermesi"
      ],
      ans: 0,
      exp: "1) Ortalama bir yatırımcı için yatırım fırsatlarının tam (complete) ve ölçek-bağımsız (scale-free) özet bilgisini verir. 2) Fiyat serilerine göre daha çekici (attractive) istatistiksel özellikler içerir (Ders 2 s.15).",
      src: "Ders 2 s.15"
    },
    {
      type: "mc",
      q: "Microsoft hissesi t-1 ayında 85$'dan satın alınıp t ayında 90$'dan satılmıştır (temettü yok). Bir dönemlik basit net getiri ve basit brüt getiri nedir?",
      opts: [
        "Net: 0.0588 (%5.88), Brüt: 1.0588",
        "Net: 1.0588, Brüt: 0.0588",
        "Net: 0.0555, Brüt: 1.0555",
        "Net: 5.00, Brüt: 6.00"
      ],
      ans: 0,
      exp: "Basit Net Getiri: Rt = 90/85 - 1 = 0.0588 (%5.88). Basit Brüt Getiri: 1 + Rt = 1.0588 (Ders 2 s.26-27).",
      src: "Ders 2 s.26-27"
    },
    {
      type: "mc",
      q: "Bir varlığın iki ardışık dönemlik basit net getirileri Rt-1 = 0.50 (+%50) ve Rt = -0.50 (-%50) ise gerçek iki dönemlik net getiri Rt(2) kaçtır?",
      opts: ["0 (%0)", "-0.25 (-%25 zarar)", "+0.25 (+%25 kar)", "-0.50 (-%50 zarar)"],
      ans: 1,
      exp: "Rt(2) = (1 + Rt)(1 + Rt-1) - 1 = (1 - 0.5)(1 + 0.5) - 1 = 0.5 * 1.5 - 1 = -0.25 (%25 zarar). Getiriler simetrik değildir (Ders 2 s.33).",
      src: "Ders 2 s.33"
    },
    {
      type: "tf",
      q: "Sürekli olarak bileşikleştirilmiş çok dönemli getiri (log getiri rt[k]), bir dönemlik log getirilerin toplamına eşittir: rt[k] = rt + rt-1 + ... + rt-k+1.",
      ans: true,
      exp: "Logaritmanın çarpımı toplama çevirme özelliği sayesinde çok dönemli log getiri, tek dönemlik log getirilerin toplamıdır (Ders 2 s.40).",
      src: "Ders 2 s.40"
    },
    {
      type: "fill",
      q: "Risksiz kâr etmek için farklı piyasalardaki fiyat dengesizliğinden faydalanarak bir piyasadan düşük fiyata alınan ürünün başka bir piyasada eş zamanlı yüksek fiyata satılmasına _________ denir.",
      ans: ["arbitraj"],
      exp: "Arbitraj, risksiz kâr etmek için farklı piyasalardaki dengesizlikten faydalanma durumudur; işleyen piyasalarda yapılmaz (Ders 2 s.44).",
      src: "Ders 2 s.44"
    },
    {
      type: "fill",
      q: "Bir varlığın getirisi (Rt) ile genellikle risksiz olan bir referans varlığın getirisi (R0t) arasındaki farka (Zt = Rt - R0t) _________ getiri denir.",
      ans: ["aşırı", "asiri"],
      exp: "Varlık getirisi ile referans varlık (örn. hazine bonosu) getirisi arasındaki fark Aşırı Getiri (Excess Return) olarak adlandırılır (Ders 2 s.43).",
      src: "Ders 2 s.43"
    },
    {
      type: "open",
      q: "Bir varlığın 3 aylık (1 çeyreklik) dönemde aylık log getirileri sırasıyla %4.46, %-7.34 ve %10.77'dir.\na) 1. ayın aylık basit getirisini yüzdelik olarak hesaplayınız.\nb) Çeyreklik (3 aylık) log getiriyi hesaplayınız.",
      model: "a) R1 = 100 * [exp(4.46 / 100) - 1] = %4.56\nb) Çok dönemli log getiri tek dönemlik log getirilerin toplamıdır:\nrt[3] = %(4.46 - 7.34 + 10.77) = %7.89.",
      src: "Ders 2 s.45-46"
    }
  ],
  "Ders 3": [
    {
      type: "mc",
      q: "2012-2016 yılları arasındaki verilerle model kurulmuş, 2017 ve 2018 yıllarına ait gerçek gözlem değerleri mevcut olup model kurulumuna dahil edilmemiştir. 2017-2018 dönemi için yapılan kestirimin adı nedir?",
      opts: ["Dönem Öncesi Kestirim (DÖK)", "Dönem İçi Kestirim (DİK)", "Dönem Dışı Kestirim (DDK)", "Öngörü (Forecast)"],
      ans: 2,
      exp: "2010-2011: Dönem Öncesi Kestirim (DÖK), 2012-2016: Dönem İçi Kestirim (DİK), 2017-2018: Dönem Dışı Kestirim (DDK), 2019-2020: Öngörü (Ders 3 s.8).",
      src: "Ders 3 s.8"
    },
    {
      type: "mc",
      q: "Basit getirilerin normal dağıldığı (Rit ~ i.i.d. N(μ, σ²)) varsayımının çıkardığı zorluklardan biri AŞAĞIDAKİLERDEN HANGİSİ DEĞİLDİR?",
      opts: [
        "Normal dağılımın alt ve üst sınırlarının sonsuz olması, oysa getirinin alt sınırının -1 olması",
        "Tek dönemli basit getiri normal dağılsa bile çok dönemli basit getirinin çarpımlardan oluştuğu için normal dağılmaması",
        "Normal dağılımın simetrik olması, oysa ampirik varlık getirilerinin sağa çarpık olması",
        "Normal dağılımın varyansının her zaman sonsuz olması"
      ],
      ans: 3,
      exp: "Sonsuz varyans normal dağılımın değil, normal-olmayan kararlı (stable) dağılımların (örn. Cauchy) özelliğidir (Ders 3 s.11, 14-15).",
      src: "Ders 3 s.11, 14-15"
    },
    {
      type: "mc",
      q: "Normallik varsayımı altında örneklem çarpıklık katsayısı Ŝ(x) ve örneklem basıklık fazlalığı (K̂(x) - 3) asimptotik olarak hangi varyanslarla normal dağılırlar?",
      opts: ["6/T ve 24/T", "1/T ve 2/T", "24/T ve 6/T", "3/T ve 12/T"],
      ans: 0,
      exp: "Normallik altında Ŝ(x) varyansı 6/T, (K̂(x)-3) varyansı 24/T olan normal dağılıma sahiptir (Ders 3 s.20).",
      src: "Ders 3 s.20"
    },
    {
      type: "mc",
      q: "Jarque-Bera (JB) normallik testi istatistiği JB = (K*)² + (S*)² asimptotik olarak hangi dağılıma uyar ve temel hipotezi (H0) nedir?",
      opts: [
        "2 serbestlik dereceli Ki-Kare (χ²_2); H0: Veriler normal kitleden gelmektedir",
        "Standart Normal N(0,1); H0: Veriler normal kitleden gelmemektedir",
        "T-dağılımı; H0: Dağılım çarpıktır",
        "F-dağılımı; H0: Varyanslar homojendir"
      ],
      ans: 0,
      exp: "JB testi asimptotik olarak 2 serbestlik dereceli ki-kare dağılımına sahiptir. H0: Veriler normal kitleden gelmektedir. JB > χ²_2(α) veya p < α ise H0 reddedilir (Ders 3 s.29).",
      src: "Ders 3 s.29"
    },
    {
      type: "tf",
      q: "İşlem hacmi, oynaklığa pozitif yönlü ve kuvvetli olarak bağımlıdır.",
      ans: true,
      exp: "Ders 3 s.6'da doğrudan bu ifade yer almaktadır.",
      src: "Ders 3 s.6"
    },
    {
      type: "fill",
      q: "Normal-olmayan kararlı (stable) dağılımlardan biri olan, medyan etrafında simetrik fakat sonsuz büyüklükte varyansa sahip dağılım _________ dağılımıdır.",
      ans: ["cauchy"],
      exp: "Cauchy dağılımı medyan etrafında simetrik fakat sonsuz varyanslı bir kararlı dağılımdır (Ders 3 s.15).",
      src: "Ders 3 s.15"
    },
    {
      type: "open",
      q: "R'de bir getiri serisi (rt) için yapılan basıklık testi çıktısı aşağıdaki gibidir:\n> k4 = kurtosis(rt)\n> tst = k4 / sqrt(24/T)\n> tst\n[1] 7.743311\nBu testin hipotezlerini yazarak α = 0.05 (Z_0.025 = 1.96) için sonucu yorumlayınız.",
      model: "Hipotezler:\nH0: K(r) - 3 = 0 (Dağılım normal kuyrukludur / basık değildir)\nHa: K(r) - 3 ≠ 0 (Dağılım kalın kuyrukludur)\n\nKarar ve Yorum:\n|K*| = 7.743311 > 1.96 olduğu için H0 hipotezi reddedilir. Getiri serisi normal kuyruklu değildir; kalın kuyruk (aşırı basıklık) özelliğine sahiptir.",
      src: "Ders 3 s.23-24, 27"
    }
  ],
  "Ders 4": [
    {
      type: "mc",
      q: "T gözlemli bir zaman serisinde gecikme sayısı (k) en fazla hangi değeri alabilir?",
      opts: ["T", "T - 1", "T - 2", "T / 2"],
      ans: 2,
      exp: "k değeri gözlem sayısına bağlı olarak gözlem sayısının iki eksiğine kadar (T-2) değer alabilir (Ders 4 s.6).",
      src: "Ders 4 s.6"
    },
    {
      type: "mc",
      q: "Zaman serisi öngörü horizonu sınıflamasında 'Kısa Dönem' ve 'Orta Dönem' hangi zaman dilimi (zd) aralıklarını kapsar?",
      opts: [
        "Kısa: 10 zd < t < 30 zd; Orta: 30 zd < t < 90 zd",
        "Kısa: t < 10 zd; Orta: 10 zd < t < 30 zd",
        "Kısa: 1 zd < t < 7 zd; Orta: 7 zd < t < 30 zd",
        "Kısa: 30 zd < t < 60 zd; Orta: 60 zd < t < 120 zd"
      ],
      ans: 0,
      exp: "Yakın Dönem: t < 10 zd; Kısa Dönem: 10 zd < t < 30 zd; Orta Dönem: 30 zd < t < 90 zd (Ders 4 s.11).",
      src: "Ders 4 s.11"
    },
    {
      type: "mc",
      q: "Mevsimsel bileşen ile ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?",
      opts: [
        "En kısa tekrarlanan periyottur ve genellikle bir mevsimsel dalga en fazla bir yıl içerisinde tamamlanır.",
        "Aylık veya çeyreklik zaman dilimlerinde incelenir.",
        "Yıllık veri, mevsimselliği en net gösteren veri türüdür.",
        "Serinin durağanlığını bozar."
      ],
      ans: 2,
      exp: "Ders 4 s.16'da açıkça belirtildiği üzere: 'Yıllık veri, mevsimselliği göstermez.'",
      src: "Ders 4 s.16"
    },
    {
      type: "tf",
      q: "Döngüsel bileşen; bir yıldan daha uzun dönemi (2-10 yıl veya 20-30 yıl gibi) kapsayan büyük salınımlardır ve serinin durağanlığını bozduğu için seriden arındırılmalıdır.",
      ans: true,
      exp: "Mevsimsel dalga en fazla 1 yılda tamamlanırken döngüsel dalga çok uzun sürede tamamlanır ve durağanlığı bozar (Ders 4 s.18).",
      src: "Ders 4 s.18"
    },
    {
      type: "fill",
      q: "Depremler, doğal afetler, savaşlar ve ekonomik krizler gibi nedenlerle birdenbire ortaya çıkan düzensiz sıçrama veya çöküşlere _________ hareketler (veya gürültü) denir.",
      ans: ["düzensiz", "duzensiz"],
      exp: "Zaman serisinin 4 bileşeni: Trend, Mevsimsellik, Döngüsellik ve Düzensiz Hareketler (Ders 4 s.13, 20).",
      src: "Ders 4 s.13, 20"
    },
    {
      type: "open",
      q: "Zaman serisi çözümlemesinin iki temel amacını ve Yt = f(t) + εt eşitliğindeki terimlerin ne anlama geldiğini açıklayınız.",
      model: "Zaman serisi çözümlemesinin amaçları (Ders 4 s.9):\n1) Ardışık gözlemlerden oluşan olayların doğasını tanımak (hangi bileşenlerin etkili olduğunu belirlemek ve serinin özelliklerini açıklamak).\n2) Zaman serisi değişkeninin gelecek değerlerini (öngörü) öngörmek (iç bağımlılığın/otokorelasyonun gelecekte de devam edeceği varsayımıyla).\n\nYt = f(t) + εt (Ders 4 s.12):\n- f(t): Sistematik Yapı (genellikle tanımlanabilen bileşenlerden oluşan yapı).\n- εt: Rassal Gürültü (sistemin yapısının belirlenmesini zorlaştıran hata yapısı).",
      src: "Ders 4 s.9, 12"
    }
  ],
  "Ders 5": [
    {
      type: "mc",
      q: "Bir zaman serisinin ortalamasının yanında varyansı ve kovaryansı da zamana göre değişmiyorsa ve kovaryans sadece gecikmeye (s-t) bağlıysa bu durağanlık türüne ne ad verilir?",
      opts: [
        "Birinci dereceden durağanlık",
        "Zayıf / İkinci dereceden / Kovaryans durağanlık",
        "Tam / Güçlü durağanlık",
        "Deterministik durağanlık"
      ],
      ans: 1,
      exp: "Ortalaması, varyansı ve kovaryansı zamana göre değişmeyen seriye ikinci dereceden durağan, kovaryans durağan veya zayıf durağan seri denir (Ders 5 s.14-16).",
      src: "Ders 5 s.14-16"
    },
    {
      type: "mc",
      q: "Box-Cox dönüşümünde dönüşüm parametresi λ = 0, λ = -1 ve λ = 0.5 değerlerini aldığında seriye sırasıyla hangi dönüşümler uygulanır?",
      opts: [
        "Logaritmik dönüşüm, 1/zt dönüşümü, √zt dönüşümü",
        "Karesel dönüşüm, logaritmik dönüşüm, 1/zt dönüşümü",
        "1/zt dönüşümü, √zt dönüşümü, logaritmik dönüşüm",
        "Fark alma, logaritmik dönüşüm, karesel dönüşüm"
      ],
      ans: 0,
      exp: "λ=0 ise logaritmik dönüşüm, λ=-1 ise 1/zt ters dönüşümü, λ=0.5 ise √zt kök dönüşümü yapılır (Ders 5 s.23).",
      src: "Ders 5 s.23"
    },
    {
      type: "mc",
      q: "Bir zaman serisinde hem trend hem de değişen varyanslılık varsa (hem ortalaması hem varyansı sabit değilse) süreç akış şemasına göre ÖNCELİKLE ne yapılmalıdır?",
      opts: [
        "Öncelikle 2. dereceden fark alınmalıdır",
        "Seri öncelikle değişen varyanslılıktan arındırılmalı, daha sonra diğer bileşenlerden arındırma yöntemlerine gidilmelidir",
        "Doğrudan doğrusal trend regresyonu kurulmalıdır",
        "Hiçbir dönüşüm yapılmadan ARIMA kurulmalıdır"
      ],
      ans: 1,
      exp: "Ders 5 s.40: 'Böyle bir durumda seri öncelikle değişen varyanslılıktan arındırılmalıdır. Değişen varyanslılık ortadan kaldırıldıktan sonra diğer bileşenlerden arındırma yöntemlerine gidilmelidir.'",
      src: "Ders 5 s.40"
    },
    {
      type: "mc",
      q: "Orijinal y1, y2, ..., yT serisine ikinci dereceden fark alma (d=2) uygulandığında çalışılan seri zt'nin formülü ve başladığı gözlem sırası (b) nedir?",
      opts: [
        "zt = yt - 2yt-1 + yt-2 ve b = 3",
        "zt = yt - yt-1 ve b = 2",
        "zt = yt - yt-2 ve b = 2",
        "zt = yt + 2yt-1 + yt-2 ve b = 1"
      ],
      ans: 0,
      exp: "d=2 olduğunda zt = (yt - yt-1) - (yt-1 - yt-2) = yt - 2yt-1 + yt-2 olur, ilk iki gözlem kaybolur ve seri b=3'ten (z3) başlar (Ders 5 s.33-34).",
      src: "Ders 5 s.33-34"
    },
    {
      type: "mc",
      q: "Dickey-Fuller (ADF) ve KPSS birim kök testlerinin temel hipotezleri (H0) arasındaki fark nedir?",
      opts: [
        "ADF'de H0: Seri birim köke sahiptir (durağan değildir); KPSS'de H0: Seri durağandır (σ_u² = 0)",
        "Her ikisinde de H0: Seri durağandır",
        "ADF'de H0: Seri durağandır; KPSS'de H0: Seri birim köke sahiptir",
        "Her ikisinde de H0: Seri normal dağılır"
      ],
      ans: 0,
      exp: "DF/ADF testinde H0: δ = 0 (seri durağan değildir / birim köke sahiptir). KPSS testinde ise temel hipotez H0: σ_u² = 0 serinin durağan olduğunu ifade eder (Ders 5 s.42, 45).",
      src: "Ders 5 s.42, 45"
    },
    {
      type: "tf",
      q: "Fark alma derecesi arttırıldıkça (örneğin 2'den fazla fark alındığında) seri kesin olarak daha iyi durağanlaşır ve hiçbir sakıncası yoktur.",
      ans: false,
      exp: "Yanlış. Fark derecesi arttırıldığında gözlem kaybedildiği gibi seri daha karmaşık bir yapıya bürünebilir. Literatürde ikiden fazla fark almanın sakıncalı olabileceği belirtilir (Ders 5 s.37-38).",
      src: "Ders 5 s.37-38"
    },
    {
      type: "fill",
      q: "Varyansı sabitleyecek dönüşümler (Box-Cox vb.) işe yaramıyorsa varyans modellemesi için _________ / GARCH modelleri kurulmalıdır.",
      ans: ["arch"],
      exp: "Dönüşümler işe yaramıyorsa ARCH/GARCH modelleri ile varyans modellemesi yapılmalıdır (Ders 5 s.22, 28).",
      src: "Ders 5 s.22, 28"
    },
    {
      type: "open",
      q: "Dickey-Fuller (1979) birim kök testinde kullanılan üç model kalıbını (denklemlerini) ve hipotezlerini yazınız.",
      model: "1) Sadece gecikmeli değerin olduğu kalıp (yalın):\n   ΔYt = δ Y_{t-1} + u_t\n2) Sabit parametrenin olduğu kalıp (sabitsel/drift):\n   ΔYt = β1 + δ Y_{t-1} + u_t\n3) Sabit parametre ve deterministik trend içeren kalıp:\n   ΔYt = β1 + β2 t + δ Y_{t-1} + u_t\n\nHipotezler:\nH0: δ = 0 (t_δ > τ ise seri durağan değildir, birim köke sahiptir)\nH1: δ < 0 (t_δ < τ ise seri durağandır, birim köke sahip değildir)",
      src: "Ders 5 s.42"
    }
  ],
  "Uygulamalar (DJI & TESLA)": [
    {
      type: "mc",
      q: "DJI Uygulamasında getiri serisine Box-Cox dönüşümü uygulanmadan önce `data_pos <- data + abs(min(data)) + 1` komutu neden çalıştırılmıştır?",
      opts: [
        "Getiri serisinde negatif değerler bulunduğu için tüm değerleri pozitif yapmak amacıyla",
        "Verinin ortalamasını sıfıra eşitlemek için",
        "Verideki trendi yok etmek için",
        "Gecikme sayısını hesaplamak için"
      ],
      ans: 0,
      exp: "Box-Cox dönüşümü pozitif değerler gerektirir. Ders 5 s.23'te belirtildiği gibi negatif değerli veriler olduğunda tüm değerler pozitif bir sabit ile toplanır, bu durum sistematik yapıyı değiştirmez (DJI s.15).",
      src: "DJI s.15 & Ders 5 s.23"
    },
    {
      type: "mc",
      q: "DJI getiri serisinde trend varlığını test etmek için hangi iki parametrik olmayan test kullanılmış ve ne sonuç elde edilmiştir?",
      opts: [
        "Cox-Stuart (p=0.3834) ve Mann-Kendall (p=0.6779) testleri; her ikisinde de H0 reddedilememiş ve trend olmadığı sonucuna varılmıştır",
        "Shapiro-Wilk ve Jarque-Bera testleri; artan trend bulunmuştur",
        "F testi ve Levene testi; azalan trend bulunmuştur",
        "Welch t-testi ve Wilcoxon testi; güçlü trend bulunmuştur"
      ],
      ans: 0,
      exp: "Cox-Stuart (H0: Artan trend yoktur, p=0.3834) ve Mann-Kendall (H0: Trend yoktur, p=0.67792) uygulanmış, H0 reddedilememiştir (DJI s.16-17).",
      src: "DJI s.16-17"
    },
    {
      type: "mc",
      q: "TESLA uygulamasında D'Agostino çarpıklık testi (`skew.test`) fiyat, basit getiri ve log getiri serilerine uygulandığında hangi seri simetrik (çarpıklığı önemsiz) çıkmıştır?",
      opts: [
        "Sadece log getiri serisi (tsla_lret, p = 0.9453)",
        "Sadece kapanış fiyatı serisi (TSLA.Close, p < 2.2e-16)",
        "Sadece basit getiri serisi (tsla_ret, p < 2.2e-16)",
        "Hiçbiri"
      ],
      ans: 0,
      exp: "TSLA.Close (skew=1.16, p<2.2e-16) ve tsla_ret (skew=0.365, p<2.2e-16) için çarpıklık anlamlı çıkarken, tsla_lret için skew=-0.0028 ve p=0.9453 > 0.05 bulunmuştur (TESLA s.17).",
      src: "TESLA s.17"
    },
    {
      type: "mc",
      q: "TESLA uygulamasında 3381 gözlemlik fiyat serisinin son 180 gözlemi test için ayrılmış (`sample.out = 180`) ve 3201 gözlemlik eğitim verisine `auto.arima` ve `ets` uygulanmıştır. Seçilen modeller hangileridir?",
      opts: [
        "ARIMA(0,1,1) ve ETS(M,A,N)",
        "ARIMA(1,0,0) ve ETS(A,A,A)",
        "ARIMA(2,2,2) ve ARCH(1)",
        "VAR(1) ve GARCH(1,1)"
      ],
      ans: 0,
      exp: "auto.arima(training) sonucunda ARIMA(0,1,1) (AIC=18667.82), ets(training) sonucunda ETS(M,A,N) (AIC=23125.81) modelleri elde edilmiştir (TESLA s.23-24).",
      src: "TESLA s.23-24"
    },
    {
      type: "open",
      q: "DJI uygulamasında ADF testi Type 1, Type 2 ve Type 3 modellerinin hangi durumlarda yorumlandığını açıklayınız.",
      model: "- Type 1 (no drift no trend): Seride ortalama (sabit) ve trend yoksa yorumlanır.\n- Type 2 (with drift no trend): Seride ortalama (sabit) var, ama trend yoksa yorumlanır.\n- Type 3 (with drift and trend): Seride hem ortalama (sabit) hem de trend varsa yorumlanır.",
      src: "DJI s.18-20"
    }
  ]
};

const EXAMS = [
  {
    title: "Deneme Sınavı 1 (Kapsamlı Karma Sınav - 100 Puan)",
    durationMin: 45,
    questions: [
      {
        type: "mc", pts: 5,
        q: "1. Ekonomik veri ile finansal veri arasındaki fark ve finansal verinin özellikleri düşünüldüğünde aşağıdakilerden hangisi finansal verinin tanımlayıcı özelliklerinden biri DEĞİLDİR?",
        opts: ["Aykırı gözlem (Outlier)", "Oynaklık kümelemesi (Volatility clustering)", "Ortalamaya dönüş (Mean reversion)", "Yalnızca yıllık takvim zamanlarında ölçülmesi"],
        ans: 3,
        exp: "Ekonomik veri düzenli takvim zamanlarında incelenirken, finansal veri gerçek zamanlı veya tik-tak şeklinde çok kısa zaman dilimlerinde incelenir ve aykırı gözlem, trend, ortalamaya dönüş, oynaklık kümelemesi özellikleri taşır (Ders 2 s.7).",
        src: "Ders 2 s.7"
      },
      {
        type: "mc", pts: 5,
        q: "2. Bir hisse senedinin 2 ay önceki fiyatı Pt-2 = 80$, 1 ay önceki fiyatı Pt-1 = 85$ ve bugünkü fiyatı Pt = 90$'dır (temettü ödemesi yoktur). İki aylık basit net getiri Rt(2) ve iki aylık basit brüt getiri 1+Rt(2) nedir?",
        opts: [
          "Rt(2) = 0.125 (%12.5); 1+Rt(2) = 1.125",
          "Rt(2) = 0.100 (%10.0); 1+Rt(2) = 1.100",
          "Rt(2) = 0.0588; 1+Rt(2) = 1.0625",
          "Rt(2) = 1.125; 1+Rt(2) = 0.125"
        ],
        ans: 0,
        exp: "Rt(2) = (90 - 80)/80 = 90/80 - 1 = 1.125 - 1 = 0.125 (%12.5). Brüt getiri: (1+Rt)(1+Rt-1) = (90/85)*(85/80) = 1.125 (Ders 2 s.30-32).",
        src: "Ders 2 s.30-32"
      },
      {
        type: "mc", pts: 5,
        q: "3. Yıllık faiz oranı r ve yıl sayısı n olmak üzere, n yıl sonra A$ değerindeki bir varlığın sürekli bileşik faize tabi tutulduğu varsayımıyla BUGÜNKÜ değeri (C) hangi formülle hesaplanır?",
        opts: ["C = A · exp(-r × n)", "C = A · exp(r × n)", "C = A / (1 + r × n)", "C = A · ln(r × n)"],
        ans: 0,
        exp: "Gelecek değer A = C·exp(r×n), bugünkü değer ise C = A·exp(-r×n) formülü ile hesaplanır (Ders 2 s.38-39).",
        src: "Ders 2 s.38-39"
      },
      {
        type: "mc", pts: 5,
        q: "4. Basit getiri Rt ~ i.i.d. LogNormal(μ, σ²) dağılımına sahipse beklenen değeri E(Rt) aşağıdakilerden hangisidir?",
        opts: ["exp(μ + σ²/2) - 1", "μ + σ²/2", "exp(2μ + σ²)", "ln(μ + σ²)"],
        ans: 0,
        exp: "Lognormal dağılan basit getirinin ortalaması E(Rt) = exp(μ + σ²/2) - 1, varyansı Var(Rt) = exp(2μ + σ²)[exp(σ²) - 1] (Ders 3 s.12).",
        src: "Ders 3 s.12"
      },
      {
        type: "mc", pts: 5,
        q: "5. Zaman serisi grafiğinde varyans sabit iken ortalama sabit değilse ve seride DETERMINİSTİK TREND varsa süreç akış şemasına göre hangi yöntem uygulanmalıdır?",
        opts: [
          "Trend Regresyon Modelleri (De-trending) veya Trend Ayrıştırma Yöntemleri (Decomposition)",
          "ARCH / GARCH Modelleri",
          "Box-Cox Dönüşümü",
          "Levene Testi"
        ],
        ans: 0,
        exp: "Stokastik trend varsa fark alma (1. veya 2. fark), deterministik trend varsa veya dönüşümler işe yaramıyorsa Trend Regresyon Modelleri (De-trending) ve Trend Ayrıştırma Yöntemleri (Decomposition) uygulanır (Ders 5 s.29, 39).",
        src: "Ders 5 s.29, 39"
      },
      {
        type: "mc", pts: 5,
        q: "6. Aylık kiralanan otel oda sayıları için yapılan varyans homojenlik testinde F-Test p-değeri 0.034, Levene's Test p-değeri 0.131 bulunmuştur (α=0.05). Doğru yorum hangisidir?",
        opts: [
          "F testine göre varyanslar eşit değildir; Levene testine göre varyanslar eşittir.",
          "Her iki teste göre de varyanslar eşittir.",
          "Her iki teste göre de varyanslar eşit değildir.",
          "F testine göre varyanslar eşittir; Levene testine göre eşit değildir."
        ],
        ans: 0,
        exp: "H0: İki kitle eşit varyansa sahiptir. F testinde p=0.034 < 0.05 (H0 red, eşit değil), Levene testinde p=0.131 > 0.05 (H0 reddedilemez, eşit) (Ders 5 s.26-27).",
        src: "Ders 5 s.26-27"
      },
      {
        type: "tf", pts: 4,
        q: "7. (D/Y) Bir zaman serisinin gözlem değerleri kümesinin bileşik olasılık dağılımı, zaman noktalarının zaman orijinine göre ileriye veya geriye kaydırılmasıyla değişmiyorsa bu seriye 'tam (güçlü) durağan zaman serisi' denir.",
        ans: true,
        exp: "Doğru. Tam durağan seriler tüm istatistiksel özellikleri zamana göre değişmeyen, istatistiksel olarak dengede olan serilerdir (Ders 5 s.11-12).",
        src: "Ders 5 s.11-12"
      },
      {
        type: "tf", pts: 4,
        q: "8. (D/Y) Normal dağılımın ölçek karışımı (sonlu karışımı) modelinde rt ~ (1-X)N(μ, σ1²) + XN(μ, σ2²) ifadesindeki X rastgele değişkeni Poisson dağılımına sahiptir.",
        ans: false,
        exp: "Yanlış. X rastgele değişkeni Bernoulli dağılımına sahiptir (Ders 3 s.16).",
        src: "Ders 3 s.16"
      },
      {
        type: "tf", pts: 4,
        q: "9. (D/Y) Bir kıymet düzenli olarak Dt tutarında temettü ödüyorsa, sürekli bileşik (log) getiri rt = ln(Pt + Dt) - ln(Pt-1) formülü ile hesaplanır.",
        ans: true,
        exp: "Doğru. Basit getiri Rt = (Pt + Dt)/Pt-1 - 1, log getiri rt = ln(Pt + Dt) - ln(Pt-1) olur (Ders 2 s.42).",
        src: "Ders 2 s.42"
      },
      {
        type: "tf", pts: 4,
        q: "10. (D/Y) Schwert (1989) Monte Carlo araştırmasıyla ADF testinin çok yüksek güce sahip olduğunu ve gecikme uzunluğu seçimine hiç duyarlı olmadığını göstermiştir.",
        ans: false,
        exp: "Yanlış. Schwert (1989), ADF testinin düşük güce sahip olduğunu ve gecikme uzunluğu seçimine ÇOK DUYARLI olduğunu ortaya koymuştur (Ders 5 s.45).",
        src: "Ders 5 s.45"
      },
      {
        type: "tf", pts: 4,
        q: "11. (D/Y) T tane gözlemin birinci dereceden farkı alındığında ilk gözlem kayıp olur ve çalışılan seri zb, b=2'den (z2 = y2 - y1) başlar.",
        ans: true,
        exp: "Doğru. d=1 için ilk gözlem kaybolur ve b=2 olur; d=2 için b=3 olur; dönüşüm yapılmadıysa b=1 olur (Ders 5 s.31-34).",
        src: "Ders 5 s.31-34"
      },
      {
        type: "fill", pts: 5,
        q: "12. Bir varlığın t-1 zamanından t zamanına kadar elde tutulması süresine _________ tutma zamanı (holding period) denir.",
        ans: ["elde"],
        exp: "t-1 ve t arasında geçen zamana elde tutma zamanı (holding period) denir (Ders 2 s.23).",
        src: "Ders 2 s.23"
      },
      {
        type: "fill", pts: 5,
        q: "13. N varlıktan oluşan bir portföyün basit net getirisi Rp,t = Σ wi·Rit, o portföyde bulunan varlıkların basit net getirilerinin _________ ortalamasıdır.",
        ans: ["ağırlıklı", "agirlikli"],
        exp: "Portföy basit net getirisi, varlıkların basit net getirilerinin ağırlıklı ortalamasıdır (Ders 2 s.41).",
        src: "Ders 2 s.41"
      },
      {
        type: "fill", pts: 5,
        q: "14. Box-Cox dönüşümünde hata kareler toplamını yani _________ değerini en küçük veren dönüşüm en ideal dönüşümdür.",
        ans: ["sse"],
        exp: "SSE'yi en küçük veren dönüşüm en ideal dönüşümdür (Ders 5 s.23).",
        src: "Ders 5 s.23"
      },
      {
        type: "fill", pts: 5,
        q: "15. ADF testinde gecikme uzunluğunun tespitinde Akaike (AIC) ya da _________ bilgi kriterleri kullanılabilir.",
        ans: ["schwartz", "schwarz", "bic"],
        exp: "Gecikme uzunluğunun tespitinde Akaike ya da Schwartz bilgi kriterleri kullanılabilir (Ders 5 s.44).",
        src: "Ders 5 s.44"
      },
      {
        type: "open", pts: 10,
        q: "16. (Klasik) Yıllıklandırılmış ortalama getiri nedir? Bir varlık k yıl elde tutuluyorsa yıllıklandırılmış getirinin tam (geometrik ortalama) formülünü ve 1. dereceden Taylor genişlemesi ile yaklaşık formülünü yazınız.",
        model: "Getirileri karşılaştırabilmek için zaman aralığı önemlidir; varlık k yıl elde tutuluyorsa yıllıklandırılmış (annualized) ortalama getiri, ilgili k tane tek dönemlik basit brüt getirinin geometrik ortalamasından 1 çıkarılmasıyla bulunur:\n\nTam formül:\nYıllıklandırılmış {Rt[k]} = [ ∏_{j=0}^{k-1} (1 + R_{t-j}) ]^(1/k) - 1\nveya exp[ (1/k) Σ_{j=0}^{k-1} ln(1 + R_{t-j}) ] - 1\n\n1. Dereceden Taylor Genişlemesi (yaklaşık formül):\nYıllıklandırılmış {Rt[k]} ≈ (1/k) Σ_{j=0}^{k-1} R_{t-j}",
        src: "Ders 2 s.35-36"
      },
      {
        type: "open", pts: 10,
        q: "17. (Klasik - R Çıktısı Yorumlama) Bir log-getiri serisi (rt) için R'de aşağıdaki iki analiz yapılmıştır:\n\nAnaliz A:\n> s3 = skewness(rt); T = length(rt); tst = s3/sqrt(6/T)\n> tst\n[1] -1.237977\n> pv = 2*pnorm(tst)\n> pv\n[1] 0.2157246\n\nAnaliz B:\n> t.test(rt)\nt = 1.9181, df = 501, p-value = 0.05567\nalternative hypothesis: true mean is not equal to 0\n\nHer iki analizin hangi amaçla yapıldığını, H0 hipotezlerini ve α = 0.05 düzeyinde kararlarını yazınız.",
        model: "Analiz A (Simetriklik / Çarpıklık Testi - Ders 3 s.21-22):\n- Amaç: Getiri serisinin dağılımının simetrik olup olmadığını test etmek.\n- H0: S(r) = 0 (Dağılım simetriktir) vs Ha: S(r) ≠ 0.\n- Karar: p-değeri = 0.2157 > 0.05 (veya |-1.238| < 1.96) olduğundan H0 reddedilemez. rt serisi simetrik bir dağılıma sahiptir.\n\nAnaliz B (Tek Örneklem t-Testi - Ders 3 s.26):\n- Amaç: Log-getiri değişkeninin anakütle ortalamasının sıfır olup olmadığını test etmek.\n- H0: μ = 0 (Log-getirinin ortalaması sıfırdır) vs Ha: μ ≠ 0.\n- Karar: p-değeri = 0.05567 > 0.05 olduğundan H0 reddedilemez. Log-getirinin ortalaması istatistiksel olarak sıfırdır.",
        src: "Ders 3 s.21-22, 26"
      },
      {
        type: "open", pts: 10,
        q: "18. (Klasik) Tam durağanlık, birinci dereceden durağanlık ve zayıf (ikinci dereceden / kovaryans) durağanlık kavramlarını tanımlayınız. Zayıf durağanlığın matematiksel koşullarını yazınız.",
        model: "- Tam (Güçlü) Durağanlık: Zaman serisinin tüm istatistiksel özelliklerinin zamana göre değişmezliğidir. Bileşik olasılık dağılımı zaman orijinine göre ileri/geri kaydırıldığında değişmez.\n- Birinci Dereceden Durağanlık: Serinin sadece sıfır orijinine göre birinci momenti yani ortalaması zamana göre değişmiyorsa birinci dereceden durağandır.\n- Zayıf / İkinci Dereceden / Kovaryans Durağanlık: Ortalamanın yanında ikinci momenti yani varyansı ve kovaryansı da zamana göre değişmiyorsa ve kovaryans sadece iki gözlem arasındaki zaman farkına (gecikmeye) bağlıysa seri zayıf durağandır.\n\nMatematiksel Koşullar (t, s = 1, 2, ..., T; t ≠ s):\n1) E(Yt) = E(Ys) = μ (Sabit ortalama)\n2) V(Yt) = V(Ys) = σ² (Sabit varyans)\n3) γ(Yt, Ys) = E[(Yt - μ)(Ys - μ)] = γ_{s-t} (Sadece gecikmeye bağlı kovaryans)",
        src: "Ders 5 s.10-16"
      }
    ]
  },
  {
    title: "Deneme Sınavı 2 (Uygulama ve Yorum Ağırlıklı Sınav - 100 Puan)",
    durationMin: 45,
    questions: [
      {
        type: "mc", pts: 5,
        q: "1. Sermaye piyasası kendi içinde hangi alt piyasalara ayrılabilir?",
        opts: [
          "Birincil ve ikincil piyasa; ayrıca spot ve vadeli piyasalar",
          "Sadece mevduat ve repo piyasaları",
          "Yalnızca hazine bonosu piyasası",
          "Tüketici ve üretici piyasaları"
        ],
        ans: 0,
        exp: "Sermaye piyasası birincil ve ikincil piyasa olarak ikiye ayrılabilir; ayrıca spot piyasalar ve vadeli piyasalar olarak da ikiye ayrılabilir (Ders 2 s.5).",
        src: "Ders 2 s.5"
      },
      {
        type: "mc", pts: 5,
        q: "2. i = Firma 1, Firma 2 ve t = 1944, 1945, ... şeklinde hem kesit birimlerini hem de zaman boyutunu birlikte içeren veri türü hangisidir?",
        opts: ["Panel Verisi (Panel Data)", "Kesit Veri (Cross-Sectional Data)", "Zaman Serisi Verisi (Time Series Data)", "Tik-tak Veri"],
        ans: 0,
        exp: "Birden fazla firmanın (i) birden fazla zaman noktasındaki (t) gözlemlerini içeren veri türü Panel Verisidir (Ders 2 s.16-18).",
        src: "Ders 2 s.16-18"
      },
      {
        type: "mc", pts: 5,
        q: "3. Zaman serisi bileşenlerinden 'Doğrusal Azalan Trend' ve 'Üssel Artan Trend' modelleri ders slaytlarında nasıl gösterilmiştir?",
        opts: [
          "Doğrusal azalan: Y(t) = β0 - β1·t + ε ; Üssel artan: Y(t) = (e^(β0 + β1·t))·ε",
          "Doğrusal azalan: Y(t) = β0 + β1·t + ε ; Üssel artan: Y(t) = β0 + β1·t² + ε",
          "Doğrusal azalan: Y(t) = ln(t) ; Üssel artan: Y(t) = 1/t",
          "Doğrusal azalan: Y(t) = ε ; Üssel artan: Y(t) = β0"
        ],
        ans: 0,
        exp: "Ders 4 s.15'te 6 trend kalıbı verilmiştir: Doğrusal artan/azalan, Karesel artan/azalan ve Üssel artan/azalan.",
        src: "Ders 4 s.15"
      },
      {
        type: "mc", pts: 5,
        q: "4. Bir zaman serisinde hem varyans sabit değil hem de ortalama sabit değilse ve uygulanan dönüşümler işe yaramıyorsa süreç akış şemasına göre hangi modeller önerilir?",
        opts: [
          "VAR (Vector Autoregressive) modelleri (KPSS testi sonrası) ve Almon/Koyck Modelleri",
          "Sadece basit hareketli ortalama",
          "Yalnızca birinci dereceden fark alma",
          "Shapiro-Wilk modeli"
        ],
        ans: 0,
        exp: "Varyans sabit mi? Hayır + Ortalama sabit mi? Hayır -> Dönüşümler işe yaramıyorsa VAR modelleri (KPSS testi sonrası) ve Almon/Koyck Modelleri (Ders 5 s.41).",
        src: "Ders 5 s.41"
      },
      {
        type: "mc", pts: 5,
        q: "5. DJI Uygulamasında 2020-2025 yılları için yıllık Shapiro-Wilk normallik testi sonuçları incelendiğinde (2020: 5.7e-15, 2021: 0.0021, 2022: 0.287, 2023: 0.781, 2024: 4.5e-05, 2025: 2.5e-13), α=0.05 düzeyinde hangi yıllarda normallik varsayımı (H0) reddedilemez?",
        opts: ["2022 ve 2023", "2020 ve 2025", "Hiçbir yılda reddedilemez", "Tüm yıllarda reddedilemez"],
        ans: 0,
        exp: "2022 (p=0.287 > 0.05) ve 2023 (p=0.781 > 0.05) yıllarında p > 0.05 olduğu için H0 reddedilemez; diğer yıllarda p < 0.05 olup normal dağılmamaktadır (DJI s.11).",
        src: "DJI s.11"
      },
      {
        type: "mc", pts: 5,
        q: "6. TESLA Uygulamasında kapanış fiyatı, basit getiri ve log getiri serilerinin her biri ortadan ikiye bölünerek `leveneTest` uygulanmıştır. Üç seri için de p-değeri < 0.001 bulunmuştur. Bunun anlamı nedir?",
        opts: [
          "Her üç seride de H0 (varyanslar eşittir) reddedilir; varyans homojen değildir (değişen varyanslılık vardır).",
          "Her üç seride de varyanslar homojendir.",
          "Sadece fiyat serisi durağandır.",
          "Serilerde otokorelasyon yoktur."
        ],
        ans: 0,
        exp: "Levene testinde H0: Varyanslar eşittir. p < 0.05 olduğundan fiyat, basit getiri ve log getiri serilerinin tamamında iki dönemin varyansları birbirinden farklıdır (TESLA s.20-22).",
        src: "TESLA s.20-22"
      },
      {
        type: "tf", pts: 4,
        q: "7. (D/Y) Aksi söylenmedikçe finansal zaman serilerinde 'getiri' denildiğinde Basit NET Getiri anlaşılmalıdır.",
        ans: true,
        exp: "Doğru (Ders 2 s.25).",
        src: "Ders 2 s.25"
      },
      {
        type: "tf", pts: 4,
        q: "8. (D/Y) Q-Q plot grafiğinde (sıralı veri, kantil) ikililerinin yer aldığı noktalar doğru üzerinde veya çok yakınında ise H0 reddedilemez ve kitlenin ilgili dağılımdan geldiği söylenir.",
        ans: true,
        exp: "Doğru (Ders 3 s.31).",
        src: "Ders 3 s.31"
      },
      {
        type: "tf", pts: 4,
        q: "9. (D/Y) Zaman serisi ekseni gün olarak ölçülmüşse ve bugünkü dönem Yt Çarşamba gününü gösteriyorsa, Yt-1 Perşembe gününü, Yt-2 Cuma gününü temsil eder.",
        ans: false,
        exp: "Yanlış. Yt-1 geçmiş dönemi gösterir: Yt Çarşamba ise Yt-1 Salı gününü, Yt-2 Pazartesi gününü temsil eder (Ders 4 s.7).",
        src: "Ders 4 s.7"
      },
      {
        type: "tf", pts: 4,
        q: "10. (D/Y) Düzensiz hareketler (deprem, savaş, kriz vb. dış kaynaklı bozukluklar) standart dönüşümlerle seriden tamamen yok edilebilir.",
        ans: false,
        exp: "Yanlış. Düzensiz hareketleri standart dönüşümlerle tamamen yok etmek pek mümkün değildir (Ders 4 s.20).",
        src: "Ders 4 s.20"
      },
      {
        type: "tf", pts: 4,
        q: "11. (D/Y) TESLA uygulamasında `CalculateReturns` fonksiyonu ile 1116 gözlemlik fiyat serisinden getiri hesaplandığında ilk gözlem NA olur ve 1115 gözlem kalır.",
        ans: true,
        exp: "Doğru. Getiri Pt ve Pt-1 üzerinden hesaplandığı için ilk gözlemde Pt-1 yoktur ve 1 gözlem kaybolur (TESLA s.10-12).",
        src: "TESLA s.10-12"
      },
      {
        type: "fill", pts: 5,
        q: "12. Değişen varyansa sahip finansal zaman serisi verileri _________ veri veya oynaklığı yüksek veri olarak adlandırılır.",
        ans: ["oynak"],
        exp: "Değişen varyansa sahip seri, OYNAK veri olarak adlandırılır (Ders 5 s.23).",
        src: "Ders 5 s.23"
      },
      {
        type: "fill", pts: 5,
        q: "13. Otokorelasyon varsayım kontrolü için Ders 3'te adı geçen test _________-Watson testidir.",
        ans: ["durbin"],
        exp: "Otokorelasyon testi: Durbin-Watson Test (Ders 3 s.19).",
        src: "Ders 3 s.19"
      },
      {
        type: "fill", pts: 5,
        q: "14. Mevsimsel dalga analizinde bir tepeden diğer tepeye (veya çukurdan çukura) yatay uzaklığa dalga uzunluğu (L), dikey yüksekliğe ise dalga _________ denir.",
        ans: ["şiddeti", "siddeti"],
        exp: "Dalga analizi: Dalga Uzunluğu (L) ve Dalga Şiddeti (Ders 4 s.17).",
        src: "Ders 4 s.17"
      },
      {
        type: "fill", pts: 5,
        q: "15. Schwert (1989) çalışmasında maksimum gecikme uzunluğu formülü p_max = [ 12 · (n / _________ )^(1/4) ] olarak önerilmiştir.",
        ans: ["100"],
        exp: "p_max = [12 * (n/100)^(1/4)] (Ders 5 s.44).",
        src: "Ders 5 s.44"
      },
      {
        type: "open", pts: 10,
        q: "16. (Klasik) Olympia kağıt havlu şirketi (Örnek-10, 120 haftalık satış) ve ABD Tütün Üretimi (Örnek-8) serilerinin durağanlık açısından ne tür sorunlar içerdiğini ve nasıl ele alındığını açıklayınız.",
        model: "- ABD Tütün Üretimi (Örnek-8, Ders 5 s.19-20): Zaman geçtikçe kararlı bir şekilde artmakta (değişen ortalama / artan trend) VE zamanla değişen (genişleyen) salınımlarla hareket etmektedir (değişen varyans). Hem ortalama hem varyans durağan değildir; öngörüden önce her ikisi de giderilmelidir (önce varyans, sonra ortalama).\n- Olympia Kağıt Havlu (Örnek-10, Ders 5 s.35-37): 60. gözleme kadar azalan, 60. gözlemden sonra artan bir trend vardır; sabit bir ortalama etrafında hareket etmez. Birinci dereceden fark alındığında trend kalkmış ve sıfır etrafında salınım oluşmuş görünür; ancak 66. ve 67. noktalardaki sapmalar durağanlığı bozabilir.",
        src: "Ders 5 s.19-20, 35-37"
      },
      {
        type: "open", pts: 10,
        q: "17. (Klasik - DJI Uygulaması) DJI getiri serisinde varyans homojenliğini incelemek için yapılan `var.test(sample1, sample2)` ve ardından yapılan Box-Cox analizi çıktıları şöyledir:\n- F = 3.4859, num df = 727, denom df = 728, p-value < 2.2e-16\n- Box-Cox lambda = 2\nBu iki çıktıyı hipotezleriyle birlikte yorumlayınız.",
        model: "1) F Testi (`var.test` - DJI s.14):\n- H0: İki grubun varyansları eşittir.\n- p-değeri < 2.2e-16 < 0.05 olduğu için H0 reddedilir. İki dönemin varyansları eşit değildir (oran 3.49); seride değişen varyanslılık vardır.\n\n2) Box-Cox Dönüşümü (DJI s.15):\n- Varyans homojenliğini sağlamak için (negatif değerler pozitife kaydırıldıktan sonra) Box-Cox uygulanmış ve λ = 2 bulunmuştur.\n- Yorum: Orijinal verinin KARESİ (λ=2) alınırsa varyans homojenliği sağlanabilir (dönüşüm sonrası tekrar homojenlik testi yapılmalıdır).",
        src: "DJI s.14-15"
      },
      {
        type: "open", pts: 10,
        q: "18. (Klasik - TESLA Uygulaması) TESLA kapanış fiyatı serisi (`df_tesla$TSLA.Close`) için:\na) Jarque-Bera testi (X-squared = 3.9273, p = 0.1403) ve Shapiro-Wilk testi (W = 0.99141, p = 4.236e-06) sonuçlarını karşılaştırınız.\nb) Seri iki gruba bölündüğünde Welch t-testi (t = 5.2897, p = 1.564e-07, mean0 = 233.42, mean1 = 213.40) neyi göstermektedir?",
        model: "a) Normallik Testleri (TESLA s.14):\n- Her iki testte de H0: Veriler normal dağılan bir kitleden gelmektedir.\n- Jarque-Bera testinde p = 0.1403 > 0.05 olduğundan H0 reddedilemez (normal görünür).\n- Ancak Shapiro-Wilk testinde p = 4.236e-06 < 0.05 olduğundan H0 reddedilir (normal dağılmamaktadır). Ayrıca tam seri (n=3613) üzerinde yapılan gofTest'te hem normal hem lognormal dağılım reddedilmiştir (p=0).\n\nb) Welch İki Örneklem t-Testi (TESLA s.15):\n- H0: İki dönemin ortalamaları arasındaki fark sıfırdır (ortalamalar eşittir).\n- p = 1.564e-07 < 0.05 olduğundan H0 reddedilir. İlk yarının ortalaması (233.42) ile ikinci yarının ortalaması (213.40) istatistiksel olarak farklıdır; yani fiyat serisinin ortalaması zamana göre sabit değildir (ortalama açısından durağan değildir).",
        src: "TESLA s.14-15, 18-19"
      }
    ]
  }
];

const FLASHCARDS = [
  { q: "Finansal Zaman Serilerinin 4 Temel Özelliği (Ders 1)", a: "1) Doğrusal değildirler\n2) Yapısal kırılmalara sahiptirler\n3) Yüksek frekanslı ve oynaktırlar\n4) Asimetriktirler" },
  { q: "Para Piyasası vs Sermaye Piyasası (Ders 2)", a: "Para Piyasası: Vadesi ≤ 12 ay, likiditesi yüksek, likidite ihtiyacını karşılar, en etkin/gelişmiş piyasa.\nSermaye Piyasası: Orta ve uzun vadeli fon aktarımı; birincil/ikincil ve spot/vadeli olarak ayrılır." },
  { q: "Finansal Verinin 4 Tanımlayıcı Özelliği (Ders 2 s.7)", a: "1) Aykırı Gözlem (Outlier)\n2) Trend\n3) Ortalamaya Dönüş (Mean Reversion)\n4) Oynaklık Kümelemesi (Volatility Clustering)" },
  { q: "Neden Fiyat Yerine Getiri Kullanılır? (Campbell, Lo ve MacKinlay, 1997)", a: "1) Ortalama yatırımcı için yatırım fırsatlarının tam (complete) ve ölçek-bağımsız (scale-free) özet bilgisini verir.\n2) Fiyat serilerine göre daha çekici (attractive) istatistiksel özellikler içerir." },
  { q: "Bir Dönemlik Basit Brüt ve Basit Net Getiri Formülleri", a: "Basit Brüt Getiri: 1 + Rt = Pt / Pt-1\nBasit Net Getiri: Rt = Pt / Pt-1 - 1 = (Pt - Pt-1) / Pt-1" },
  { q: "k-Dönemlik Basit Brüt Getiri (Bileşik Getiri)", a: "1 + Rt(k) = Pt / Pt-k = (1+Rt)(1+Rt-1)...(1+Rt-k+1) = ∏_{j=0}^{k-1} (1 + Rt-j)" },
  { q: "Sürekli Bileşik Faiz: Gelecek Değer (A) ve Bugünkü Değer (C)", a: "Gelecek Değer: A = C · exp(r × n)\nBugünkü Değer: C = A · exp(-r × n)\n(C: sermaye, r: yıllık faiz oranı, n: yıl sayısı)" },
  { q: "Sürekli Bileşik (Log) Getiri ve Çok Dönemli Log Getiri", a: "rt = ln(1 + Rt) = ln(Pt / Pt-1) = pt - pt-1\nÇok dönemli: rt[k] = rt + rt-1 + ... + rt-k+1\nDönüşüm: Rt = exp(rt) - 1" },
  { q: "Temettü Ödemesi (Dt) Varsa Basit ve Log Getiri", a: "Basit Getiri: Rt = (Pt + Dt) / Pt-1 - 1\nLog Getiri: rt = ln(Pt + Dt) - ln(Pt-1)" },
  { q: "Portföy Getirisi ve Aşırı Getiri", a: "Portföy: Rp,t = Σ_{i=1}^N wi · Rit (ağırlıklı ortalama)\nBasit Aşırı Getiri: Zt = Rt - R0t\nLog Aşırı Getiri: zt = rt - r0t (R0t: risksiz referans getiri)" },
  { q: "DÖK, DİK, DDK ve Öngörü (Ders 3 s.8)", a: "DÖK: Dönem Öncesi Kestirim (örneklem öncesi geçmiş)\nDİK: Dönem İçi Kestirim (modelin kurulduğu örneklem içi)\nDDK: Dönem Dışı Kestirim (gözlemi var ama model dışı test dönemi)\nÖngörü: Gelecek dönem tahmini" },
  { q: "Basit Getiride Normal Dağılım Varsayımının 3 Sorunu (Ders 3 s.11)", a: "1) Normal dağılım (-∞, +∞) aralığındadır, oysa getirinin alt sınırı -1'dir.\n2) Tek dönemli Rt normal olsa bile çok dönemli Rt[k] çarpımlardan oluştuğu için normal dağılmaz.\n3) Normal dağılım simetriktir, oysa ampirik getiriler sağa çarpıktır." },
  { q: "Kararlı (Stable) Dağılım ve Cauchy Dağılımı (Ders 3 s.14-15)", a: "İki bağımsız değişkenin doğrusal birleşimi konum ve ölçek parametrelerine kadar aynı dağılıma sahipse kararlıdır.\nNormal-olmayan kararlı dağılımlarda SONLU VARYANS YOKTUR (örn. Cauchy dağılımı)." },
  { q: "Simetriklik (Çarpıklık) ve Kalın Kuyruk (Basıklık) Test İstatistikleri", a: "Çarpıklık: S* = Ŝ(x) / √(6/T) ~ N(0,1)  (H0: S=0 simetrik)\nBasıklık: K* = (K̂(x) - 3) / √(24/T) ~ N(0,1)  (H0: K-3=0 normal kuyruk)" },
  { q: "Jarque-Bera (JB) Normallik Testi", a: "JB = (K*)² + (S*)² ~ χ²_2 (2 s.d. ki-kare)\nH0: Veriler normal kitleden gelmektedir.\nJB > χ²_2(α) veya p < α ise H0 reddedilir." },
  { q: "Öngörü Horizonu Sınırları (Ders 4 s.11)", a: "Yakın Dönem: t < 10 zd\nKısa Dönem: 10 zd < t < 30 zd\nOrta Dönem: 30 zd < t < 90 zd\nUzun Dönem: t > 90 zd (slaytta sehven < yazılmıştır)" },
  { q: "Zaman Serisinin 4 Bileşeni (Ders 4 s.13)", a: "1) Trend (uzun dönem ≥ 7 yıl artış/azalış eğilimi)\n2) Mevsimsellik (≤ 1 yıl periyodik, yıllık veride görünmez)\n3) Döngüsellik (> 1 yıl, 2-10 veya 20-30 yıllık büyük dalgalar)\n4) Düzensiz Hareketler (ani sıçrama/çöküş, gürültü)" },
  { q: "Tam Durağanlık vs Zayıf (İkinci Dereceden / Kovaryans) Durağanlık", a: "Tam Durağanlık: Bileşik olasılık dağılımı ve tüm momentler zamana göre değişmez.\nZayıf Durağanlık: Ortalama sabit E(Yt)=μ, varyans sabit V(Yt)=σ² ve kovaryans sadece gecikmeye bağlı Cov(Yt,Ys)=γ_{s-t}." },
  { q: "Box-Cox Dönüşümü ve Özel λ Değerleri (Ders 5 s.23)", a: "z_t^(λ) = (z_t^λ - 1) / λ\nλ = 0 -> Logaritmik dönüşüm (ln zt)\nλ = -1 -> Ters dönüşüm (1 / zt)\nλ = 0.5 -> Kök dönüşüm (√zt)\nλ = 2 -> Karesel dönüşüm (zt²)" },
  { q: "Varyans Homojenlik Testleri: F Testi ve Levene Testi", a: "Seri tam ortadan ikiye bölünür.\nF Testi: H0: İki normal kitle eşit varyansa sahiptir.\nLevene Testi: H0: İki kitle eşit varyansa sahiptir." },
  { q: "1. ve 2. Dereceden Fark Alma ve Başlangıç İndisi (b)", a: "Fark yok (d=0): b = 1 (z1 = y1)\n1. fark (d=1): zt = yt - yt-1, ilk gözlem kaybolur, b = 2\n2. fark (d=2): zt = yt - 2yt-1 + yt-2, ilk iki gözlem kaybolur, b = 3" },
  { q: "ADF vs KPSS Birim Kök Testleri Hipotez Farkı", a: "DF / ADF: H0: δ = 0 (Seri durağan değildir / birim köke sahiptir) vs H1: δ < 0 (Durağandır).\nKPSS: H0: σ_u² = 0 (Seri durağandır) vs H1: σ_u² > 0 (Birim kök vardır)." },
  { q: "ADF Type 1, Type 2, Type 3 Ne Zaman Yorumlanır? (DJI s.18-20)", a: "Type 1 (no drift no trend): Ortalama ve trend yoksa\nType 2 (with drift no trend): Ortalama var, trend yoksa\nType 3 (with drift and trend): Hem ortalama hem trend varsa" }
];

