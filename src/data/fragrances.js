export const FRAGRANCES = [
  // --- ÖNCEKİ DEVAM EDEN KOKULAR ---
  {
    id: 'leyl',
    name: 'Leyl',
    subtitle: 'Odunsu & Pudramsı Aura',
    tagline: 'Gecenin asil dinginliği, teninizin doğal imzası.',
    price: 250,
    volume: '7 ml',
    category: 'odunsu',
    season: 'all',
    seasonLabel: '4 Mevsim & Gece',
    gender: 'Her Tene Uyumlu',
    badge: 'İmza Koku',
    image: '/leyl-hero.jpg',
    sillage: 88,
    longevity: 95,
    notes: {
      top: ['Aromatik Esintiler', 'Tatlı Bergamot'],
      heart: ['Pudramsı Notalar', 'Zarif Çiçekler'],
      base: ['Derin Odunsu', 'Sıcak Sandal Ağacı', 'Tensel Misk']
    },
    mood: 'Durgun, Zarif, Karizmatik',
    description: 'Aromatik ferahlığın pudramsı yumuşaklıkla buluşup derin odunsu tonlarla tene mühürlendiği eşsiz kompozisyon. %100 saf yağ formuyla baş ağrıtmayan temiz deneyim.'
  },
  {
    id: 'yar',
    name: 'Yar',
    subtitle: 'Deniz Esintisi & Çiçeksi Dokunuş',
    tagline: 'Okyanus melteminin asil nilüfer ve orkidelerle dansı.',
    price: 250,
    volume: '7 ml',
    category: 'ciceksi',
    season: 'summer',
    seasonLabel: 'İlkbahar / Yaz',
    gender: 'Zarif & Paylaşılan Aura',
    badge: 'Ferah & Su',
    image: '/yar-hero.jpg',
    sillage: 85,
    longevity: 90,
    notes: {
      top: ['Kristal Deniz Suyu', 'Ozonik Esinti', 'Taze Narenciye'],
      heart: ['Mavi Orkide', 'Pembe Nilüfer', 'Beyaz Yasemin'],
      base: ['İpeksi Beyaz Misk', 'Yumuşak Sedir']
    },
    mood: 'Ferahlatıcı, Tensel, Berrak',
    description: 'Denizden yükselen canlandırıcı su damlalarının narin çiçek yapraklarıyla buluştuğu taptaze bir deneyim. %100 saf konsantre yağ formuyla sıcak havalarda ferahlık yayar.'
  },
  {
    id: 'oud',
    name: 'Oud',
    subtitle: 'Kadim Ud Ağacı & Mistik Safran',
    tagline: 'Safran ve lavantanın krallara layık koyu ud ağacıyla tok buluşması.',
    price: 250,
    volume: '7 ml',
    category: 'odunsu',
    season: 'winter',
    seasonLabel: 'Sonbahar / Kış',
    gender: 'Tok & Asil Karakter',
    badge: 'Yoğun Kış',
    image: '/oud-hero.jpg',
    sillage: 96,
    longevity: 98,
    notes: {
      top: ['Kıymetli Safran', 'Lavanta', 'Hindistan Cevizi'],
      heart: ['Kadim Agarwood (Ud Ağacı)', 'Tütsü'],
      base: ['Koyu Paçuli', 'Zengin Misk', 'Kuru Odunlar']
    },
    mood: 'Tok, Mistik, Güçlü & Karizmatik',
    description: 'Açılışındaki safran ve baharat derinliğini kalbindeki asil ud ağacıyla mühürleyen benzersiz bir kış kompozisyonu. Soğuk havada kaban ve atkılarda günlerce kalıcıdır.'
  },
  {
    id: 'sandal',
    name: 'Sandal',
    subtitle: 'Saf Sandal Ağacı & Dinginlik',
    tagline: 'Sütlü sandal ağacının kadife kaşmir yumuşaklığındaki huzuru.',
    price: 250,
    volume: '7 ml',
    category: 'odunsu',
    season: 'winter',
    seasonLabel: 'Sonbahar / Kış',
    gender: 'Her Tene Uyumlu',
    badge: 'Sessiz Lüks',
    image: '/sandal-hero.jpg',
    sillage: 86,
    longevity: 94,
    notes: {
      top: ['Hafif Beyaz Çiçek Esintileri'],
      heart: ['Saf Sütlü Sandal Ağacı', 'Sedir Özü'],
      base: ['Kaşmir Misk', 'Doğal Odunsu Reçine']
    },
    mood: 'Dingin, Kremsi, Meditatif',
    description: 'Sütlü ve sıcak sandal ağacının zihni dinlendiren, tene ikinci bir ten gibi oturan sakinleştirici dokunuşu. Sessiz lüksün ve temiz kokunun zirvesi.'
  },
  {
    id: 'berri',
    name: 'Berri',
    subtitle: 'Aromatik Lavanta & Asil Sedir',
    tagline: 'Nane ve kekik tazeliğinin derin orman odunlarıyla dengesi.',
    price: 250,
    volume: '7 ml',
    category: 'aromatik',
    season: 'summer',
    seasonLabel: 'İlkbahar / Yaz',
    gender: 'Oturaklı & Ferah Duruş',
    badge: 'Klasik Centilmen',
    image: '/berri-hero.jpg',
    sillage: 87,
    longevity: 89,
    notes: {
      top: ['Taze Dağ Nanesi', 'Bergamot', 'Lavanta', 'Yabani Kekik'],
      heart: ['Sedir Ağacı', 'Sandal Ağacı', 'Yasemin', 'Sardunya'],
      base: ['Meşe Yosunu', 'Orman Yeşili Odunsu Akorlar']
    },
    mood: 'Ferah, Kararlı, Diri',
    description: 'Ferahlatıcı nane ve lavantanın asil sedir ağacı ve meşe yosunuyla birleştiği, gün boyu taze ve oturaklı hissettiren modern fougère deneyimi.'
  },

  // --- YENİ EKLENEN KOKULAR ---
  {
    id: 'musk',
    name: 'Musk',
    subtitle: 'Saf Misk & İpeksi Ten Dokunuşu',
    tagline: 'Modern, tatlımsı ve odunsu tonlarla harmanlanmış tertemiz bir ten aurası.',
    price: 250,
    volume: '7 ml',
    category: 'oryantal',
    season: 'all',
    seasonLabel: '4 Mevsim',
    gender: 'Tensel Saflık (Her Tene Uygun)',
    badge: 'Yumuşak & Temiz',
    image: '/musk-hero.jpg',
    sillage: 89,
    longevity: 95,
    notes: {
      top: ['Hafif Pudramsı Esinti', 'Beyaz Çiçek Yaprakları'],
      heart: ['Yumuşak Modern Misk', 'Tatlı Odunsu Akorlar'],
      base: ['Sıcak Amber Dokunuşu', 'Kalıcı Derin Misk']
    },
    mood: 'Temiz, Kadifemsi, Huzurlu',
    description: 'Geleneksel ağır misk anlayışının ötesinde; tatlımsı, hafif odunsu ve çiçeksi nüanslarla dengelenmiş modern saf misk. Tende taze yıkanmış kumaş ferahlığı ve tensel bir sıcaklık bırakır.'
  },
  {
    id: 'mahi',
    name: 'Mahi',
    subtitle: 'Meyvemsi Çiçek Şöleni & Tatlı Vanilya',
    tagline: 'Elma, frenk üzümü ve beyaz frezyanın vanilyalı neşeli dansı.',
    price: 250,
    volume: '7 ml',
    category: 'ciceksi',
    season: 'summer',
    seasonLabel: 'İlkbahar / Yaz',
    gender: 'Zarif & Işıltılı',
    badge: 'Meyveli & Çiçeksi',
    image: '/mahi-hero.jpg',
    sillage: 88,
    longevity: 91,
    notes: {
      top: ['Kırmızı Elma', 'Bergamot', 'Siyah Frenk Üzümü', 'Mandalina', 'Portakal'],
      heart: ['Beyaz Frezya', 'Zarif Yasemin', 'Beyaz Zambak', 'Taze Vanilya'],
      base: ['Yumuşak Misk', 'Madagaskar Vanilyası']
    },
    mood: 'Neşeli, Aydınlık, Çekici',
    description: 'Taze narenciyelerin ve frenk üzümünün enerjisiyle açılan, kalp notasında frezya ve zambakla zarafete dönüşen, dipte ise misk ve vanilyayla tatlılaşan ferah bir buket.'
  },
  {
    id: 'hiss',
    name: 'Hiss',
    subtitle: 'Kadim Doğu Ritüeli & Mistik Çiçekler',
    tagline: 'Ud ağacı, buhur tütsüsü ve sandalın asil çiçeklerle harmanı.',
    price: 250,
    volume: '7 ml',
    category: 'oryantal',
    season: 'winter',
    seasonLabel: 'Sonbahar / Kış',
    gender: 'Mistik & Paylaşılan Derinlik',
    badge: 'Kadim Miras',
    image: '/hiss-hero.jpg',
    sillage: 95,
    longevity: 97,
    notes: {
      top: ['Ferah Doğu Esintileri', 'Hafif Çiçeksi Açılış'],
      heart: ['Bachoor (Geleneksel Tütsü)', 'Değerli Ud Ağacı', 'Amber'],
      base: ['Karanlık Paçuli', 'Sütlü Sandal Ağacı', 'Zengin Misk']
    },
    mood: 'Ruhani, Derin, Büyüleyici',
    description: 'Doğu parfümeri kültürünün en zengin kodlarından ilham alan Hiss; buhur tütsüsü, ud ağacı ve amberin derinliğini hafif ferah çiçeksi tonlarla dengeleyerek eşsiz bir mistik aura sunar.'
  },
  {
    id: 'buhur',
    name: 'Buhur',
    subtitle: 'Geleneksel Tütsü & Tok Reçineler',
    tagline: 'Asırlık buhur dumanının ud, amber ve paçuliyle mühürlenen sıcaklığı.',
    price: 250,
    volume: '7 ml',
    category: 'oryantal',
    season: 'winter',
    seasonLabel: 'Sonbahar / Kış',
    gender: 'Ağırbaşlı & Köklü Duruş',
    badge: 'Yoğun Tütsü',
    image: '/buhur-hero.jpg',
    sillage: 97,
    longevity: 99,
    notes: {
      top: ['Doğal Buhur Dumanı', 'Sıcak Baharatlar'],
      heart: ['Koyu Agarwood (Ud)', 'Reçineli Kehribar (Amber)'],
      base: ['Topraksı Paçuli', 'Sandal Ağacı', 'Yoğun Misk']
    },
    mood: 'Mistik, Sıcak, Tok & Huzurlu',
    description: 'Doğrudan has buhur reçineleri, koyu ud ve sıcak sandalın bir araya geldiği, ortamı ve teni huzurla saran meditatif ve son derece kalıcı geleneksel bir şaheser.'
  },
  {
    id: 'ruba',
    name: 'Rûba',
    subtitle: 'Süsen, Çikolata & Lüks Deri',
    tagline: 'Limon ve süsenin gurme çikolata ve asil deriyle beklenmedik uyumu.',
    price: 250,
    volume: '7 ml',
    category: 'odunsu',
    season: 'winter',
    seasonLabel: 'Sonbahar / Kış',
    gender: 'Ortak Asalet (Her Tene Uyumlu)',
    badge: 'Niş & Gurme',
    image: '/ruba-hero.jpg',
    sillage: 93,
    longevity: 96,
    notes: {
      top: ['Mine Çiçeği', 'Asil Süsen (İris)', 'Taze Limon'],
      heart: ['Sıcak Çikolata Aroması', 'Hafif Kakao Dokunuşu'],
      base: ['Lüks Deri Akoru', 'Sandal Ağacı', 'Amber', 'Sedir Ağacı']
    },
    mood: 'Sofistike, Gurme, Karizmatik',
    description: 'Açılışındaki süsen çiçeği ve limon tazeliğinin hemen ardından gelen sıcak çikolata dokusu; dipte deri, sedir ve amberle birleşerek eşine az rastlanır gurme-odunsu bir zarafet yaratır.'
  },
  {
    id: 'lika',
    name: 'Lika',
    subtitle: 'Kristal Saflık & Canlandırıcı Ferahlık',
    tagline: 'Günün her saatine eşlik eden diri, temiz ve dinamik bir nefes.',
    price: 250,
    volume: '7 ml',
    category: 'aromatik',
    season: 'summer',
    seasonLabel: 'İlkbahar / Yaz',
    gender: 'Canlı & Her Tene Uygun',
    badge: 'Dinamik & Taze',
    image: '/lika-hero.jpg',
    sillage: 87,
    longevity: 90,
    notes: {
      top: ['Canlandırıcı Ozonik Esintiler', 'Buzlu Narenciye'],
      heart: ['Taze Aromatik Yapraklar', 'Ferah Çiçek Özleri'],
      base: ['Temiz Beyaz Misk', 'Hafif Sedir']
    },
    mood: 'Diri, Enerjik, Berrak',
    description: 'Karmaşık notalardan uzak; cilde sürüldüğü anda ferahlatan, sabah yürüyüşleri ve sıcak günler için vazgeçilmez, tertemiz ve canlı bir esans profili.'
  },
  {
    id: 'zenn',
    name: 'Zenn',
    subtitle: 'Portakal Çiçeği, Bal & Tropik Orkide',
    tagline: 'Acı portakal ve balın tropikal çiçeklerle güneşli ahengi.',
    price: 250,
    volume: '7 ml',
    category: 'ciceksi',
    season: 'summer',
    seasonLabel: 'İlkbahar / Yaz',
    gender: 'Zarif & Parlak Dokunuş',
    badge: 'Tropik & Tatlı',
    image: '/zenn-hero.jpg',
    sillage: 90,
    longevity: 92,
    notes: {
      top: ['Portakal Çiçeği', 'Doğal Yasemin Özü'],
      heart: ['Acı Portakal (Bigarade)', 'Altın Çiçek Balı'],
      base: ['Taze Greyfurt Esansı', 'Tropikal Orkide']
    },
    mood: 'Işıltılı, Çekici, Canlı',
    description: 'Portakal çiçeği ve yaseminin asaletini acı portakalın diri dokunuşu ve saf balla tatlandıran, ten üzerinde güneş gibi parlayan egzotik bir koku deneyimi.'
  },
  {
    id: 'semm',
    name: 'Şemm',
    subtitle: 'Adaçayı, Trüf Mantarı & Mistik Galbanum',
    tagline: 'Topraksı trüf mantarı ve galbanumun yeşil adaçayıyla cesur harmonisi.',
    price: 250,
    volume: '7 ml',
    category: 'aromatik',
    season: 'all',
    seasonLabel: '4 Mevsim',
    gender: 'Fark Yaratan & Özgün Karakter',
    badge: 'Çok Özel Seri',
    image: '/semm-hero.jpg',
    sillage: 94,
    longevity: 96,
    notes: {
      top: ['Calabria Bergamotu', 'Taze Limon Kabuğu'],
      heart: ['Reçineli Galbanum Özü', 'Aromatik Tıbbi Adaçayı'],
      base: ['Kıymetli Trüf Mantarı', 'Yıldız Anason', 'Sıcak Civet Dokunuşu']
    },
    mood: 'Özgün, Aristokrat, Büyüleyici',
    description: 'Narenciyeli bir açılışın ardından galbanum ve adaçayının yeşil derinliğine, dipte ise trüf mantarı ve anasonun lüks topraksı havasına teslim olan hakiki bir niş parfüm tutkusu.'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'Tüm Koleksiyon' },
  { id: 'odunsu', label: 'Odunsu & Karizmatik' },
  { id: 'oryantal', label: 'Oryantal & Mistik' },
  { id: 'ciceksi', label: 'Çiçeksi & Ferah' },
  { id: 'aromatik', label: 'Aromatik & Yeşil' }
];

export const SEASONS = [
  { id: 'all', label: 'Tüm Mevsimler' },
  { id: 'winter', label: '❄️ Kışlık & Sıcak İmzalar' },
  { id: 'summer', label: '☀️ Yazlık & Ferah Esintiler' }
];