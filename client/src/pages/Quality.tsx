import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const RED = "#E63946";

const QUALITY_STEPS = [
  {
    step: "01",
    title: "原料進料檢驗",
    en: "Material Incoming Inspection",
    desc: "每批原料到廠後進行材質確認與物性抽測，確保符合客戶指定規格，杜絕不良原料流入生產線。",
  },
  {
    step: "02",
    title: "首件確認",
    en: "First Article Inspection",
    desc: "量產前進行首件全尺寸量測與外觀確認，確認模具狀態與成型參數穩定後方可開始量產。",
  },
  {
    step: "03",
    title: "製程巡檢",
    en: "In-Process Inspection",
    desc: "生產過程定時抽樣檢查，監控尺寸穩定性與外觀品質，即時發現異常並調整製程。",
  },
  {
    step: "04",
    title: "成品全檢／抽檢",
    en: "Final Inspection",
    desc: "依客戶要求執行成品全數目視檢查或統計抽樣，確保每批出貨產品符合品質標準。",
  },
  {
    step: "05",
    title: "出貨包裝確認",
    en: "Shipping & Packaging",
    desc: "出貨前確認數量、標識與包裝方式，防止運輸損傷，確保客戶收到完整無誤的成品。",
  },
];

const SERVICE_FEATURES = [
  {
    title: "少量多樣",
    en: "Low Volume / High Mix",
    desc: "靈活因應試產與小批量需求，無最低訂單量限制，協助客戶快速驗證產品。",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="5" y="5" width="10" height="10" rx="1.5" />
        <rect x="20" y="5" width="15" height="10" rx="1.5" />
        <rect x="5" y="20" width="7" height="15" rx="1.5" />
        <rect x="17" y="20" width="18" height="7" rx="1.5" />
        <rect x="17" y="30" width="8" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "大量製造",
    en: "High Volume Production",
    desc: "多台機台同步生產，交期穩定，成本具競爭力，適合量產規模客戶。",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="4" y="26" width="8" height="10" rx="1" />
        <rect x="16" y="18" width="8" height="18" rx="1" />
        <rect x="28" y="10" width="8" height="26" rx="1" />
        <path d="M6 22l10-8 10 4 8-10" />
      </svg>
    ),
  },
  {
    title: "客製化開發",
    en: "Custom Development",
    desc: "提供從產品設計建議、模具開發到量產的全流程技術支援，協助客戶實現產品構想。",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="20" cy="20" r="6" />
        <path d="M20 6v4M20 30v4M6 20h4M30 20h4" />
        <path d="M10.1 10.1l2.8 2.8M27.1 27.1l2.8 2.8M10.1 29.9l2.8-2.8M27.1 12.9l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: "快速交期",
    en: "Fast Delivery",
    desc: "完善的生產排程管理，彈性調配機台資源，確保客戶訂單如期交付。",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="20" cy="22" r="13" />
        <path d="M20 10V6M15 6h10" />
        <polyline points="20,12 20,22 27,27" />
      </svg>
    ),
  },
];

const FLOW_STEPS = [
  { label: "諮詢需求", desc: "來電或來信說明產品需求" },
  { label: "報價確認", desc: "提供模具與成型報價" },
  { label: "模具開發", desc: "設計製作射出模具" },
  { label: "試模驗收", desc: "試射首件確認尺寸與外觀" },
  { label: "量產交貨", desc: "穩定量產、如期出貨" },
];

export default function Quality() {
  return (
    <div className="min-h-screen bg-white font-sans">

      <Navbar />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden h-[300px] md:h-[520px]">
        <img src="/images/stock-quality-hero.jpg" alt="服務與品質" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-8 md:pb-20 pl-6 md:pl-24">
          <span style={{ color: RED, fontSize: "12px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
            Service & Quality
          </span>
          <h1 className="text-white font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, textShadow: "0 2px 20px rgba(0,0,0,0.5)", marginBottom: "16px" }}>
            服務與品質
          </h1>
          <p className="text-white/80 text-base md:text-lg" style={{ maxWidth: 460 }}>
            嚴格的品質管控流程，靈活的服務模式，讓每件產品都符合您的期待
          </p>
        </div>
      </div>

      {/* ── 服務特色 ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: RED }}>Our Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>服務特色</h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ backgroundColor: RED }} />
            <p className="text-gray-500 text-[15px] mt-6 max-w-xl mx-auto leading-relaxed">
              宜盟提供全方位的塑膠射出代工服務，從試產到量產，從成型到後製，靈活配合各種生產規模與需求。
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SERVICE_FEATURES.map(({ title, en, desc, svg }, i) => (
              <Reveal key={title} delay={i * 80}>
              <div
                className="group flex flex-col items-center text-center p-5 md:p-8 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all duration-300 h-full"
                style={{ background: "#fafafa" }}>
                <div className="mb-5 transition-colors duration-300 group-hover:text-[#E63946]" style={{ color: "#bbb" }}>
                  {svg}
                </div>
                <div className="w-6 h-0.5 mb-4 transition-colors duration-300 group-hover:bg-[#E63946]" style={{ backgroundColor: "#ddd" }} />
                <h4 className="font-bold text-gray-800 text-[16px] mb-1">{title}</h4>
                <p className="text-[11px] font-medium tracking-widest mb-3" style={{ color: RED }}>{en}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 品質管控流程 ── */}
      <section className="py-24 md:py-32" style={{ background: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <Reveal direction="left">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: RED }}>Quality Control</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>品質管控流程</h2>
              <div className="w-12 h-0.5 mb-8" style={{ backgroundColor: RED }} />
              <p className="text-gray-600 leading-relaxed text-[16px] mb-4">
                宜盟建立完整的品質管控體系，從原料進廠到成品出貨，每個環節皆有明確的檢驗標準與流程，確保每批產品的品質一致性。
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                長年服務汽車零配件、電子連接器等高規格產業，具備嚴謹的品質意識與豐富的異常處理經驗。
              </p>
            </div>
            </Reveal>
            <Reveal direction="right" delay={100}>
            <div className="relative md:pr-[15px] md:pb-[15px]">
              <div className="hidden md:block absolute inset-0 rounded-xl" style={{ backgroundColor: RED, transform: "translateY(-3px)" }} />
              <img src="/images/stock-quality-section.jpg" alt="品質管控"
                className="block w-full aspect-square object-cover rounded-xl md:translate-x-[19px] md:-translate-y-[15px] relative z-10" />
            </div>
            </Reveal>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {QUALITY_STEPS.map(({ step, title, en, desc }, i) => (
              <Reveal key={step} delay={i * 70}>
              <div
                className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-sm transition-all duration-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-sm"
                  style={{ backgroundColor: RED, fontFamily: "'Poppins', sans-serif" }}>
                  {step}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h4 className="font-bold text-gray-800 text-[16px]">{title}</h4>
                    <span className="text-[11px] text-gray-400 tracking-widest font-medium">{en}</span>
                  </div>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{desc}</p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 服務流程 ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: RED }}>Service Flow</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>服務流程</h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ backgroundColor: RED }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8 md:gap-4">
            {FLOW_STEPS.flatMap(({ label, desc }, i) => {
              const step = (
                <div
                  key={label}
                  className={`relative flex flex-col items-center text-center ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
                >
                  {/* Desktop connector line (row of 5) */}
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-6 h-px"
                      style={{ backgroundColor: "#e5e7eb", left: "calc(50% + 24px)", width: "calc(100% - 48px)" }} />
                  )}
                  {/* Mobile connector line (pairs of 2) */}
                  {i % 2 === 0 && i + 1 < 4 && (
                    <div className="md:hidden absolute top-6 h-px"
                      style={{ backgroundColor: "#e5e7eb", left: "calc(50% + 24px)", width: "calc(100% - 48px)" }} />
                  )}
                  <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm mb-4 relative z-10 bg-white"
                    style={{ borderColor: RED, color: RED, fontFamily: "'Poppins', sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-bold text-gray-800 text-[14px] mb-2">{label}</h4>
                  <p className="text-gray-400 text-[12px] leading-relaxed">{desc}</p>
                </div>
              );
              // Mobile vertical connector between rows
              if (i === 1 || i === 3) {
                return [
                  step,
                  <div key={`${label}-connector`} className="md:hidden col-span-2 flex justify-center">
                    <div className="w-px h-6" style={{ backgroundColor: "#e5e7eb" }} />
                  </div>,
                ];
              }
              return [step];
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 text-white overflow-hidden">
        <img src="/images/stock-contact-hero.jpg" alt="聯絡我們" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="max-w-md">
            <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>聯絡我們</h2>
            <p className="text-white/80 text-[15px] leading-relaxed mb-4">
              歡迎提供產品圖面或樣品，我們將為您評估最佳的生產方案並提供報價。
            </p>
            <div className="w-10 h-0.5" style={{ backgroundColor: RED }} />
          </div>
          <div className="flex flex-col gap-3 text-[15px]">
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">☎️</span>
              <span className="text-white">04-7355795</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">📠</span>
              <span className="text-white">04-7369156</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">📍</span>
              <span className="text-white">彰化縣和美鎮福北路106號</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/50 w-5">✉️</span>
              <a href="mailto:sallyend0112@gmail.com" className="text-white hover:underline">
                sallyend0112@gmail.com
              </a>
            </div>
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
              <p>信箱：sallyend0112@gmail.com　08:30 – 17:30</p>
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
