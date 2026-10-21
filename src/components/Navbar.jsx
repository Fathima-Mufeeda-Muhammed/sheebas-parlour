import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

import logo from "../assets/logo.png";

/* Same fonts as the pages. Remove this block once STYLES lives in your global CSS. */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

.sb-display { font-family: 'Cormorant Garamond', Georgia, serif; }
.sb-body    { font-family: 'Jost', system-ui, sans-serif; }

.sb-gold-text {
  background: linear-gradient(100deg, #8d6516, #d9b45a 45%, #b8892b 70%, #8d6516);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sb-focus:focus-visible { outline: 2px solid #b8892b; outline-offset: 3px; }
`;

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Bridal", path: "/bridal" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`sb-body sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#fbf7ef]/95 backdrop-blur-md border-[#b8892b]/30 shadow-lg shadow-[#1c1712]/5"
          : "bg-[#fbf7ef] border-transparent"
      }`}
    >
      <style>{STYLES}</style>

      <nav className="max-w-7xl mx-auto px-5 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[76px]" : "h-[86px]"
          }`}
        >
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="sb-focus flex items-center gap-3 min-w-0"
          >
            <img
              src={logo}
              alt="Sheeba's Beauty Care & Makeup Studio"
              className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0"
            />

            <div className="min-w-0">
              <span className="sb-display block text-2xl md:text-3xl font-medium leading-none text-[#1c1712]">
                Sheeba's
              </span>

              <span className="sb-gold-text block text-xs md:text-sm font-medium leading-tight mt-1">
                Beauty Care &amp; Makeup Studio
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `sb-focus group relative py-2 text-[15px] transition-colors ${
                    isActive
                      ? "text-[#8d6516] font-medium"
                      : "text-stone-700 hover:text-[#8d6516]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-px bg-[#b8892b] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Call Button */}
            <a
              href="tel:+917022356243"
              className="sb-focus inline-flex items-center gap-2 bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] px-6 py-3 rounded-full text-sm font-medium shadow-[0_10px_30px_-12px_rgba(210,166,64,.8)] hover:brightness-110 transition"
            >
              <Phone size={16} />
              <span>Book now</span>
            </a>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="sb-focus lg:hidden w-11 h-11 rounded-full border border-[#b8892b]/50 text-[#8d6516] flex items-center justify-center hover:bg-[#1c1712] hover:text-[#f0d58a] hover:border-[#1c1712] transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#b8892b]/30 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `sb-focus sb-display text-2xl px-4 py-2.5 rounded-xl transition ${
                      isActive
                        ? "bg-[#f1e4d3] text-[#8d6516]"
                        : "text-[#1c1712] hover:bg-[#f1e4d3]/60 hover:text-[#8d6516]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Book Button */}
              <a
                href="tel:+917022356243"
                onClick={() => setMenuOpen(false)}
                className="sb-focus mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium py-3.5 rounded-full"
              >
                <Phone size={17} />
                Book appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
