import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

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

.sb-focus:focus-visible { outline: 2px solid #d2a640; outline-offset: 3px; }
`;

/* ================= SOCIAL ICONS ================= */

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

/* ================= LINKS ================= */

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Bridal", to: "/bridal" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  { label: "Skin Tag / Wart Removal", to: "/services" },
  { label: "Microblading", to: "/services" },
  { label: "Permanent Eyebrow", to: "/services" },
  { label: "Nail Art", to: "/services" },
  { label: "Hydra Facial", to: "/services" },
  { label: "Bridal Makeup", to: "/bridal" },
];

const socialClass =
  "sb-focus w-11 h-11 rounded-full border border-[#d2a640]/40 flex items-center justify-center text-[#f0d58a] hover:bg-[#d2a640] hover:border-[#d2a640] hover:text-[#1c1712] transition-colors duration-300";

/* ================= FOOTER LINK LIST ================= */

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h3 className="sb-display text-2xl text-[#fbf7ef] mb-2">{title}</h3>
      <span className="block w-10 h-px bg-[#d2a640] mb-6" />

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="sb-focus group inline-flex items-center gap-2 text-stone-300 font-light hover:text-[#f0d58a] transition-colors"
            >
              <span className="w-0 group-hover:w-3 h-px bg-[#f0d58a] transition-all duration-300" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================= CONTACT ROW ================= */

function ContactRow({ icon, children, align = "center" }) {
  return (
    <div
      className={`flex gap-4 ${
        align === "start" ? "items-start" : "items-center"
      }`}
    >
      <div className="w-10 h-10 shrink-0 rounded-full border border-[#d2a640]/40 flex items-center justify-center text-[#f0d58a]">
        {icon}
      </div>
      <div className="text-sm text-stone-300 font-light leading-6">
        {children}
      </div>
    </div>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="sb-body relative bg-[#120e0a] text-[#fbf7ef] overflow-hidden border-t border-[#d2a640]/40">
      <style>{STYLES}</style>

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#b8892b]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-[#c98f84]/10 blur-3xl"
      />

      {/* ================= BOOKING BANNER ================= */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#9c731c] via-[#c79a35] to-[#e3c068] text-[#1c1712] px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-black/40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 w-56 h-56 rounded-full border border-[#1c1712]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-2 w-40 h-40 rounded-full border border-[#1c1712]/15"
          />

          <div className="relative text-center md:text-left">
            <h3 className="sb-display text-3xl md:text-5xl leading-tight font-medium">
              Ready for your beauty transformation?
            </h3>
            <p className="mt-3 max-w-md font-light text-[#1c1712]/80">
              Book your appointment today and let our professional team take
              care of the rest.
            </p>
          </div>

          <a
            href="https://wa.me/917022356243"
            target="_blank"
            rel="noopener noreferrer"
            className="sb-focus relative inline-flex items-center gap-2 bg-[#1c1712] text-[#f0d58a] px-8 py-4 rounded-full font-medium hover:bg-black transition whitespace-nowrap"
          >
            Book appointment
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] gap-12 lg:gap-14">
          {/* BRAND */}
          <div>
            <Link to="/" className="sb-focus inline-flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Sheeba's Beauty Care & Makeup Studio"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h2 className="sb-display text-3xl leading-none">Sheeba's</h2>
                <p className="sb-gold-text text-sm mt-1">
                  Beauty Care &amp; Makeup Studio
                </p>
              </div>
            </Link>

            <p className="text-stone-300 font-light leading-7 text-sm max-w-sm">
              Professional beauty care and makeup services dedicated to
              enhancing your natural beauty, confidence and special moments.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialClass}
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialClass}
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://wa.me/917022356243"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={socialClass}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <FooterLinkList title="Quick links" links={quickLinks} />
          <FooterLinkList title="Our services" links={serviceLinks} />

          {/* CONTACT */}
          <div>
            <h3 className="sb-display text-2xl text-[#fbf7ef] mb-2">
              Contact us
            </h3>
            <span className="block w-10 h-px bg-[#d2a640] mb-6" />

            <div className="space-y-5">
              <ContactRow icon={<MapPin size={18} />} align="start">
                Manna's Building
                <br />
                Opp. Ganapathi Temple
                <br />
                Virajpet - 571218
              </ContactRow>

              <ContactRow icon={<Phone size={18} />}>
                <a
                  href="tel:+917022356243"
                  className="sb-focus hover:text-[#f0d58a] transition-colors"
                >
                  +91 70223 56243
                </a>
              </ContactRow>

              <ContactRow icon={<Phone size={18} />}>
                <a
                  href="tel:+919448648635"
                  className="sb-focus hover:text-[#f0d58a] transition-colors"
                >
                  +91 94486 48635
                </a>
              </ContactRow>

              <ContactRow icon={<MessageCircle size={18} />}>
                Contact us on WhatsApp
                <br />
                for enquiries &amp; bookings
              </ContactRow>

              <ContactRow icon={<Clock size={18} />} align="start">
                <span className="text-[#fbf7ef]">Opening hours</span>
                <br />
                <span className="text-stone-400">
                  Please contact us for appointment timings
                </span>
              </ContactRow>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="relative border-t border-[#d2a640]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-400 text-sm text-center md:text-left">
            © {currentYear} Sheeba's Beauty Care &amp; Makeup Studio. All rights
            reserved.
          </p>

          <p className="sb-display italic text-lg text-[#f0d58a]">
            Beauty • Care • Confidence
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="sb-focus w-10 h-10 rounded-full border border-[#d2a640]/40 flex items-center justify-center text-[#f0d58a] hover:bg-[#d2a640] hover:border-[#d2a640] hover:text-[#1c1712] transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
