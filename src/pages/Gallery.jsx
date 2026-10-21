import { useEffect, useState } from "react";
import { Sparkles, X, Phone, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

.sb-display { font-family: 'Cormorant Garamond', Georgia, serif; }
.sb-body    { font-family: 'Jost', system-ui, sans-serif; }

.sb-gold-text {
  background: linear-gradient(100deg, #a9791c, #f0d58a 40%, #c89a32 65%, #a9791c);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

@keyframes sb-rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: none; }
}
@keyframes sb-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes sb-arch {
  from { opacity: 0; clip-path: inset(100% 0 0 0 round 999px 999px 0 0); }
  to   { opacity: 1; clip-path: inset(0 0 0 0 round 999px 999px 0 0); }
}
@keyframes sb-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.sb-hero-copy > * { animation: sb-rise .9s cubic-bezier(.2,.7,.2,1) both; }
.sb-hero-copy > *:nth-child(2) { animation-delay: .12s; }
.sb-hero-copy > *:nth-child(3) { animation-delay: .24s; }
.sb-hero-copy > *:nth-child(4) { animation-delay: .36s; }
.sb-arch { animation: sb-arch 1.3s cubic-bezier(.2,.7,.2,1) both; }
.sb-lightbox { animation: sb-fade .25s ease both; }
.sb-marquee-track { animation: sb-marquee 38s linear infinite; }
.sb-marquee:hover .sb-marquee-track { animation-play-state: paused; }

@media (prefers-reduced-motion: reduce) {
  .sb-hero-copy > *, .sb-lightbox, .sb-arch, .sb-marquee-track { animation: none; }
}

.sb-focus:focus-visible { outline: 2px solid #b8892b; outline-offset: 3px; }
`;

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const HERO_IMAGE = u("photo-1522337360788-8b13dee7a37e", 1400);

/* ratio gives the masonry its varied rhythm */
const IMAGES = [
  { src: u("photo-1560066984-138dadb4c035"), alt: "Salon makeup session", ratio: "aspect-[3/4]" },
  { src: u("photo-1487412947147-5cebf100ffc2"), alt: "Makeup artist at work", ratio: "aspect-square" },
  { src: u("photo-1522337360788-8b13dee7a37e"), alt: "Hair styling", ratio: "aspect-[4/5]" },
  { src: u("photo-1604654894610-df63bc536371"), alt: "Nail care", ratio: "aspect-[4/3]" },
  { src: u("photo-1516975080664-ed2fc6a32937"), alt: "Makeup look", ratio: "aspect-[3/4]" },
  { src: u("photo-1570172619644-dfd03ed5d881"), alt: "Salon interior", ratio: "aspect-square" },
];

const HIGHLIGHTS = [
  "Bridal Looks",
  "Airbrush Makeup",
  "Hair Styling",
  "Nail Art",
  "Hydra Facial",
  "Microblading",
  "Salon Moments",
];

function Ornament({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-[#b8892b]/60" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#b8892b]" />
      <span className="h-px w-10 bg-[#b8892b]/60" />
    </div>
  );
}

function PhotoWithFallback({ src, alt, className = "", iconSize = 40 }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-[#1c1712] via-[#4a3a1f] to-[#b8892b] flex items-center justify-center ${className}`}
      >
        <Sparkles size={iconSize} className="text-[#f0d58a]" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <div className="sb-body bg-[#fbf7ef] text-[#1c1712]">
      <style>{STYLES}</style>

      {/* ================= PAGE HEADER (with image) ================= */}
      <section className="relative overflow-hidden bg-[#1c1712]">
        <div
          aria-hidden="true"
          className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full bg-[#b8892b]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-200px] left-[-10%] w-[480px] h-[480px] rounded-full bg-[#c98f84]/10 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center py-20 lg:py-28">
          <div className="sb-hero-copy">
            <Ornament className="mb-8" />

            <h1 className="sb-display">
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-[#fbf7ef]">
                Sheeba's gallery of
              </span>
              <span className="sb-gold-text block mt-2 pb-2 pr-2 text-6xl sm:text-7xl lg:text-[7rem] font-bold leading-[0.98] tracking-tight">
                Beauty moments
              </span>
            </h1>

            <p className="mt-8 text-stone-200 font-light text-lg leading-8 max-w-lg">
              Explore our beauty work, salon atmosphere and transformations.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#photos"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium shadow-[0_10px_30px_-10px_rgba(210,166,64,.7)] hover:brightness-110 transition"
              >
                View photos
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+917022356243"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#d2a640]/60 text-[#f0d58a] hover:bg-[#d2a640] hover:text-[#1c1712] transition"
              >
                <Phone size={18} />
                Call now
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-[#d2a640]/50"
            />
            <div className="sb-arch relative rounded-t-full overflow-hidden aspect-[4/5] shadow-2xl shadow-black/50">
              <PhotoWithFallback
                src={HERO_IMAGE}
                alt="Hair and beauty work from the studio"
                iconSize={64}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-3 sm:-left-8 bottom-12 bg-[#fbf7ef] text-[#1c1712] rounded-2xl px-5 py-4 shadow-xl">
              <p className="sb-display text-2xl font-semibold leading-tight">
                Our Gallery
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Looks, details &amp; salon moments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS (marquee) ================= */}
      <section
        aria-label="Gallery highlights"
        className="sb-marquee bg-gradient-to-r from-[#9c731c] via-[#d2a640] to-[#9c731c] text-[#1c1712] overflow-hidden"
      >
        <div className="sb-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-6 pl-6 py-4 sb-display text-xl md:text-2xl font-semibold whitespace-nowrap"
                >
                  {item}
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rotate-45 bg-[#1c1712]"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="photos" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Ornament className="justify-center mb-6" />
            <h2 className="sb-display text-4xl md:text-5xl font-semibold leading-[1.1]">
              A look inside our studio
            </h2>
            <p className="mt-5 text-stone-600 font-light leading-8">
              Tap any photo to see it larger.
            </p>
          </div>

          <div className="columns-2 md:columns-3 gap-4 md:gap-6">
            {IMAGES.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open photo: ${img.alt}`}
                className="sb-focus group relative block w-full mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-[1.75rem] bg-[#f1e4d3] text-left"
              >
                <PhotoWithFallback
                  src={img.src}
                  alt={img.alt}
                  className={`w-full ${img.ratio} object-cover group-hover:scale-105 transition-transform duration-700`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#1c1712]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
                <span className="absolute left-5 bottom-4 sb-display text-2xl font-semibold text-[#fbf7ef] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#1c1712] text-[#fbf7ef] py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute left-1/2 bottom-[-160px] -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-[#b8892b]/20 blur-3xl"
        />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Ornament className="justify-center mb-8" />
          <h2 className="sb-display text-4xl md:text-6xl font-semibold leading-[1.1]">
            Like what you see?
          </h2>
          <p className="mt-6 text-stone-300 font-light leading-8 max-w-xl mx-auto">
            Book your appointment and let us create your look.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <a
              href="tel:+917022356243"
              className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium hover:brightness-110 transition"
            >
              <Phone size={18} />
              70223 56243
            </a>
            <Link
              to="/contact"
              className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#d2a640]/60 text-[#f0d58a] hover:bg-[#d2a640] hover:text-[#1c1712] transition"
            >
              Contact us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={IMAGES[active].alt}
          onClick={() => setActive(null)}
          className="sb-lightbox fixed inset-0 z-50 bg-[#1c1712]/95 flex items-center justify-center p-5"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close photo"
            className="sb-focus absolute top-5 right-5 w-12 h-12 rounded-full border border-[#d2a640]/60 text-[#f0d58a] flex items-center justify-center hover:bg-[#d2a640] hover:text-[#1c1712] transition"
          >
            <X size={22} />
          </button>
          <img
            src={IMAGES[active].src}
            alt={IMAGES[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-3xl object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
