import { useState, useEffect } from "react";
import { Link } from "wouter";

const RED = "#E63946";

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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

      {/* ── 公司介紹 ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* 標題 */}
          <div className="mb-14">
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
              YI MENG
            </h2>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div style={{ width: 40, height: 1.5, backgroundColor: "#d1d1d1" }} />
              <span style={{ fontSize: "14px", color: "#888", letterSpacing: "0.15em" }}>宜盟企業社</span>
              <div style={{ width: 40, height: 1.5, backgroundColor: "#d1d1d1" }} />
            </div>
          </div>

          {/* 公司簡介 */}
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            宜盟企業社（前身為豐祥企業社）位於彰化和美，深耕塑膠射出領域逾三十年。
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            秉持「積極、誠信、品質第一」的永續經營理念，不斷提升專業技術與設備，
            致力於達成客戶的託付。宜盟是您值得信賴的合作夥伴。
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-16">
            我們專注於高品質的射出代工服務以及電鍍加工與其他後製加工，
            無論是「少量多樣」或「大量製造」，我們都能靈活滿足您的生產需求，
            並熟悉泛用塑膠與工程塑膠等多項材質。
          </p>

          {/* PIQ values */}
          <div className="grid grid-cols-3 gap-6 mb-16">
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
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-gray-100">
            {[
              { num: "1993", label: "年創立" },
              { num: "30+", label: "年製造經驗" },
              { num: "5", label: "大產品應用領域" },
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

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 text-white overflow-hidden">
        <img src="/images/Contact.jpg" alt="聯絡我們" className="absolute inset-0 w-full h-full object-cover" />
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
