import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const RED = "#E63946";

function YiMengLogo({ white = false }: { white?: boolean }) {
  if (white) {
    return (
      <img
        src="/images/Logo.png"
        alt="宜盟 Yi Meng"
        className="h-[100px] w-auto"
        style={{ filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.9))" }}
      />
    );
  }
  return (
    <img
      src="/images/Logo2.png"
      alt="宜盟 Yi Meng"
      className="h-[68px] w-auto"
    />
  );
}

const HERO_SLIDES = [
  { src: "/images/hero.jpg" },
  { src: "/images/hero2.jpg" },
  { src: "/images/hero3.jpg" },
  { src: "/images/Product-1.jpg", label: "精密射出成型", subtitle: "汽車零配件・精工製造" },
  { src: "/images/Product-3.jpg", label: "多元產品應用", subtitle: "門窗把手五金・專業代工" },
];

const PRODUCT_CATEGORIES = [
  { src: "/images/宜盟-04.png", label: "汽車零配件", product: "/images/Product-1.jpg" },
  { src: "/images/宜盟-05.png", label: "繼電器連接器", product: "/images/Product-2.jpg" },
  { src: "/images/宜盟-06.png", label: "門窗把手五金", product: "/images/Product-3.jpg" },
  { src: "/images/宜盟-07.png", label: "園藝工具配件", product: "/images/Product-4.jpg" },
  { src: "/images/宜盟-13.png", label: "襯套配件", product: "/images/Product-5.jpg" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Nav — fixed, transparent → white on scroll ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: scrolled ? "#ffffff" : "transparent", boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <YiMengLogo white={!scrolled} />
          <div className="hidden md:flex items-center gap-10">
            <Link href="/about" className="text-sm transition-colors duration-300 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", color: scrolled ? "#374151" : "#ffffff", textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)" }}>
              關於宜盟
            </Link>
            <Link href="/capability" className="text-sm transition-colors duration-300 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", color: scrolled ? "#374151" : "#ffffff", textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)" }}>
              代工能力與設備
            </Link>
            <Link href="/quality" className="text-sm transition-colors duration-300 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", color: scrolled ? "#374151" : "#ffffff", textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)" }}>
              服務與品質
            </Link>
            <Link href="/contact" className="text-sm transition-colors duration-300 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", color: scrolled ? "#374151" : "#ffffff", textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)" }}>
              聯絡我們
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero slider — fixed behind content, slides cross-fade ── */}
      <div className="fixed top-0 left-0 right-0 h-[420px] md:h-[500px] z-0 overflow-hidden">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={s.src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            {s.label && (
              <div className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)" }}
              >
                <p className="text-white text-xs md:text-sm tracking-[0.3em] mb-3 uppercase opacity-80">
                  Yi Meng Products
                </p>
                <h2 className="text-white text-3xl md:text-5xl font-bold tracking-wide mb-4"
                  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}
                >
                  {s.label}
                </h2>
                <div className="w-12 h-0.5 mb-4" style={{ backgroundColor: RED }} />
                <p className="text-white text-base md:text-lg tracking-widest opacity-90">
                  {s.subtitle}
                </p>
              </div>
            )}
          </div>
        ))}
        {/* SINCE 1993 badge */}
        <div className="absolute top-24 right-6 z-10 flex flex-col items-center justify-center rounded-full border-2 border-yellow-400 bg-black/60 w-20 h-20 md:w-24 md:h-24 text-center">
          <span className="text-yellow-400 text-[9px] font-bold tracking-widest uppercase leading-tight">專業塑膠射出</span>
          <span className="text-yellow-400 text-[9px] font-bold tracking-widest uppercase leading-tight">製造專家</span>
          <div className="w-10 h-px bg-yellow-400/50 my-1" />
          <span className="text-white text-[10px] font-bold tracking-wider">SINCE</span>
          <span className="text-yellow-400 text-sm font-black leading-tight">1993</span>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: i === slide ? "white" : "rgba(255,255,255,0.45)",
                transform: i === slide ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero spacer — same height as fixed hero */}
      <div className="h-[420px] md:h-[500px]" />

      {/* ── About ── */}
      <section
        id="關於宜盟"
        className="relative z-10 h-[560px] flex items-center overflow-visible"
        style={{
          backgroundImage: "url('/images/contact-bg-04.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 items-center">

            {/* Left: PIQ — shifted up 100px and right 60px */}
            <div style={{ transform: "translate(60px, -100px)", position: "relative", zIndex: 10 }}>
              <h2
                className="font-bold leading-snug text-gray-800"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.3vw, 46px)" }}
              >
                Proactive<br />
                Integrity<br />
                Quality
              </h2>
            </div>

            {/* Right: company text */}
            <div className="bg-white rounded-xl p-8 shadow-md relative z-10" style={{ transform: "translateX(-15px)" }}>
              <h3
                className="text-2xl font-bold text-gray-800 mb-5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Yi Meng
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                宜盟企業社（前身為豐祥企業社）位於彰化和美，深耕塑膠射出領域逾三十年。秉持「積極、誠信、品質第一」的永續經營理念，不斷提升專業技術與設備，致力於達成客戶的託付。宜盟是您值得信賴的合作夥伴。
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                我們專注於高品質的射出代工服務以及電鍍加工與其他後製加工，無論是「少量多樣」或「大量製造」，我們都能靈活滿足您的生產需求，並熟悉泛用塑膠與工程塑膠等多項材質。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section
        id="代工能力與設備"
        className="relative z-10 py-20 md:py-28"
        style={{
          backgroundImage: "url('/images/contact-bg-04.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "-100px",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3
            className="text-3xl font-bold text-gray-800 mb-10 text-center"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            產品應用
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {PRODUCT_CATEGORIES.map(({ src, label, product }) => (
              <div
                key={label}
                className="group relative border border-gray-800 rounded-lg p-7 flex flex-col items-center gap-3 transition-shadow bg-white overflow-visible hover:z-20"
              >
                <img src={src} alt={label} className="w-[60px] h-[60px] object-contain transition-opacity duration-300 group-hover:opacity-0" />
                <span className="text-sm font-medium text-gray-800 transition-opacity duration-300 group-hover:opacity-0">{label}</span>
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-visible"
                  style={{ left: '-8px', right: '-15px', paddingRight: '15px', paddingBottom: '15px', top: '50%', transform: 'translateY(calc(-50% + 8px))' }}
                >
                  <div className="relative overflow-visible">
                    {/* Red offset block — same size as image, sits 15px below-left */}
                    <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: '#d7554d', transform: 'translateY(-3px)' }} />
                    {/* Image — shifted 15px up and right */}
                    <img
                      src={product}
                      alt={label}
                      className="block w-full h-auto object-cover rounded-xl"
                      style={{ transform: 'translate(9px, -15px)', position: 'relative', zIndex: 10 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section
        id="服務與品質"
        className="relative z-10 py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: "url('/images/contact-bg-04.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 space-y-0">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center pb-16">
            <div>
              <h3
                className="font-bold text-gray-800 mb-5"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '35px' }}
              >
                射出成型
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '17px' }}>
                我們加工的材料種類繁多，包括超級工程塑膠樹脂、玻璃纖維樹脂、彈性體樹脂和通用樹脂。
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '17px' }}>
                此外，我們也提供嵌件注塑和薄壁注塑服務。
              </p>
            </div>
            <div className="relative overflow-visible" style={{ paddingRight: '15px', paddingBottom: '15px' }}>
              <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: '#d7554d', transform: 'translateY(-3px)' }} />
              <img
                src="/images/Injection molding-1.jpg"
                alt="射出成型"
                className="block w-full aspect-square object-cover rounded-xl"
                style={{ transform: 'translate(27px, -15px)', position: 'relative', zIndex: 10 }}
              />
            </div>
          </div>

          {/* PROPRIETARY 圖片 */}
          <div className="-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-32 pointer-events-none select-none">
            <img
              src="/images/宜盟-10.png"
              alt=""
              aria-hidden="true"
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center pt-16">
            <div className="relative overflow-visible" style={{ paddingRight: '15px', paddingBottom: '15px' }}>
              <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: '#d7554d', transform: 'translateY(-3px)' }} />
              <img
                src="/images/Product-11.jpg"
                alt="多樣化射出產品"
                className="block w-full aspect-square object-cover rounded-xl"
                style={{ transform: 'translate(27px, -15px)', position: 'relative', zIndex: 10 }}
              />
            </div>
            <div>
              <h3
                className="font-bold text-gray-800 mb-5"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '35px' }}
              >
                電鍍與後製加工
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '17px' }}>
                我們提供射出成型後的完整後製加工服務，包含電鍍、烤漆、表面處理及組裝，讓客戶享有從原料到成品的一站式生產流程，大幅縮短交期、降低溝通成本。
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '17px' }}>
                長年服務汽車零配件、門窗五金、連接器等高規格產業，對於外觀精度與表面品質均有嚴格管控，確保每一件成品皆符合客戶要求。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Five Pillars ── */}
      <section className="relative z-10 bg-[#2c3444] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 divide-x divide-white/10">
            {[
              {
                title: "精密設備",
                desc: "先進射出成型機台，穩定生產高品質產品",
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                    <circle cx="20" cy="20" r="4" />
                    <path d="M20 4v4M20 32v4M4 20h4M32 20h4" />
                    <path d="M8.6 8.6l2.8 2.8M28.6 28.6l2.8 2.8M8.6 31.4l2.8-2.8M28.6 11.4l2.8-2.8" />
                    <circle cx="20" cy="20" r="10" strokeDasharray="3 2" />
                  </svg>
                ),
              },
              {
                title: "專業技術",
                desc: "豐富經驗技術團隊，提供最佳解決方案",
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                    <path d="M28 6a6 6 0 0 1 0 8l-3 3-8 8-6 2 2-6 8-8 3-3a6 6 0 0 1 4-4z" />
                    <path d="M22 10l4 4" />
                    <path d="M10 28l2 2" />
                  </svg>
                ),
              },
              {
                title: "品質管控",
                desc: "嚴格品質檢驗流程，確保產品品質穩定可靠",
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                    <path d="M20 4l13 5v9c0 8-5.5 14.5-13 17C13 32.5 7 26 7 18V9z" />
                    <polyline points="14,20 18,24 26,16" />
                  </svg>
                ),
              },
              {
                title: "環保永續",
                desc: "採用環保材料，落實企業社會責任",
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                    <path d="M20 34V20" />
                    <path d="M20 20C20 20 10 18 8 8c6 0 12 4 12 12z" />
                    <path d="M20 20C20 20 30 16 32 6c-6 0-12 5-12 14z" />
                    <path d="M14 34h12" />
                  </svg>
                ),
              },
              {
                title: "準時交貨",
                desc: "高效生產管理，準時交付客戶需求",
                svg: (
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                    <circle cx="20" cy="20" r="14" />
                    <polyline points="20,10 20,20 27,25" />
                  </svg>
                ),
              },
            ].map(({ svg, title, desc }) => (
              <div key={title} className="group flex flex-col items-center text-center gap-5 px-8 py-12 hover:bg-white/5 transition-colors duration-300">
                <div className="text-white/50 group-hover:text-[#E63946] transition-colors duration-300">
                  {svg}
                </div>
                <div className="w-6 h-px bg-white/20 group-hover:bg-[#E63946] transition-colors duration-300" />
                <h4 className="text-white font-semibold text-[16px] tracking-widest">{title}</h4>
                <p className="text-white/50 text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="聯絡我們"
        className="relative z-10 text-white overflow-hidden"
      >
        {/* Background image */}
        <img
          src="/images/Contact.jpg"
          alt="聯絡我們"
          className="w-full h-full object-cover absolute inset-0"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content overlaid on image */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">

            {/* 左欄：標題 + 說明 */}
            <div className="flex flex-col gap-6 max-w-md">
              <h2
                className="text-5xl"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
              >
                聯絡我們
              </h2>
              <p className="text-gray-200 text-[15px] leading-relaxed">
                我們提供從射出成型模具製造到成型零件加工和二次加工的全方位服務，旨在提升您產品的價值。如果您正在考慮生產您已開發的產品，請隨時與我們聯繫。
              </p>
              <div className="w-10 h-0.5" style={{ backgroundColor: RED }} />
              <p className="text-white/70 text-sm leading-relaxed">
                宜盟企業社 – 您最值得信賴的塑膠射出成型合作夥伴
              </p>
            </div>

            {/* 右欄：完整聯絡資訊 */}
            <div className="flex flex-col gap-4 text-[15px]">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-5 text-center">☎️</span>
                <span className="text-white">04-7355795</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-5 text-center">📠</span>
                <span className="text-white">04-7369156</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-5 text-center">📍</span>
                <span className="text-white">彰化縣和美鎮福北路106號</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 w-5 text-center">✉️</span>
                <a href="mailto:sallyend0112@gmail.com" className="text-white hover:underline">
                  sallyend0112@gmail.com
                </a>
              </div>
              <div className="mt-2 flex items-center gap-4">
                <p className="text-gray-300 text-sm tracking-wide">營業時間</p>
                <p className="text-white font-medium">08:30 – 18:00</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <YiMengLogo white />
            <div className="text-right text-gray-400 leading-relaxed">
              <p
                className="text-white font-semibold tracking-wider mb-1"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '26px' }}
              >
                積極、誠信、品質第一
              </p>
              <p className="text-sm" style={{ marginTop: '10px' }}>508彰化縣和美鎮福北路106號</p>
              <p className="text-sm">電話：04-7355795　08:30 – 18:00</p>
              <p className="text-sm">信箱：sallyend0112@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-500 text-xs tracking-widest uppercase">
              宜盟企業社 – 您最值得信賴的塑膠射出成型合作夥伴 ・ YI MENG ENTERPRISE – YOUR MOST TRUSTED PARTNER IN PLASTIC INJECTION MOLDING SOLUTIONS ・ SINCE 1993
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
