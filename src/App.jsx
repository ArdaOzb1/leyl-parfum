import { useState, useEffect } from 'react';
import { FRAGRANCES, CATEGORIES, SEASONS } from './data/fragrances';
import { 
  Sparkles, 
  Droplet, 
  ShoppingBag, 
  ArrowRight, 
  ArrowLeft, 
  X, 
  Plus, 
  Minus, 
  MessageCircle, 
  Truck,
  Sun,
  Snowflake,
  Layers,
  Flame,
  Wind,
  Info
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'collection'
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSeason, setActiveSeason] = useState('all'); // 'all' | 'winter' | 'summer'
  const [selectedFragranceForModal, setSelectedFragranceForModal] = useState(null);
  
  // Zarif Preloader (Açılış İntrosu) State'leri
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Açılış İntro Efekti (2 saniye gösterilip yumuşakça kararır)
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 800ms yumuşak fade-out geçişi

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Otomatik slayt (Ana sayfada)
  useEffect(() => {
    if (currentPage !== 'home') return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FRAGRANCES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [currentPage]);

  // Sayfa değişiminde yukarı kaydır
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % FRAGRANCES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + FRAGRANCES.length) % FRAGRANCES.length);

  // Kategori & Mevsim Filtreleme Mantığı
  const filteredFragrances = FRAGRANCES.filter(item => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSeason = activeSeason === 'all' || item.season === activeSeason || item.season === 'all';
    return matchCategory && matchSeason;
  });

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prevCart => 
      prevCart
        .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const isFreeShipping = totalItemCount >= 2;
  const shippingFee = totalItemCount === 0 ? 0 : (isFreeShipping ? 0 : 150);
  const grandTotal = subtotal + shippingFee;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    let message = `Merhaba, LEYL esans koleksiyonunuzdan sipariş vermek istiyorum:\n\n`;
    cart.forEach(item => {
      message += `• ${item.name} (${item.volume}) x ${item.quantity} adet: ${item.price * item.quantity} ₺\n`;
    });
    message += `\nAra Toplam: ${subtotal} ₺`;
    message += `\nKargo Ücreti: ${isFreeShipping ? '0 ₺ (Ücretsiz Kargo Kampanyası)' : `${shippingFee} ₺`}`;
    message += `\nGenel Toplam: ${grandTotal} ₺`;
    
    const phoneNumber = "905000000000";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const slideProduct = FRAGRANCES[currentSlide] || FRAGRANCES[0];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#141413] font-sans antialiased selection:bg-[#C5A880] selection:text-white relative overflow-hidden flex flex-col justify-between">
      
      {/* ======================================================== */}
      {/* ZARİF LÜKS PRELOADER (AÇILIŞ PERDESİ)                    */}
      {/* ======================================================== */}
      {isLoading && (
        <div 
          className={`fixed inset-0 z-50 bg-[#FAF7F2] flex flex-col items-center justify-center transition-all duration-700 ease-out ${
            isFadingOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
          }`}
        >
          <div className="text-center space-y-5 px-6 flex flex-col items-center">
            {/* Hilal & Damla Monogramı (Preloader) */}
            <div className="w-16 h-16 rounded-full border border-[#C5A880]/40 flex items-center justify-center p-3 shadow-inner bg-white/40">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C5A880]">
                <path d="M50 15 C45 35, 30 55, 30 70 A20 20 0 0 0 70 70 C70 55, 55 35, 50 15 Z" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M72 30 A35 35 0 0 1 72 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <h1 className="font-serif text-5xl sm:text-7xl tracking-[0.35em] uppercase text-[#141413] font-light">
                LEYL
              </h1>
              <div className="w-12 h-[1px] bg-[#C5A880] mx-auto my-3 opacity-60" />
              <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#C5A880] font-medium">
                %100 Saf Yağ Esansı &bull; Tene Mühürlenen Saflık
              </p>
            </div>
          </div>
        </div>
      )}

      {/* IŞIK HÜZMESİ EFEKTLERİ */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-1/2 -right-40 w-[30rem] h-[30rem] bg-emerald-950/10 rounded-full blur-[140px] pointer-events-none" />

      {/* MARQUEE DUYURU BANDI */}
      <div className="bg-[#141413] text-[#FAF7F2] py-2 overflow-hidden border-b border-stone-800">
        <div className="animate-marquee whitespace-nowrap text-[11px] tracking-[0.25em] uppercase font-semibold flex items-center">
          <div className="flex items-center gap-12 shrink-0">
            <span>✨ %100 SAF KONSANTRE YAĞ</span>
            <span>&bull;</span>
            <span className="text-[#C5A880]">2 ADET VE ÜZERİ ALIMLARDA KARGO BEDAVA</span>
            <span>&bull;</span>
            <span>ALKOLSÜZ & İBADETE UYGUN FORMÜL</span>
            <span>&bull;</span>
            <span>12+ SAAT TENE HAPSUS OLAN AURA</span>
            <span>&bull;</span>
            <span>7 ML TAŞINABİLİR ROLL-ON LÜKS</span>
            <span>&bull;</span>
          </div>
          <div className="flex items-center gap-12 shrink-0 ml-12">
            <span>✨ %100 SAF KONSANTRE YAĞ</span>
            <span>&bull;</span>
            <span className="text-[#C5A880]">2 ADET VE ÜZERİ ALIMLARDA KARGO BEDAVA</span>
            <span>&bull;</span>
            <span>ALKOLSÜZ & İBADETE UYGUN FORMÜL</span>
            <span>&bull;</span>
            <span>12+ SAAT TENE HAPSUS OLAN AURA</span>
            <span>&bull;</span>
            <span>7 ML TAŞINABİLİR ROLL-ON LÜKS</span>
            <span>&bull;</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#FAF7F2]/85 border-b border-[#E5DCCE] px-6 lg:px-20 py-5 flex items-center justify-between transition-all">
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-3 group hover:opacity-85 transition-opacity"
        >
          {/* Logo Monogram İkonu */}
          <div className="w-8 h-8 rounded-full border border-[#C5A880]/50 flex items-center justify-center p-1.5 bg-white/60">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#141413] group-hover:text-[#C5A880] transition-colors">
              <path d="M50 15 C45 35, 30 55, 30 70 A20 20 0 0 0 70 70 C70 55, 55 35, 50 15 Z" stroke="currentColor" strokeWidth="6" fill="none" />
              <path d="M72 30 A35 35 0 0 1 72 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-serif text-3xl sm:text-4xl tracking-[0.3em] font-normal uppercase text-left">
            LEYL
          </span>
        </button>

        <nav className="flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase font-semibold">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`transition-colors ${currentPage === 'home' ? 'text-[#141413] border-b-2 border-[#141413] pb-1' : 'text-[#736F68] hover:text-[#141413]'}`}
          >
            Hikaye &amp; Felsefe
          </button>
          
          <button 
            onClick={() => setCurrentPage('collection')}
            className={`transition-colors ${currentPage === 'collection' ? 'text-[#141413] border-b-2 border-[#141413] pb-1' : 'text-[#736F68] hover:text-[#141413]'}`}
          >
            Koleksiyon ({FRAGRANCES.length})
          </button>
        </nav>

        <button 
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2.5 bg-[#141413] text-[#FAF7F2] px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#C5A880] transition-all duration-300 shadow-sm"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Sepet</span>
          <span>({totalItemCount})</span>
        </button>
      </header>

      {/* ========================================== */}
      {/* 1. ANA SAYFA GÖRÜNÜMÜ                      */}
      {/* ========================================== */}
      {currentPage === 'home' && (
        <main className="flex-1">
          {/* HERO SLIDER */}
          <section className="relative px-6 lg:px-20 pt-10 pb-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="bg-[#141413] text-[#FAF7F2] text-[10px] tracking-[0.25em] font-bold px-3 py-1 rounded-full uppercase">
                    {slideProduct.badge}
                  </span>
                  <span className="text-xs text-[#736F68] tracking-widest uppercase font-medium">
                    0{currentSlide + 1} &mdash; 0{FRAGRANCES.length}
                  </span>
                  <span className="text-xs text-[#C5A880] font-medium tracking-wide">
                    &bull; {slideProduct.seasonLabel}
                  </span>
                </div>

                <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight">
                  {slideProduct.name}
                  <span className="block font-sans text-xl sm:text-2xl font-light tracking-wide text-[#736F68] mt-3">
                    {slideProduct.subtitle}
                  </span>
                </h1>

                <p className="text-[#736F68] text-base sm:text-lg leading-relaxed max-w-xl font-light">
                  {slideProduct.description}
                </p>

                <div className="p-6 bg-white/70 backdrop-blur-md border border-[#E5DCCE] rounded-3xl max-w-lg space-y-3 shadow-sm">
                  <div className="flex justify-between items-center text-xs tracking-wider uppercase font-semibold">
                    <span>Koku Ailesi</span>
                    <span className="text-[#C5A880]">{slideProduct.category.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs tracking-wider uppercase font-semibold">
                    <span>Aura &amp; Hissiyat</span>
                    <span className="text-[#141413]">{slideProduct.mood}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button 
                    onClick={() => setCurrentPage('collection')}
                    className="bg-[#141413] text-[#FAF7F2] px-8 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A880] transition-all duration-300 shadow-md flex items-center gap-3"
                  >
                    <span>Tüm Koleksiyonu Keşfet</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setSelectedFragranceForModal(slideProduct)}
                    className="px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E5DCCE] hover:bg-white transition-colors"
                  >
                    Notaları İncele
                  </button>
                </div>
              </div>

              {/* Görsel Kartı */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="w-[310px] sm:w-[380px] h-[540px] rounded-[3rem] p-3 bg-gradient-to-b from-white/90 to-[#E5DCCE]/50 border border-white/60 shadow-2xl backdrop-blur-md relative group overflow-hidden">
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                    <img 
                      src={slideProduct.image} 
                      alt={slideProduct.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                      <h3 className="font-serif text-4xl tracking-wider">{slideProduct.name}</h3>
                      <p className="text-[11px] tracking-[0.25em] text-[#E8D8C3] uppercase mt-1">
                        %100 Saf Yağ Esansı &bull; 7 ml
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={prevSlide}
                  className="absolute -left-3 sm:left-0 bg-white/90 backdrop-blur-md border border-[#E5DCCE] p-3.5 rounded-full hover:bg-[#141413] hover:text-white transition-all shadow-lg z-10"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute -right-3 sm:right-0 bg-white/90 backdrop-blur-md border border-[#E5DCCE] p-3.5 rounded-full hover:bg-[#141413] hover:text-white transition-all shadow-lg z-10"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            <div className="flex justify-center items-center gap-3 mt-12">
              {FRAGRANCES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentSlide === idx ? 'w-12 bg-[#141413]' : 'w-3 bg-[#E5DCCE]'
                  }`}
                />
              ))}
            </div>
          </section>

          {/* FELSEFE BÖLÜMÜ */}
          <section id="felsefe" className="py-24 px-6 lg:px-20 max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <span className="text-xs font-bold tracking-[0.3em] text-[#C5A880] uppercase">Manifesto &amp; Değerler</span>
              <h2 className="font-serif text-5xl sm:text-6xl font-light">Teninle Bütünleşen Saflık</h2>
              <p className="text-base text-[#736F68] max-w-2xl mx-auto font-light leading-relaxed">
                Parfümün bir gösteriş aracı değil; insanın kendi tenine, ruhuna ve çevresine duyduğu saygı olduğuna inanıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="p-8 rounded-[2.5rem] bg-white border border-[#E5DCCE] space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex items-center justify-center text-[#141413]">
                  <Sparkles className="w-6 h-6 text-[#C5A880]" />
                </div>
                <h3 className="font-serif text-2xl font-normal">Temiz İçerik &amp; Modern Lüks</h3>
                <p className="text-xs sm:text-sm text-[#736F68] leading-relaxed">
                  Geleneksel spreylerin aksine teni kurutmayan, kimyasal uçucular içermeyen <strong>Clean Beauty</strong> felsefesi. Havaya dağılmaz, tenin ısısıyla gün boyu kişisel bir auraya dönüşür.
                </p>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-white border border-[#E5DCCE] space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E5DCCE] flex items-center justify-center text-[#141413]">
                  <Droplet className="w-6 h-6 text-[#C5A880]" />
                </div>
                <h3 className="font-serif text-2xl font-normal">Gönül Huzuru &amp; Kadim Miras</h3>
                <p className="text-xs sm:text-sm text-[#736F68] leading-relaxed">
                  Geleneksel esans mirasına sadık, <strong>%100 saf ve sıfır alkol</strong> formül. İbadetlerde ve günlük yaşamda şüphe duymadan kullanılan tertemiz bir ferahlık.
                </p>
              </div>
            </div>

            <div className="mt-8 p-8 rounded-[2.5rem] bg-[#F3ECE1] border border-[#E5DCCE] text-center space-y-4">
              <h4 className="font-serif text-2xl">Ayrışmayan, Birleştiren Bir Zarafet</h4>
              <p className="text-xs sm:text-sm text-[#736F68] max-w-3xl mx-auto leading-relaxed">
                İster baş ağrıtmayan temiz bir ofis kokusu arayın, ister ibadete ve fıtrata uygun saf bir nefes... LEYL, teninizin doğal ısısıyla açılan kalıcı formülüyle ortak saflıkta buluşturur.
              </p>
              <div className="pt-2">
                <button 
                  onClick={() => setCurrentPage('collection')}
                  className="inline-flex items-center gap-2 bg-[#141413] text-[#FAF7F2] px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#C5A880] transition-colors"
                >
                  Koleksiyonu Keşfet
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* TEN RİTÜELİ */}
          <section id="rituel" className="py-20 bg-[#F3ECE1] border-t border-[#E5DCCE] px-6 lg:px-20">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">Ritüel</span>
                <h2 className="font-serif text-4xl sm:text-5xl">Saf Yağın Tenle Dansı</h2>
                <p className="text-sm text-[#736F68] max-w-md mx-auto">
                  En yüksek verim için önerilen 3 temas noktası:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DCCE] space-y-3">
                  <span className="font-serif text-3xl text-[#C5A880]">01</span>
                  <h4 className="font-semibold text-base">Nabız Noktaları</h4>
                  <p className="text-xs text-[#736F68] leading-relaxed">
                    Bilekler, kulak arkası ve boyun çukuru gibi sıcak kan akışının olduğu noktalara roll-on başlığı dokundurun.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DCCE] space-y-3">
                  <span className="font-serif text-3xl text-[#C5A880]">02</span>
                  <h4 className="font-semibold text-base">Ovmayın</h4>
                  <p className="text-xs text-[#736F68] leading-relaxed">
                    Bilekleri sürtmek molekülleri ezer. Bırakın saf yağ teninizin sıcaklığıyla kendiliğinden açılsın.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DCCE] space-y-3">
                  <span className="font-serif text-3xl text-[#C5A880]">03</span>
                  <h4 className="font-semibold text-base">Kıyafet &amp; Saç</h4>
                  <p className="text-xs text-[#736F68] leading-relaxed">
                    Roll-on başlığı avucunuza sürüp saç uçlarına veya yakalara gezdirebilirsiniz; gün boyu taze kalır.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ========================================== */}
      {/* 2. KOLEKSİYON SAYFASI                      */}
      {/* ========================================== */}
      {currentPage === 'collection' && (
        <main className="flex-1 py-16 px-6 lg:px-20 max-w-7xl mx-auto space-y-16">
          
          {/* Başlık ve Filtreler */}
          <div className="space-y-8 border-b border-[#E5DCCE] pb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A880] uppercase">Mağaza</span>
                <h1 className="font-serif text-5xl sm:text-6xl font-normal mt-2">Tüm Koleksiyon</h1>
                <p className="text-xs text-[#736F68] mt-2">
                  250 ₺ / Adet &bull; <strong>2 veya daha fazla alımda kargo ÜCRETSİZ!</strong>
                </p>
              </div>

              {/* MEVSİM SEÇİCİ */}
              <div className="flex p-1 bg-[#F3ECE1] border border-[#E5DCCE] rounded-full">
                {SEASONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSeason(s.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                      activeSeason === s.id
                        ? 'bg-[#141413] text-[#FAF7F2] shadow-sm'
                        : 'text-[#736F68] hover:text-[#141413]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Kategori Filtre Butonları */}
            <div className="flex flex-wrap gap-2 pt-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveSeason('all');
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#141413] text-[#FAF7F2]'
                      : 'bg-white border border-[#E5DCCE] text-[#736F68] hover:border-[#141413]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* ÜRÜN KARTLARI */}
          {filteredFragrances.length === 0 ? (
            <div className="p-16 rounded-[2.5rem] bg-white border border-[#E5DCCE] text-center space-y-4">
              <h3 className="font-serif text-2xl text-[#141413]">Bu Filtrede Ürün Bulunamadı</h3>
              <p className="text-xs text-[#736F68]">Seçtiğiniz mevsim ve kategori kriterine uygun esans listelenemedi.</p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setActiveSeason('all');
                }}
                className="inline-flex items-center gap-2 bg-[#141413] text-[#FAF7F2] px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#C5A880] transition-colors"
              >
                Filtreleri Sıfırla &bull; Tümünü Göster
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFragrances.map(item => (
                <div 
                  key={item.id}
                  className="bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-[#E5DCCE] p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group"
                >
                  <div>
                    <div className="w-full h-80 rounded-[2rem] overflow-hidden mb-6 bg-[#E5DCCE] relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="text-[9px] tracking-[0.2em] uppercase font-bold bg-[#141413] text-[#FAF7F2] px-3.5 py-1.5 rounded-full">
                          {item.badge}
                        </span>
                        <span className="text-[9px] tracking-[0.2em] uppercase font-bold bg-[#FAF7F2]/90 backdrop-blur text-[#141413] px-3 py-1.5 rounded-full">
                          {item.seasonLabel}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-baseline">
                      <h3 className="font-serif text-3xl font-normal group-hover:text-[#C5A880] transition-colors">{item.name}</h3>
                      <span className="text-xs text-[#736F68] font-semibold">{item.volume}</span>
                    </div>

                    <p className="text-xs text-[#736F68] tracking-wide mt-1 italic">{item.subtitle}</p>

                    <p className="text-xs text-[#736F68] leading-relaxed mt-4 font-light">
                      {item.description}
                    </p>

                    {/* Koku Notaları Hapları */}
                    <div className="mt-5 pt-4 border-t border-[#E5DCCE]/60 space-y-2 text-xs">
                      <div className="flex flex-wrap gap-1.5">
                        {item.notes.base.concat(item.notes.heart).slice(0, 3).map((note, nIdx) => (
                          <span key={nIdx} className="bg-[#FAF7F2] border border-[#E5DCCE] text-[#736F68] px-2.5 py-1 rounded-md text-[10px]">
                            {note}
                          </span>
                        ))}
                      </div>

                      <button 
                        onClick={() => setSelectedFragranceForModal(item)}
                        className="inline-flex items-center gap-1 text-[11px] text-[#C5A880] font-semibold hover:underline pt-1"
                      >
                        <Info className="w-3 h-3" />
                        Koku Piramidini &amp; Detayları Aç
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#E5DCCE] flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-serif font-bold text-[#141413]">{item.price} ₺</span>
                      <p className="text-[10px] text-[#736F68] mt-0.5">+150 ₺ Kargo</p>
                    </div>
                    <button 
                      onClick={() => addToCart(item)}
                      className="inline-flex items-center gap-2 bg-[#141413] text-[#FAF7F2] px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#C5A880] transition-colors"
                    >
                      Sepete Ekle
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MEVSİM REHBERİ */}
          <section className="mt-20 pt-16 border-t border-[#E5DCCE] space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">Mevsimsel Koku Sanatı</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light">Saf Yağın Mevsimlere Göre Davranışı</h2>
              <p className="text-sm text-[#736F68] max-w-2xl mx-auto">
                Alkol havaya uçar, saf yağ ise teninizin mevsimsel sıcaklığıyla derinleşir. Hangi havada hangi notayı seçmelisiniz?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Kışlık Kılavuz */}
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#141413] to-[#252523] text-[#FAF7F2] space-y-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <Snowflake className="w-6 h-6 text-[#C5A880]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl">Kış &amp; Soğuk Hava İmzaları</h3>
                      <p className="text-xs text-stone-400">Sıcak, Tok, Reçineli ve Dumansı Notalar</p>
                    </div>
                  </div>
                  <Flame className="w-5 h-5 text-amber-500" />
                </div>

                <p className="text-xs leading-relaxed text-stone-300">
                  Soğuk havada koku moleküllerinin ten üzerinden buharlaşması zorlaşır. Hafif parfümler uçup kaybolurken; <strong>Oud, Sedir, Amber, Vanilya ve Paçuli</strong> gibi tok yağlar teninizin paltolar ve kazaklar altındaki sıcaklığıyla aktifleşir.
                </p>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2 text-xs">
                  <span className="font-semibold text-[#E8D8C3]">Kış Koleksiyonu Önerileri:</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 bg-white/10 rounded-full">Oud (Kadim Ud & Safran)</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full">Hiss (Buhur & Sandal)</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full">Sandal (Sütlü Sandal Ağacı)</span>
                  </div>
                </div>
              </div>

              {/* Yazlık Kılavuz */}
              <div className="p-8 rounded-[2.5rem] bg-white border border-[#E5DCCE] space-y-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#FAF7F2] border border-[#E5DCCE] rounded-2xl">
                      <Sun className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[#141413]">İlkbahar &amp; Yaz Esintileri</h3>
                      <p className="text-xs text-[#736F68]">Ferah, Ozonik, Su ve Yeşil Aromatikler</p>
                    </div>
                  </div>
                  <Wind className="w-5 h-5 text-sky-600" />
                </div>

                <p className="text-xs leading-relaxed text-[#736F68]">
                  Yaz sıcağında ve nemli ortamlarda yoğun tatlı notalar baş ağrısı yapabilir. Saf yağ formülündeki <strong>Deniz tuzu, Ozon, Nilüfer, Dağ Nanesi ve Beyaz Misk</strong>; terle reaksiyona girdiğinde bile ekşime yapmaz, teni temiz bir serinlikle kuşatır.
                </p>

                <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E5DCCE] space-y-2 text-xs">
                  <span className="font-semibold text-[#141413]">Yaz Koleksiyonu Önerileri:</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 bg-white border border-[#E5DCCE] rounded-full text-[#141413]">Yar (Okyanus & Nilüfer)</span>
                    <span className="px-3 py-1 bg-white border border-[#E5DCCE] rounded-full text-[#141413]">Lika (Kristal Ferahlık)</span>
                    <span className="px-3 py-1 bg-white border border-[#E5DCCE] rounded-full text-[#141413]">Berri (Dağ Nanesi & Sedir)</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>
      )}

      {/* ======================================================== */}
      {/* 3. KOKU PİRAMİDİ VE NOTALAR MODALI                       */}
      {/* ======================================================== */}
      {selectedFragranceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setSelectedFragranceForModal(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
          />

          <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-[3rem] border border-[#E5DCCE] shadow-2xl z-10 overflow-hidden flex flex-col md:flex-row">
            
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-[#E5DCCE]">
              <img 
                src={selectedFragranceForModal.image} 
                alt={selectedFragranceForModal.name}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 text-white md:hidden">
                <span className="font-serif text-2xl">{selectedFragranceForModal.name}</span>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A880]">
                      {selectedFragranceForModal.seasonLabel} &bull; {selectedFragranceForModal.gender}
                    </span>
                    <h3 className="font-serif text-3xl">{selectedFragranceForModal.name}</h3>
                    <p className="text-xs text-[#736F68]">{selectedFragranceForModal.subtitle}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedFragranceForModal(null)}
                    className="p-1 rounded-full text-[#736F68] hover:text-[#141413] hover:bg-stone-200/50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-4 text-xs">
                  <div className="p-3 rounded-2xl bg-white border border-[#E5DCCE] space-y-1">
                    <span className="font-bold text-[#141413] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#C5A880]" />
                      Üst Nota (İlk 15 Dk)
                    </span>
                    <p className="text-[#736F68]">{selectedFragranceForModal.notes.top.join(' • ')}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-[#E5DCCE] space-y-1">
                    <span className="font-bold text-[#141413] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#C5A880]" />
                      Kalp Nota (2 - 4 Saat)
                    </span>
                    <p className="text-[#736F68]">{selectedFragranceForModal.notes.heart.join(' • ')}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-white border border-[#E5DCCE] space-y-1">
                    <span className="font-bold text-[#141413] uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#C5A880]" />
                      Dip Nota (6 - 12+ Saat)
                    </span>
                    <p className="text-[#736F68]">{selectedFragranceForModal.notes.base.join(' • ')}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-2 pt-2 border-t border-[#E5DCCE]">
                  <div>
                    <div className="flex justify-between text-[10px] uppercase font-bold text-[#736F68]">
                      <span>Kalıcılık Süresi</span>
                      <span className="text-[#141413]">12+ Saat ({selectedFragranceForModal.longevity}%)</span>
                    </div>
                    <div className="w-full bg-[#E5DCCE] h-1.5 rounded-full overflow-hidden mt-1">
                      <div className="bg-[#141413] h-full rounded-full" style={{ width: `${selectedFragranceForModal.longevity}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] uppercase font-bold text-[#736F68]">
                      <span>Yayılım (Sillage)</span>
                      <span className="text-[#141413]">Ten Aurası ({selectedFragranceForModal.sillage}%)</span>
                    </div>
                    <div className="w-full bg-[#E5DCCE] h-1.5 rounded-full overflow-hidden mt-1">
                      <div className="bg-[#C5A880] h-full rounded-full" style={{ width: `${selectedFragranceForModal.sillage}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5DCCE] flex items-center justify-between">
                <div>
                  <span className="text-2xl font-serif font-bold text-[#141413]">{selectedFragranceForModal.price} ₺</span>
                  <p className="text-[10px] text-[#736F68]">7 ml Roll-on Saf Yağ</p>
                </div>
                <button 
                  onClick={() => {
                    addToCart(selectedFragranceForModal);
                    setSelectedFragranceForModal(null);
                  }}
                  className="bg-[#141413] text-[#FAF7F2] px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#C5A880] transition-colors"
                >
                  Sepete Ekle
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* SEPET PANELİ (DRAWER) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl z-10 flex flex-col justify-between border-l border-[#E5DCCE]">
            <div className="p-6 border-b border-[#E5DCCE] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#141413]" />
                <h3 className="font-serif text-2xl">Sepetiniz ({totalItemCount})</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-[#736F68] hover:text-[#141413] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 text-[#736F68] space-y-2">
                  <p className="font-serif text-xl">Sepetiniz henüz boş.</p>
                  <p className="text-xs">Koleksiyondan dilediğiniz kokuyu ekleyebilirsiniz.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="p-4 rounded-2xl bg-white border border-[#E5DCCE] flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-xl">{item.name}</h4>
                      <p className="text-xs text-[#736F68]">{item.volume} &bull; {item.price} ₺</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#E5DCCE] rounded-full px-2.5 py-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-[#736F68] hover:text-[#141413]">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-[#736F68] hover:text-[#141413]">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">{item.price * item.quantity} ₺</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-[#E5DCCE] bg-[#F3ECE1] space-y-4">
                <div className="p-3 rounded-xl bg-white/70 border border-[#E5DCCE] flex items-center gap-2 text-xs">
                  <Truck className="w-4 h-4 text-[#C5A880] shrink-0" />
                  {isFreeShipping ? (
                    <span className="text-emerald-800 font-semibold">Tebrikler! 2 ürün aldığınız için Kargo ÜCRETSİZ.</span>
                  ) : (
                    <span className="text-[#736F68]">1 ürün daha ekleyin, <strong>150 ₺ Kargo BEDAVA</strong> olsun!</span>
                  )}
                </div>

                <div className="space-y-1.5 pt-1 text-xs">
                  <div className="flex justify-between text-[#736F68]">
                    <span>Ara Toplam:</span>
                    <span>{subtotal} ₺</span>
                  </div>
                  <div className="flex justify-between text-[#736F68]">
                    <span>Kargo Ücreti:</span>
                    <span>{isFreeShipping ? <strong className="text-emerald-700">Ücretsiz (0 ₺)</strong> : `${shippingFee} ₺`}</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-[#E5DCCE]">
                    <span className="text-xs uppercase tracking-widest text-[#736F68] font-bold">Genel Toplam:</span>
                    <span className="font-serif text-3xl font-bold text-[#141413]">{grandTotal} ₺</span>
                  </div>
                </div>

                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#141413] text-[#FAF7F2] py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#25D366] transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp ile Siparişi Tamamla
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#141413] text-[#FAF7F2] py-14 px-6 lg:px-20 border-t border-stone-800 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#C5A880]/50 flex items-center justify-center p-1.5 bg-white/5">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#FAF7F2]">
                <path d="M50 15 C45 35, 30 55, 30 70 A20 20 0 0 0 70 70 C70 55, 55 35, 50 15 Z" stroke="currentColor" strokeWidth="6" fill="none" />
                <path d="M72 30 A35 35 0 0 1 72 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-3xl tracking-[0.3em] font-normal uppercase">LEYL</span>
              <p className="text-xs text-[#736F68] mt-0.5">Saf Esans Koleksiyonu &bull; Tüm Hakları Saklıdır.</p>
            </div>
          </div>
          <div className="flex gap-8 text-xs tracking-wider uppercase text-[#736F68]">
            <button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Hikaye & Felsefe</button>
            <button onClick={() => setCurrentPage('collection')} className="hover:text-white transition-colors">Koleksiyon</button>
          </div>
        </div>
      </footer>

    </div>
  );
}