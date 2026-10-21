import { useState } from "react";
import {
  Scissors,
  Sparkles,
  Heart,
  Hand,
  Flower2,
  Gem,
  Star,
  Phone,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
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
.sb-marquee-track { animation: sb-marquee 38s linear infinite; }
.sb-marquee:hover .sb-marquee-track { animation-play-state: paused; }

@media (prefers-reduced-motion: reduce) {
  .sb-hero-copy > *, .sb-arch, .sb-marquee-track { animation: none; }
}

.sb-focus:focus-visible { outline: 2px solid #b8892b; outline-offset: 3px; }
`;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80";

function PhotoWithFallback({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-[#1c1712] via-[#4a3a1f] to-[#b8892b] flex items-center justify-center ${className}`}
      >
        <Sparkles size={64} className="text-[#f0d58a]" />
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

function Ornament({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-[#b8892b]/60" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#b8892b]" />
      <span className="h-px w-10 bg-[#b8892b]/60" />
    </div>
  );
}

function Services() {
  const specialities = [
    "Skin Tag / Wart Removal",
    "Microblading",
    "Permanent Eyebrow",
    "Nail Art",
    "Hydra Facial",
    "Airbrush Makeup",
    "Bridal Makeup",
  ];

  const services = [
    {
      icon: <Star size={26} />,
      title: "Specialist Treatments",
      description:
        "Our signature treatments, performed with care and professional skill.",
      items: [
        "Skin Tag / Wart Removal",
        "Microblading",
        "Permanent Eyebrow",
        "Hydra Facial",
        "Nail Art",
      ],
    },
    {
      icon: <Scissors size={26} />,
      title: "Hair Styling",
      description:
        "Haircuts, blow dry, styling, coloring and professional hair treatments.",
      items: [
        "Hair Cut",
        "Hair Styling",
        "Hair Coloring",
        "Hair Spa",
        "Keratin Treatment",
      ],
    },
    {
      icon: <Sparkles size={26} />,
      title: "Facial & Skin Care",
      description:
        "Relaxing and refreshing treatments designed for different skin types.",
      items: [
        "Classic Facial",
        "Glow Facial",
        "Deep Cleansing",
        "De-tan Treatment",
        "Skin Care",
      ],
    },
    {
      icon: <Heart size={26} />,
      title: "Makeup",
      description:
        "Professional makeup services for parties, events and special occasions.",
      items: [
        "Party Makeup",
        "Event Makeup",
        "Engagement Makeup",
        "HD Makeup",
        "Airbrush Makeup",
        "Reception Makeup",
      ],
    },
    {
      icon: <Gem size={26} />,
      title: "Bridal Beauty",
      description:
        "Complete bridal beauty packages for your most important day.",
      items: [
        "Bridal Makeup",
        "Bridal Hair",
        "Engagement Look",
        "Reception Look",
        "Bridal Package",
      ],
    },
    {
      icon: <Hand size={26} />,
      title: "Nail Care",
      description:
        "Professional manicure and pedicure treatments for beautiful hands and feet.",
      items: ["Manicure", "Pedicure", "Nail Care", "Nail Art", "Spa Pedicure"],
    },
    {
      icon: <Flower2 size={26} />,
      title: "Body Care",
      description:
        "Relaxing body treatments designed to refresh and rejuvenate.",
      items: [
        "Body Spa",
        "Body Polishing",
        "Relaxation Treatment",
        "Body Care",
        "Wellness Treatments",
      ],
    },
  ];

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
                Sheeba's
              </span>
              <span className="sb-gold-text block mt-2 pb-2 pr-2 text-6xl sm:text-7xl lg:text-[7rem] font-bold leading-[0.98] tracking-tight">
                Beauty services
              </span>
            </h1>

            <p className="mt-8 text-stone-200 font-light text-lg leading-8 max-w-lg">
              Professional beauty services designed to help you look beautiful
              and feel confident.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="tel:+917022356243"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium shadow-[0_10px_30px_-10px_rgba(210,166,64,.7)] hover:brightness-110 transition"
              >
                <Phone size={18} />
                Book now
              </a>

              <Link
                to="/bridal"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#d2a640]/60 text-[#f0d58a] hover:bg-[#d2a640] hover:text-[#1c1712] transition"
              >
                Bridal beauty
                <ArrowRight size={18} />
              </Link>
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
                alt="Beauty salon and services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-3 sm:-left-8 bottom-12 bg-[#fbf7ef] text-[#1c1712] rounded-2xl px-5 py-4 shadow-xl">
              <p className="sb-display text-2xl font-semibold leading-tight">
                Our Specialities
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Skin, brows, nails &amp; makeup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIALIST IN (marquee) ================= */}
      <section
        aria-label="Specialist in"
        className="sb-marquee bg-gradient-to-r from-[#9c731c] via-[#d2a640] to-[#9c731c] text-[#1c1712] overflow-hidden"
      >
        <div className="sb-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {specialities.map((item) => (
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

      {/* ================= MENU ================= */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Ornament className="justify-center mb-6" />
            <h2 className="sb-display text-4xl md:text-5xl font-semibold leading-[1.1]">
              Our complete beauty menu
            </h2>
          </div>

          <div className="divide-y divide-[#b8892b]/30 border-y border-[#b8892b]/30">
            {services.map((service) => (
              <article
                key={service.title}
                className="group grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 py-12 px-2 md:px-6 hover:bg-[#f1e4d3]/40 transition-colors duration-300"
              >
                <div className="flex gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-full border border-[#b8892b]/50 flex items-center justify-center text-[#9c731c] group-hover:bg-[#1c1712] group-hover:text-[#f0d58a] group-hover:border-[#1c1712] transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="sb-display text-3xl md:text-4xl font-semibold leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 font-light leading-7 mt-3 max-w-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap content-start gap-3 md:pt-1">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="px-5 py-2.5 rounded-full bg-white border border-[#e8d9b8] text-sm text-stone-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
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
            Not sure which service to choose?
          </h2>
          <p className="mt-6 text-stone-300 font-light leading-8 max-w-xl mx-auto">
            Call us and we will help you pick the right treatment for your skin,
            hair or occasion.
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
    </div>
  );
}

export default Services;
