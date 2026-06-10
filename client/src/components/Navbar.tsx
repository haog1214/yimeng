import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const RED = "#E63946";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "關於宜盟", href: "/about" },
  { label: "代工能力與設備", href: "/capability" },
  { label: "服務與品質", href: "/quality" },
  { label: "聯絡我們", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => location === href;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled || menuOpen ? "#ffffff" : "transparent",
          boxShadow: scrolled || menuOpen ? "0 1px 8px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img
              src={scrolled || menuOpen ? "/images/Logo2.png" : "/images/Logo.png"}
              alt="宜盟 Yi Meng"
              className={scrolled || menuOpen ? "h-[52px] w-auto" : "h-[72px] w-auto"}
              style={!(scrolled || menuOpen) ? { filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.9))" } : {}}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors duration-300 tracking-wide"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: isActive(href) ? RED : (scrolled ? "#374151" : "#ffffff"),
                  fontWeight: isActive(href) ? 600 : 400,
                  textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-50"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="選單"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: scrolled || menuOpen ? "#374151" : "#ffffff",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: scrolled || menuOpen ? "#374151" : "#ffffff",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: scrolled || menuOpen ? "#374151" : "#ffffff",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-40 md:hidden bg-white w-72 shadow-2xl transition-transform duration-300 flex flex-col pt-28 pb-10 px-8"
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="py-4 text-base font-medium border-b border-gray-100 transition-colors duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: isActive(href) ? RED : "#374151",
                fontWeight: isActive(href) ? 700 : 500,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <p className="text-xs text-gray-400 leading-relaxed">
            宜盟企業社<br />
            彰化縣和美鎮福北路106號<br />
            04-7355795
          </p>
        </div>
      </div>
    </>
  );
}
