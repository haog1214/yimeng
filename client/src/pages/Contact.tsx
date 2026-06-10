import { Link } from "wouter";
import Navbar from "@/components/Navbar";

const RED = "#E63946";

const CONTACT_ITEMS = [
  {
    title: "電話",
    en: "Phone",
    value: "04-7355795",
    href: "tel:0473557950",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M8 6h6l3 7-3.5 2.5a18 18 0 0 0 7 7L23 19l7 3v6a2 2 0 0 1-2 2C12 30 8 14 8 8a2 2 0 0 1 0 0V6z" />
      </svg>
    ),
  },
  {
    title: "傳真",
    en: "Fax",
    value: "04-7369156",
    href: null,
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="6" y="14" width="28" height="20" rx="2" />
        <path d="M14 14V8h12v6" />
        <rect x="12" y="20" width="16" height="8" rx="1" />
        <circle cx="28" cy="20" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "電子信箱",
    en: "Email",
    value: "sallyend0112@gmail.com",
    href: "mailto:sallyend0112@gmail.com",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="5" y="10" width="30" height="22" rx="2" />
        <path d="M5 10l15 12L35 10" />
      </svg>
    ),
  },
  {
    title: "公司地址",
    en: "Address",
    value: "508彰化縣和美鎮福北路106號",
    href: "https://maps.google.com/?q=彰化縣和美鎮福北路106號",
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20 4C14.5 4 10 8.5 10 14c0 8 10 22 10 22s10-14 10-22c0-5.5-4.5-10-10-10z" />
        <circle cx="20" cy="14" r="3.5" />
      </svg>
    ),
  },
  {
    title: "營業時間",
    en: "Business Hours",
    value: "週一至週五　08:30 – 18:00",
    href: null,
    svg: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="20" cy="20" r="14" />
        <polyline points="20,10 20,20 27,25" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans">

      <Navbar />

      {/* ── Hero ── */}
      <div className="relative overflow-hidden h-[300px] md:h-[520px]">
        <img src="/images/Contact.jpg" alt="聯絡我們" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-8 md:pb-20 pl-6 md:pl-24">
          <span style={{ color: RED, fontSize: "12px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
            Contact Us
          </span>
          <h1 className="text-white font-bold"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, textShadow: "0 2px 20px rgba(0,0,0,0.5)", marginBottom: "16px" }}>
            聯絡我們
          </h1>
          <p className="text-white/80 text-base md:text-lg" style={{ maxWidth: 460 }}>
            歡迎提供產品圖面或樣品，我們將為您評估最佳生產方案並提供報價
          </p>
        </div>
      </div>

      {/* ── 聯絡資訊 ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* 左：聯絡卡片 */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: RED }}>Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                與我們聯繫
              </h2>
              <div className="w-12 h-0.5 mb-8" style={{ backgroundColor: RED }} />
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
                無論您有產品開發需求、想了解代工報價，或希望來廠參觀洽談，歡迎隨時與我們聯絡。宜盟團隊將盡快回覆您。
              </p>

              <div className="flex flex-col gap-5">
                {CONTACT_ITEMS.map(({ title, en, value, href, svg }) => (
                  <div key={title} className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-sm transition-all duration-200"
                    style={{ background: "#fafafa" }}>
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#fff3f3", color: RED }}>
                      {svg}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium tracking-widest mb-1">{title.toUpperCase()} · {en}</p>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-semibold text-gray-800 hover:underline text-[15px]"
                          style={{ color: RED }}>
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-800 text-[15px]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右：地圖 + 補充說明 */}
            <div className="flex flex-col gap-8">
              {/* Google Map embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[260px] md:h-[380px]">
                <iframe
                  title="宜盟企業社地圖"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=彰化縣和美鎮福北路106號&output=embed&hl=zh-TW"
                />
              </div>

              {/* 補充說明 */}
              <div className="p-6 rounded-2xl border border-gray-100" style={{ background: "#fafafa" }}>
                <h3 className="font-bold text-gray-800 mb-4 text-[16px]">來廠須知</h3>
                <div className="flex flex-col gap-3">
                  {[
                    "建議事先來電預約，以確保專人接待",
                    "廠址：彰化縣和美鎮福北路106號",
                    "停車位充足，歡迎自行開車前往",
                    "如有圖面或樣品，歡迎攜帶討論",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: RED }} />
                      <span className="text-gray-500 text-[14px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
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
