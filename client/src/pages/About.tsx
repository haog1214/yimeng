import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const RED = "#E63946";

const NAV_ITEMS = ["品牌理念", "代工能力", "產品應用", "設備規模"];

const MATERIALS = [
  { title: "工程塑膠", en: "Engineering Plastics", desc: "耐熱、高強度、精密零件應用，適合汽車及電子產業。" },
  { title: "泛用塑膠", en: "General Plastics", desc: "PP、PE、ABS 等多種材質，廣泛應用於日常製品與工業零件。" },
  { title: "玻璃纖維強化", en: "Glass Fiber", desc: "提升結構剛性與尺寸穩定性，適合高強度承力零件。" },
  { title: "彈性體樹脂", en: "Elastomer", desc: "軟硬共構成型，適用密封件、防震墊及握把類零件。" },
  { title: "嵌件射出", en: "Insert Molding", desc: "金屬與塑膠複合一體成型，減少組裝工序、提升結合強度。" },
];

const PRODUCTS = [
  { icon: "/images/宜盟-04.png", label: "汽車零配件", img: "/images/Product-1.jpg" },
  { icon: "/images/宜盟-05.png", label: "繼電器連接器", img: "/images/Product-2.jpg" },
  { icon: "/images/宜盟-06.png", label: "門窗把手五金", img: "/images/Product-3.jpg" },
  { icon: "/images/宜盟-07.png", label: "園藝工具配件", img: "/images/Product-4.jpg" },
  { icon: "/images/宜盟-13.png", label: "襯套配件", img: "/images/Product-5.jpg" },
];

const FINISHING = [
  { title: "電鍍加工", desc: "鍍鉻、鍍鎳等表面金屬化處理，提升外觀質感與耐蝕性。" },
  { title: "烤漆塗裝", desc: "多色系塗裝選擇，滿足各產業外觀與功能要求。" },
  { title: "組裝作業", desc: "提供成品組裝、檢驗與包裝，一站式交付完整成品。" },
];

function SectionTitle({ en, zh }: { en: string; zh: string }) {
  return (
    <div className="text-center mb-14">
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(36px, 5vw, 58px)",
          fontWeight: 900,
          color: RED,
          letterSpacing: "0.06em",
          lineHeight: 1,
        }}
      >
        {en}
      </h2>
      <div className="flex items-center justify-center gap-4 mt-3">
        <div style={{ width: 40, height: 1.5, backgroundColor: "#d1d1d1" }} />
        <span style={{ fontSize: "14px", color: "#888", letterSpacing: "0.15em" }}>{zh}</span>
        <div style={{ width: 40, height: 1.5, backgroundColor: "#d1d1d1" }} />
      </div>
    </div>
  );
}

export default function About() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Update active anchor
      for (const id of NAV_ITEMS) {
        const el = sectionRefs.current[id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#ffffff" : "transparent",
          boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img
              src={scrolled ? "/images/Logo2.png" : "/images/Logo.png"}
              alt="宜盟 Yi Meng"
              className={scrolled ? "h-[68px] w-auto" : "h-[100px] w-auto"}
              style={!scrolled ? { filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.9))" } : {}}
            />
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm transition-colors duration-300 tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: scrolled ? "#374151" : "#ffffff",
                textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              首頁
            </Link>
            {["關於宜盟", "代工能力與設備", "服務與品質", "聯絡我們"].map((item) => (
              <Link
                key={item}
                href={`/#${item}`}
                className="text-sm transition-colors duration-300 tracking-wide"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: scrolled ? "#374151" : "#ffffff",
                  textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ height: "520px" }}>
        <img
          src="/images/hero3.jpg"
          alt="關於宜盟"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 70%, transparent 100%)" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-20 pl-12 md:pl-24">
          <span
            style={{
              color: RED,
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            About Yi Meng
          </span>
          <h1
            className="text-white font-bold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.1,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              marginBottom: "16px",
            }}
          >
            關於宜盟
          </h1>
          <p className="text-white/80 text-base md:text-lg" style={{ maxWidth: 420 }}>
            深耕彰化和美三十餘年，專注塑膠射出成型與後製加工
          </p>
        </div>
      </div>

      {/* ── Sticky anchor nav ── */}
      <div
        className="sticky z-40 bg-white border-b border-gray-200"
        style={{ top: 0 }}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-center gap-12 md:gap-20">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActiveSection(item)}
              className="relative py-5 text-sm font-medium tracking-wide transition-colors duration-200"
              style={{
                color: activeSection === item ? RED : "#555",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {item}
              {activeSection === item && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: RED }}
                />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* ── 品牌理念 ── */}
      <section
        id="品牌理念"
        ref={(el) => { sectionRefs.current["品牌理念"] = el; }}
        className="py-24 md:py-32 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionTitle en="PHILOSOPHY" zh="品牌理念" />

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            宜盟企業社（前身為豐祥企業社）位於彰化和美，深耕塑膠射出領域逾三十年。
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            秉持「積極、誠信、品質第一」的永續經營理念，不斷提升專業技術與設備，
            無論少量多樣或大量製造，皆能靈活滿足客戶的生產需求。
          </p>

          {/* PIQ values */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { en: "Proactive", zh: "積極", desc: "主動溝通、快速回應，與客戶同步解決問題。" },
              { en: "Integrity", zh: "誠信", desc: "誠實報價、如實交付，建立長久合作關係。" },
              { en: "Quality", zh: "品質第一", desc: "從原料到成品全程管控，確保每件產品達標。" },
            ].map(({ en, zh, desc }) => (
              <div
                key={en}
                className="flex flex-col items-center p-8 rounded-2xl"
                style={{ background: "#fafafa", border: "1px solid #eee" }}
              >
                <div
                  className="text-2xl font-black mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif", color: RED }}
                >
                  {en[0]}
                </div>
                <div className="w-6 h-0.5 mb-4" style={{ backgroundColor: RED }} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{en}</h3>
                <p className="text-sm text-gray-500 font-medium mb-3">{zh}</p>
                <p className="text-sm text-gray-500 leading-relaxed text-center">{desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100">
            {[
              { num: "1993", label: "年創立" },
              { num: "30+", label: "年製造經驗" },
              { num: "5", label: "大產品應用領域" },
              { num: "一站式", label: "射出到後製服務" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div
                  className="font-black mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", color: RED }}
                >
                  {num}
                </div>
                <p className="text-gray-500 text-sm tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          {/* Four key features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[
              { title: "多樣化材質", desc: "滿足不同製品需求" },
              { title: "精密模具開發", desc: "確保產品精度" },
              { title: "高效量產製造", desc: "交期穩定快速" },
              { title: "客製化服務", desc: "專屬解決方案" },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-6 rounded-2xl"
                style={{ background: "#fafafa", border: "1px solid #eee" }}
              >
                <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: RED }} />
                <h4 className="font-bold text-gray-800 text-[15px] mb-2">{title}</h4>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 代工能力 ── */}
      <section
        id="代工能力"
        ref={(el) => { sectionRefs.current["代工能力"] = el; }}
        className="py-24 md:py-32"
        style={{ background: "#f8f8f8" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle en="CAPABILITY" zh="代工能力" />

          {/* Text + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                射出成型代工
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-[16px]">
                宜盟擁有多台不同噸數的射出成型機，可因應各類產品的尺寸、重量與精度需求，
                彈性排程生產，兼顧小批量試模與大批量量產。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-[16px]">
                熟悉泛用塑膠與工程塑膠等多種材質，亦提供嵌件射出（Insert Molding）與
                薄壁射出服務，滿足複合結構與輕量化需求。
              </p>
              <div className="flex flex-col gap-3">
                {["多噸數機台，靈活對應各類產品尺寸", "嵌件射出、薄壁射出專業能力", "工程塑膠 / 泛用塑膠 / 彈性體等多材質", "少量多樣或大批量製造皆可配合"].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: RED }} />
                    <span className="text-gray-600 text-[15px]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-visible" style={{ paddingRight: "15px", paddingBottom: "15px" }}>
              <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: RED, transform: "translateY(-3px)" }} />
              <img
                src="/images/Injection molding-2.jpg"
                alt="射出成型"
                className="block w-full aspect-square object-cover rounded-xl"
                style={{ transform: "translate(15px, -15px)", position: "relative", zIndex: 10 }}
              />
            </div>
          </div>

          {/* Material cards */}
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-8 tracking-wide">
            — 材料與工藝能力 —
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {MATERIALS.map(({ title, en, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 flex flex-col gap-3 border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
                <h4 className="font-bold text-gray-800 text-[15px]">{title}</h4>
                <p className="text-[11px] text-gray-400 font-medium tracking-wide">{en}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 後製加工 (within 代工能力 section) ── */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-visible order-2 md:order-1" style={{ paddingRight: "15px", paddingBottom: "15px" }}>
              <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: RED, transform: "translateY(-3px)" }} />
              <img
                src="/images/products-tech.jpg"
                alt="電鍍與後製加工"
                className="block w-full aspect-square object-cover rounded-xl"
                style={{ transform: "translate(15px, -15px)", position: "relative", zIndex: 10 }}
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: RED }}>
                Post-Processing
              </span>
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                電鍍與後製加工
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-[16px]">
                我們提供射出成型後的完整後製加工服務，讓客戶享有從原料到成品的
                一站式生產流程，大幅縮短交期、降低溝通成本。
              </p>
              <div className="grid grid-cols-1 gap-4">
                {FINISHING.map(({ title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 items-start p-4 rounded-xl"
                    style={{ background: "#fafafa", border: "1px solid #eee" }}
                  >
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: RED }} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 產品應用 ── */}
      <section
        id="產品應用"
        ref={(el) => { sectionRefs.current["產品應用"] = el; }}
        className="py-24 md:py-32"
        style={{ background: "#f8f8f8" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle en="PRODUCTS" zh="產品應用" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PRODUCTS.map(({ icon, label, img }) => (
              <div key={label} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Product photo */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(230,57,70,0.7) 0%, transparent 60%)" }}
                  />
                </div>
                {/* Label */}
                <div className="flex items-center gap-3 p-4">
                  <img src={icon} alt={label} className="w-8 h-8 object-contain" />
                  <span className="text-sm font-semibold text-gray-800">{label}</span>
                </div>
                {/* Red bottom bar on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: RED }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 設備規模 ── */}
      <section
        id="設備規模"
        ref={(el) => { sectionRefs.current["設備規模"] = el; }}
        className="py-24 md:py-32 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle en="EQUIPMENT" zh="設備規模" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                完善設備，穩定品質
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-[16px]">
                宜盟廠區擁有多台不同噸數的射出成型機，從小型精密件到大型結構件皆可生產，
                並持續投入設備更新，以確保生產效率與產品一致性。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "射出成型機", value: "多台" },
                  { label: "可加工噸數", value: "多規格" },
                  { label: "材質種類", value: "10+ 種" },
                  { label: "後製加工", value: "電鍍 / 塗裝 / 組裝" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl"
                    style={{ background: "#fafafa", border: "1px solid #eee" }}
                  >
                    <p className="text-xs text-gray-400 font-medium mb-1 tracking-wide">{label}</p>
                    <p className="font-bold text-gray-800 text-[15px]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-visible" style={{ paddingRight: "15px", paddingBottom: "15px" }}>
              <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: RED, transform: "translateY(-3px)" }} />
              <img
                src="/images/hero2.jpg"
                alt="設備"
                className="block w-full aspect-square object-cover rounded-xl"
                style={{ transform: "translate(15px, -15px)", position: "relative", zIndex: 10 }}
              />
            </div>
          </div>

          {/* Factory CTA banner — CSS gradient, no image */}
          <div className="relative rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: "200px", background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(230,57,70,0.04) 10px, rgba(230,57,70,0.04) 11px)" }} />
            <div className="relative text-center text-white z-10">
              <p className="text-xs font-bold tracking-widest uppercase mb-3 opacity-60">彰化和美・宜盟廠區</p>
              <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                歡迎來廠參觀洽談
              </p>
              <div className="w-10 h-0.5 mx-auto mt-4" style={{ backgroundColor: RED }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-20 text-white overflow-hidden"
      >
        <img src="/images/hero.jpg" alt="聯絡我們" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              聯絡我們
            </h2>
            <p className="text-white/80 text-[15px]">我們提供從射出模具到成品的全方位服務，歡迎來電洽詢。</p>
          </div>
          <div className="flex flex-col gap-3 text-[15px]">
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">👤</span>
              <span className="text-white font-semibold">林岳憲</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">📱</span>
              <span className="text-white">0934-058-370</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">☎️</span>
              <span className="text-white">04-7355795</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">📠</span>
              <span className="text-white">04-7369156</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">✉️</span>
              <a href="mailto:sallyend0112@gmail.com" className="text-white hover:underline">
                sallyend0112@gmail.com
              </a>
            </div>
            <Link
              href="/"
              className="mt-4 px-8 py-3 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90 self-start"
              style={{ backgroundColor: RED }}
            >
              回到首頁
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <img src="/images/宜盟-12.png" alt="宜盟 Yi Meng" className="h-16 w-auto brightness-0 invert opacity-80" />
            <div className="text-center md:text-right text-gray-400 text-sm space-y-1">
              <p>508彰化縣和美鎮福北路106號</p>
              <p>電話：04-7355795　傳真：04-7369156</p>
              <p>信箱：sallyend0112@gmail.com　08:30 – 18:00</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-500 text-xs tracking-widest uppercase">
              宜盟企業社 – 您最值得信賴的塑膠射出成型合作夥伴 ・ SINCE 1993
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
