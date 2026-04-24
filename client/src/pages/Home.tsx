import { useState, useEffect } from "react";
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

const HERO_SLIDES = ["/images/hero.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

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
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5000);
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
            {["關於宜盟", "代工能力與設備", "服務與品質", "聯絡我們"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm transition-colors duration-300 tracking-wide"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: scrolled ? "#374151" : "#ffffff",
                  textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero slider — fixed behind content, slides cross-fade ── */}
      <div className="fixed top-0 left-0 right-0 h-[420px] md:h-[500px] z-0 overflow-hidden">
        {HERO_SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          />
        ))}
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
                      style={{ transform: 'translate(27px, -15px)', position: 'relative', zIndex: 10 }}
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
                src="/images/Injection molding-2.jpg"
                alt="超薄模壓成型"
                className="block w-full aspect-square object-cover rounded-xl"
                style={{ transform: 'translate(27px, -15px)', position: 'relative', zIndex: 10 }}
              />
            </div>
            <div>
              <h3
                className="font-bold text-gray-800 mb-5"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: '35px' }}
              >
                超薄模壓成型
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '17px' }}>
                我們使用一台注射速度為 1000 毫米/秒的特製注塑機和融入我們獨特技術的精密模具，能夠穩定地批量生產厚度為 0.16 毫米的超薄注塑產品，其厚度與薄膜類似。
              </p>
            </div>
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
        <div className="absolute inset-0 bg-black/50" />

        {/* Content overlaid on image */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">

            {/* 左欄：標題 + 按鈕 */}
            <div className="flex flex-col gap-10">
              <h2
                className="text-5xl"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
              >
                聯絡我們
              </h2>
              <Button
                className="text-white font-medium px-7 py-5 rounded-full text-sm cursor-pointer self-start"
                style={{ backgroundColor: RED, border: "none" }}
              >
                請透過表格與我們聯繫。
              </Button>
            </div>

            {/* 右欄：說明文字 + 電話，右側對齊 */}
            <div className="flex flex-col items-end gap-6 text-right">
              <p className="text-gray-200 text-[15px] leading-relaxed max-w-[538px]">
                我們提供從射出成型模具製造到成型零件加工和二次加工的全方位服務。旨在提升您產品的價值。如果您正在考慮生產您已開發的產品，請隨時與我們聯繫。
              </p>
              <div className="flex items-center gap-4">
                <p className="text-gray-300 text-sm tracking-wide">電話諮詢</p>
                <p className="text-white text-3xl font-bold tracking-widest">04-7355795</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <YiMengLogo white />
          <div className="text-right text-gray-400 leading-relaxed">
            <p
              className="text-white font-semibold tracking-wider mb-1"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '26px' }}
            >
              積極、誠信、品質第一
            </p>
            <p className="text-sm" style={{ marginTop: '10px' }}>508彰化縣和美鎮福北路106號</p>
            <p className="text-sm">08:30am~18:00pm</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
