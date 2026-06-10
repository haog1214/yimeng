import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { Link } from "wouter";

const RED = "#E63946";

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ height: "520px" }}>
        <img src="/images/stock-about-hero.jpg" alt="關於宜盟"
          className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 pl-6 md:pl-24">
          <span style={{ color: RED, fontSize: "12px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
            About Yi Meng
          </span>
          <h1 className="text-white font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(30px, 5vw, 56px)", lineHeight: 1.1, textShadow: "0 2px 20px rgba(0,0,0,0.5)", marginBottom: "12px" }}>
            關於宜盟
          </h1>
          <p className="text-white/80 text-sm md:text-lg" style={{ maxWidth: 420 }}>
            深耕彰化和美三十餘年，專注塑膠射出成型與後製加工
          </p>
        </div>
      </div>

      {/* ── 公司介紹 ── */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <Reveal>
          <div className="mb-12">
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 900, color: RED, letterSpacing: "0.06em", lineHeight: 1 }}>
              YI MENG
            </h2>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div style={{ width: 40, height: 1.5, backgroundColor: "#d1d1d1" }} />
              <span style={{ fontSize: "14px", color: "#888", letterSpacing: "0.15em" }}>宜盟企業社</span>
              <div style={{ width: 40, height: 1.5, backgroundColor: "#d1d1d1" }} />
            </div>
          </div>
          </Reveal>

          <Reveal delay={100}>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            宜盟企業社（前身為豐祥企業社）位於彰化和美，深耕塑膠射出領域逾三十年。
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            秉持「積極、誠信、品質第一」的永續經營理念，不斷提升專業技術與設備，
            致力於達成客戶的託付。宜盟是您值得信賴的合作夥伴。
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
            我們專注於高品質的射出代工服務以及電鍍加工與其他後製加工，
            無論是「少量多樣」或「大量製造」，我們都能靈活滿足您的生產需求。
          </p>
          </Reveal>

          {/* PIQ values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { en: "Proactive", zh: "積極", desc: "主動溝通、快速回應，與客戶同步解決問題。" },
              { en: "Integrity", zh: "誠信", desc: "誠實報價、如實交付，建立長久合作關係。" },
              { en: "Quality", zh: "品質第一", desc: "從原料到成品全程管控，確保每件產品達標。" },
            ].map(({ en, zh, desc }, i) => (
              <Reveal key={en} delay={i * 100}>
              <div className="flex flex-col items-center p-6 md:p-8 rounded-2xl h-full"
                style={{ background: "#fafafa", border: "1px solid #eee" }}>
                <div className="text-2xl font-black mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: RED }}>{en[0]}</div>
                <div className="w-6 h-0.5 mb-4" style={{ backgroundColor: RED }} />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{en}</h3>
                <p className="text-sm text-gray-500 font-medium mb-2">{zh}</p>
                <p className="text-sm text-gray-500 leading-relaxed text-center">{desc}</p>
              </div>
              </Reveal>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-gray-100">
            {[
              { num: "1993", label: "年創立" },
              { num: "30+", label: "年製造經驗" },
              { num: "5", label: "大產品應用領域" },
            ].map(({ num, label }, i) => (
              <Reveal key={label} delay={i * 100}>
              <div className="text-center">
                <div className="font-black mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(24px, 4vw, 48px)", color: RED }}>
                  {num}
                </div>
                <p className="text-gray-500 text-xs md:text-sm tracking-wide">{label}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-16 md:py-20 text-white overflow-hidden">
        <img src="/images/stock-about-cta.jpg" alt="聯絡我們" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>聯絡我們</h2>
            <p className="text-white/80 text-sm md:text-[15px]">我們提供從射出模具到成品的全方位服務，歡迎來電洽詢。</p>
          </div>
          <div className="flex flex-col gap-3 text-sm md:text-[15px]">
            {[
              { icon: "☎️", text: "04-7355795" },
              { icon: "📠", text: "04-7369156" },
              { icon: "✉️", text: "sallyend0112@gmail.com", href: "mailto:sallyend0112@gmail.com" },
            ].map(({ icon, text, href }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="text-white/50 w-5">{icon}</span>
                {href ? <a href={href} className="text-white hover:underline">{text}</a> : <span className="text-white">{text}</span>}
              </div>
            ))}
            <Link href="/" className="mt-3 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90 self-start"
              style={{ backgroundColor: RED }}>
              回到首頁
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <img src="/images/宜盟-12.png" alt="宜盟 Yi Meng" className="h-14 w-auto brightness-0 invert opacity-80" />
            <div className="text-center md:text-right text-gray-400 text-xs md:text-sm space-y-1">
              <p>508彰化縣和美鎮福北路106號</p>
              <p>電話：04-7355795　傳真：04-7369156</p>
              <p>信箱：sallyend0112@gmail.com　08:30 – 18:00</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-500 text-[10px] md:text-xs tracking-widest uppercase">
              宜盟企業社 – 您最值得信賴的塑膠射出成型合作夥伴 ・ SINCE 1993
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
