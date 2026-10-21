import { useState } from "react";
import { Heart, Sparkles, Users, ArrowRight, Phone } from "lucide-react";
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
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=80";
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80";

// Opened on 3 October 2003. The number of years updates itself.
const ESTABLISHED = new Date(2003, 9, 3);
const YEARS_OPEN = Math.floor(
  (Date.now() - ESTABLISHED.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
);

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

function About() {
  const specialities = [
    "Skin Tag / Wart Removal",
    "Microblading",
    "Permanent Eyebrow",
    "Nail Art",
    "Hydra Facial",
    "Airbrush Makeup",
    "Bridal Makeup",
  ];

  const values = [
    {
      icon: <Heart size={24} />,
      title: "Care",
      description:
        "Every client deserves genuine attention and personalised care.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Quality",
      description:
        "We focus on quality products, techniques and professional service.",
    },
    {
      icon: <Users size={24} />,
      title: "Trust",
      description:
        "We build long-lasting relationships through honest and dependable service.",
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
                About Sheeba's
              </span>
              <span className="sb-gold-text block mt-2 pb-2 pr-2 text-6xl sm:text-7xl lg:text-[6.5rem] font-bold leading-[0.98] tracking-tight">
                Beauty with purpose
              </span>
            </h1>

            <p className="mt-8 text-stone-200 font-light text-lg leading-8 max-w-lg">
              A welcoming beauty destination since 2003, where professional
              care, relaxation and confidence come together.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/services"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium shadow-[0_10px_30px_-10px_rgba(210,166,64,.7)] hover:brightness-110 transition"
              >
                Our services
                <ArrowRight size={18} />
              </Link>

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
                alt="Professional makeup and beauty care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-3 sm:-left-8 bottom-12 bg-[#fbf7ef] text-[#1c1712] rounded-2xl px-5 py-4 shadow-xl">
              <p className="sb-display text-2xl font-semibold leading-tight">
                Since 2003
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Serving clients since 3 October 2003
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

      {/* ================= STORY ================= */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 w-3/4 h-3/4 rounded-[2.5rem] bg-[#f1e4d3]"
            />
            <PhotoWithFallback
              src={ABOUT_IMAGE}
              alt="Our salon"
              className="relative w-full h-[540px] object-cover rounded-[2.5rem] rounded-br-[8rem] shadow-xl"
            />

            <div className="absolute -bottom-6 right-4 sm:-right-6 bg-[#1c1712] text-[#fbf7ef] rounded-2xl px-6 py-5 shadow-xl text-center">
              <p className="sb-gold-text sb-display text-5xl font-bold leading-none">
                {YEARS_OPEN}+
              </p>
              <p className="text-xs tracking-widest uppercase mt-2 text-stone-300">
                Years of care
              </p>
            </div>
          </div>

          <div>
            <Ornament className="mb-6" />

            <h2 className="sb-display text-4xl md:text-5xl font-semibold leading-[1.1]">
              More than just a parlour.
            </h2>

            <p className="mt-7 text-stone-600 font-light leading-8">
              Since{" "}
              <span className="text-[#1c1712] font-medium">3 October 2003</span>
              , our parlour has been built on one simple idea: everyone
              deserves to feel confident and beautiful.
            </p>
            <p className="mt-4 text-stone-600 font-light leading-8">
              Led by{" "}
              <span className="text-[#1c1712] font-medium">Sheeba Das</span>,
              Professional Makeup Artist, we provide everything from everyday
              beauty maintenance to important celebrations, in a comfortable
              and welcoming environment.
            </p>
            <p className="mt-4 text-stone-600 font-light leading-8">
              Our team focuses on understanding every client's needs and
              creating results that make them feel their best.
            </p>

            <Link
              to="/services"
              className="sb-focus group inline-flex items-center gap-2 mt-9 text-[#8d6516] font-medium border-b border-[#b8892b]/50 pb-1 hover:border-[#8d6516] transition"
            >
              See our services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 lg:py-28 bg-[#f1e4d3]/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Ornament className="justify-center mb-6" />
            <h2 className="sb-display text-4xl md:text-5xl font-semibold leading-[1.1]">
              What we believe in
            </h2>
          </div>

          <div className="grid md:grid-cols-3 md:divide-x divide-[#b8892b]/30">
            {values.map((v) => (
              <div
                key={v.title}
                className="group px-6 lg:px-12 py-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full border border-[#b8892b]/50 flex items-center justify-center text-[#9c731c] group-hover:bg-[#1c1712] group-hover:text-[#f0d58a] group-hover:border-[#1c1712] transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="sb-display text-4xl font-semibold mt-6">
                  {v.title}
                </h3>
                <p className="text-stone-600 font-light mt-3 leading-7">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#1c1712] text-[#fbf7ef] py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-[#b8892b]/20 blur-3xl"
        />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Ornament className="justify-center mb-8" />
          <h2 className="sb-display text-4xl md:text-6xl font-semibold leading-[1.08]">
            Ready to feel your best?
          </h2>
          <p className="mt-6 text-stone-300 font-light leading-8">
            Call us to book an appointment or ask about a service.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
