import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const RED = "#E63946";

const MATERIALS = [
  { title: "工程塑膠", en: "Engineering Plastics", desc: "耐熱、高強度、精密零件應用，適合汽車及電子產業。" },
  { title: "泛用塑膠", en: "General Plastics", desc: "PP、PE、ABS 等多種材質，廣泛應用於日常製品與工業零件。" },
  { title: "玻璃纖維強化", en: "Glass Fiber Reinforced", desc: "提升結構剛性與尺寸穩定性，適合高強度承力零件。" },
  { title: "彈性體樹脂", en: "Elastomer Resin", desc: "軟硬共構成型，適用密封件、防震墊及握把類零件。" },
  { title: "嵌件射出", en: "Insert Molding", desc: "金屬與塑膠複合一體成型，減少組裝工序、提升結合強度。" },
];

const FINISHING = [
  {
    title: "電鍍加工",
    en: "Electroplating",
    desc: "鍍鉻、鍍鎳等表面金屬化處理，提升外觀質感與耐蝕性，適用汽車零件與精密外殼。",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="6" y="14" width="28" height="16" rx="2" />
        <path d="M13 14V10a7 7 0 0 1 14 0v4" />
        <path d="M20 19v6" />
        <path d="M17 22h6" />
      </svg>
    ),
  },
  {
    title: "烤漆塗裝",
    en: "Painting & Coating",
    desc: "多色系塗裝選擇，滿足各產業外觀與功能要求，提供光澤、霧面、特殊紋理等多種效果。",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M10 30c0-5 4-8 4-13a6 6 0 0 1 12 0c0 5 4 8 4 13H10z" />
        <path d="M10 30h20" />
        <path d="M15 34h10" />
        <path d="M17 38h6" />
      </svg>
    ),
  },
  {
    title: "組裝作業",
    en: "Assembly",
    desc: "提供成品組裝、檢驗與包裝，一站式交付完整成品，大幅縮短交期、降低溝通成本。",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="5" y="5" width="13" height="13" rx="2" />
        <rect x="22" y="5" width="13" height="13" rx="2" />
        <rect x="5" y="22" width="13" height="13" rx="2" />
        <rect x="22" y="22" width="13" height="13" rx="2" />
      </svg>
    ),
  },
];

const EQUIPMENT = [
  { label: "射出成型機", value: "多台", desc: "涵蓋各噸數規格" },
  { label: "可加工噸數", value: "多規格", desc: "小型精密件至大型結構件" },
  { label: "材質種類", value: "10+", desc: "泛用至超級工程塑膠" },
  { label: "後製加工", value: "一站式", desc: "電鍍・塗裝・組裝" },
];

function SectionLabel({ en, zh }: { en: string; zh: string }) {
  return (
    <div className="mb-10">
      <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: RED }}>{en}</span>
      <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {zh}
      </h2>
      <div className="w-12 h-0.5 mt-4" style={{ backgroundColor: RED }} />
    </div>
  );
}

export default function Capability() {
  return (
    <div className="min-h-screen bg-white font-sans">

      <Navbar />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden h-[300px] md:h-[520px]">
        <img src="/images/stock-cap-hero.jpg" alt="代工能力與設備"
          className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-8 md:pb-20 pl-6 md:pl-24">
          <span style={{ color: RED, fontSize: "12px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
            OEM Capability & Equipment
          </span>
          <h1 className="text-white font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, textShadow: "0 2px 20px rgba(0,0,0,0.5)", marginBottom: "16px" }}>
            代工能力與設備
          </h1>
          <p className="text-white/80 text-base md:text-lg" style={{ maxWidth: 460 }}>
            從射出成型到後製加工，提供客製化一站式生產解決方案
          </p>
        </div>
      </div>

      {/* ── 射出成型代工 ── */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
            <div>
              <SectionLabel en="Injection Molding" zh="射出成型代工" />
              <p className="text-gray-600 leading-relaxed mb-4 text-[16px]">
                宜盟擁有多台不同噸數的射出成型機，可因應各類產品的尺寸、重量與精度需求，彈性排程生產，兼顧小批量試模與大批量量產。
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[16px]">
                熟悉泛用塑膠與工程塑膠等多種材質，亦提供包射射出，滿足複合結構與輕量化需求。
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "多噸數機台，靈活對應各類產品尺寸",
                  "射出專業能力",
                  "工程塑膠 / 泛用塑膠 / 彈性體等多材質",
                  "少量多樣或大批量製造皆可配合",
                  "從試模到量產全程技術支援",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: RED }} />
                    <span className="text-gray-600 text-[15px]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
            <Reveal direction="right" delay={100}>
            <div className="relative md:pr-[15px] md:pb-[15px]">
              <div className="hidden md:block absolute inset-0 rounded-xl" style={{ backgroundColor: RED, transform: "translateY(-3px)" }} />
              <img src="/images/Injection molding-1.jpg" alt="射出成型"
                className="block w-full aspect-square object-cover rounded-xl md:translate-x-[19px] md:-translate-y-[15px] relative z-10" />
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 材料與工藝 ── */}
      <section className="py-20 md:py-28" style={{ background: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: RED }}>Materials & Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>材料與工藝能力</h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ backgroundColor: RED }} />
          </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {MATERIALS.map(({ title, en, desc }, i) => (
              <Reveal key={title} delay={i * 70}>
              <div
                className="bg-white rounded-xl p-6 flex flex-col gap-3 border border-gray-100 hover:shadow-md hover:border-red-100 transition-all duration-200 h-full">
                <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
                <h4 className="font-bold text-gray-800 text-[15px]">{title}</h4>
                <p className="text-[11px] font-medium tracking-wide" style={{ color: RED }}>{en}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 後製加工 ── */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">
            <Reveal direction="left">
            <div className="relative md:pr-[15px] md:pb-[15px]">
              <div className="hidden md:block absolute inset-0 rounded-xl" style={{ backgroundColor: RED, transform: "translateY(-3px)" }} />
              <img src="/images/stock-cap-postprocess.jpg" alt="後製加工"
                className="block w-full aspect-square object-cover rounded-xl md:translate-x-[19px] md:-translate-y-[15px] relative z-10" />
            </div>
            </Reveal>
            <Reveal direction="right" delay={100}>
            <div>
              <SectionLabel en="Post-Processing" zh="電鍍與後製加工" />
              <p className="text-gray-600 leading-relaxed mb-8 text-[16px]">
                射出成型後的完整後製加工服務，讓客戶享有從原料到成品的一站式生產流程，大幅縮短交期、降低溝通成本。長年服務汽車零配件、門窗五金、連接器等高規格產業，對外觀精度與表面品質均有嚴格管控。
              </p>
              <div className="flex flex-col gap-4">
                {FINISHING.map(({ title, en, desc, svg }, i) => (
                  <Reveal key={title} delay={i * 80}>
                  <div className="flex gap-5 items-start p-5 rounded-xl"
                    style={{ background: "#fafafa", border: "1px solid #eee" }}>
                    <div className="flex-shrink-0" style={{ color: RED }}>{svg}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{title}
                        <span className="ml-2 text-xs font-normal text-gray-400 tracking-widest">{en}</span>
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  </Reveal>
                ))}
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 設備規模 ── */}
      <section className="py-20 md:py-28" style={{ background: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: RED }}>Equipment Scale</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>設備規模</h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ backgroundColor: RED }} />
          </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
            <div>
              <p className="text-gray-600 leading-relaxed mb-8 text-[16px]">
                宜盟廠區擁有多台不同噸數的射出成型機，從小型精密件到大型結構件皆可生產，並持續投入設備更新，以確保生產效率與產品一致性。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {EQUIPMENT.map(({ label, value, desc }, i) => (
                  <Reveal key={label} delay={i * 80}>
                  <div className="p-5 rounded-xl bg-white border border-gray-100 hover:border-red-100 transition-colors">
                    <p className="text-xs text-gray-400 font-medium mb-1 tracking-wide">{label}</p>
                    <p className="font-black text-[22px] mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: RED }}>{value}</p>
                    <p className="text-gray-400 text-xs">{desc}</p>
                  </div>
                  </Reveal>
                ))}
              </div>
            </div>
            </Reveal>
            <Reveal direction="right" delay={100}>
            <div className="relative md:pr-[15px] md:pb-[15px]">
              <div className="hidden md:block absolute inset-0 rounded-xl" style={{ backgroundColor: RED, transform: "translateY(-3px)" }} />
              <img src="/images/stock-cap-equipment.jpg" alt="設備"
                className="block w-full aspect-square object-cover rounded-xl md:translate-x-[19px] md:-translate-y-[15px] relative z-10" />
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 text-white overflow-hidden">
        <img src="/images/stock-cap-cta.jpg" alt="聯絡我們" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="max-w-md">
            <h2 className="text-4xl font-black mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>聯絡我們</h2>
            <p className="text-white/80 text-[15px] leading-relaxed mb-4">
              我們提供從射出模具到成品的全方位服務，歡迎來電洽詢報價。
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
