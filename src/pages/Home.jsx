import { useState } from "react";
import {
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Gem,
  Scissors,
  Droplets,
  Hand,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80";
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";

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

function Heading({ title, description }) {
  return (
    <div className="mb-14 text-center mx-auto max-w-2xl">
      <Ornament className="justify-center mb-6" />
      <h2 className="sb-display text-4xl md:text-5xl font-semibold leading-[1.1] text-[#1c1712]">
        {title}
      </h2>
      {description && (
        <p className="sb-body font-light mt-5 leading-8 text-stone-600">
          {description}
        </p>
      )}
    </div>
  );
}

function Home() {
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
      icon: <Gem size={24} />,
      title: "Microblading",
      description:
        "Eyebrow enhancement and permanent brow services for a defined, natural-looking finish.",
    },
    {
      icon: <Droplets size={24} />,
      title: "Hydra Facial",
      description:
        "Facial care that cleanses, hydrates and gives your skin a healthy glow.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Makeup",
      description:
        "Professional and Airbrush makeup for brides and special occasions.",
    },
    {
      icon: <Scissors size={24} />,
      title: "Hair Treatments",
      description:
        "Keratin, hair Botox and hair spa treatments to care for and transform your hair.",
    },
    {
      icon: <Hand size={24} />,
      title: "Nail Art",
      description:
        "Creative nail art and care for beautiful hands, finished with precision.",
    },
    {
      icon: <Leaf size={24} />,
      title: "Skin Tag & Wart Removal",
      description:
        "Careful skin care treatments for a clearer, smoother and more confident look.",
    },
  ];

  const reasons = [
    {
      icon: <Star size={22} />,
      title: "Professional makeup artist",
      description:
        "Sheeba Das specialises in beautiful makeup looks for special occasions and brides.",
    },
    {
      icon: <Heart size={22} />,
      title: "Personalised beauty care",
      description:
        "Every service is chosen around your skin, hair and makeup needs.",
    },
    {
      icon: <MapPin size={22} />,
      title: "Two locations in Virajpet",
      description:
        "Visit Sheeba's Beauty Care & Makeup Studio or our sister concern, Aishwarya Beauty Parlour.",
    },
  ];

  const sisterServices = [
    "Hair Keratin Treatment",
    "Hair Botox Treatment",
    "Hair Spa",
    "Pimples Treatment",
    "Makeup",
    "Airbrush Makeup",
  ];

  return (
    <div className="sb-body bg-[#fbf7ef] text-[#1c1712]">
      <style>{STYLES}</style>

      {/* ================= HERO ================= */}
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

            {/* Clear two-level brand title */}
            <h1 className="sb-display">
              <span className="sb-gold-text block pb-2 pr-2 text-7xl sm:text-8xl lg:text-[8rem] font-bold leading-[0.95] tracking-tight">
                Sheeba's
              </span>
              <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-[#fbf7ef]">
                Beauty Care &amp; Makeup Studio
              </span>
            </h1>

            <p className="mt-8 text-stone-200 font-light text-lg leading-8 max-w-lg">
              Beauty, skin, hair and makeup care by{" "}
              <span className="text-white font-medium">Sheeba Das</span>,
              Professional Makeup Artist, in Virajpet.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/services"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium shadow-[0_10px_30px_-10px_rgba(210,166,64,.7)] hover:brightness-110 transition"
              >
                Explore services
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
                alt="Beauty and makeup studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-3 sm:-left-8 bottom-12 bg-[#fbf7ef] text-[#1c1712] rounded-2xl px-5 py-4 shadow-xl">
              <p className="sb-display text-2xl font-semibold leading-tight">
                Sheeba Das
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Professional Makeup Artist · Airbrush Makeup
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
                    className="w-1.5 h-1.5 rotate-45 bg-[#1c1712] mr-0"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 w-3/4 h-3/4 rounded-[2.5rem] bg-[#f1e4d3]"
            />
            <PhotoWithFallback
              src={ABOUT_IMAGE}
              alt="Professional beauty care"
              className="relative w-full h-[520px] object-cover rounded-[2.5rem] rounded-br-[8rem] shadow-xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <Ornament className="mb-6" />
            <h2 className="sb-display text-4xl md:text-5xl font-semibold leading-[1.1]">
              Beauty care with professional artistry.
            </h2>

            <p className="mt-7 text-stone-600 font-light leading-8">
              Sheeba's Beauty Care &amp; Makeup Studio is led by{" "}
              <span className="text-[#1c1712] font-medium">Sheeba Das</span>, a
              Professional Makeup Artist offering beauty, makeup, skin and hair
              care in Virajpet.
            </p>
            <p className="mt-4 text-stone-600 font-light leading-8">
              From Airbrush Makeup and bridal looks to Hydra Facial,
              Microblading, Nail Art and professional hair treatments, our focus
              is helping every client feel confident and beautiful.
            </p>

            <Link
              to="/about"
              className="sb-focus group inline-flex items-center gap-2 mt-9 text-[#8d6516] font-medium border-b border-[#b8892b]/50 pb-1 hover:border-[#8d6516] transition"
            >
              Read our story
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 lg:py-28 bg-[#f1e4d3]/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Heading
            title="Beauty services designed around you"
            description="Professional skincare, haircare, brow, nail and makeup services."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-white rounded-[2rem] p-8 border border-[#e8d9b8] hover:border-[#b8892b]/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1c1712]/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border border-[#b8892b]/50 flex items-center justify-center text-[#9c731c] group-hover:bg-[#1c1712] group-hover:text-[#f0d58a] group-hover:border-[#1c1712] transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="sb-display text-3xl font-semibold leading-tight mt-6">
                  {s.title}
                </h3>
                <p className="mt-3 text-stone-600 font-light leading-7">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="sb-focus inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#1c1712] text-[#1c1712] hover:bg-[#1c1712] hover:text-[#fbf7ef] transition"
            >
              View all services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SISTER CONCERN ================= */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Heading
            title="Our sister concern: Aishwarya Beauty Parlour & Makeup Studio"
            description="Alongside Sheeba's Beauty Care & Makeup Studio, you are also welcome at our second location in Virajpet."
          />

          <div className="grid lg:grid-cols-[1fr_1.1fr] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#1c1712]/10">
            <div className="relative bg-[#1c1712] text-[#fbf7ef] p-10 md:p-14">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-[#d2a640]/25"
              />
              <h3 className="sb-display text-3xl md:text-4xl font-semibold leading-tight">
                Aishwarya Beauty Parlour
                <span className="block sb-gold-text">&amp; Makeup Studio</span>
              </h3>

              <p className="text-stone-300 font-light mt-6 leading-7 max-w-sm">
                Professional beauty and makeup services, with the same artistry
                of Sheeba Das.
              </p>

              <div className="flex items-start gap-3 mt-8">
                <MapPin className="text-[#d2a640] mt-1 shrink-0" size={20} />
                <address className="not-italic text-stone-300 font-light leading-7">
                  Mani Nanjappa Complex
                  <br />
                  Near Tender Chicken
                  <br />
                  Virajpet - 571218
                </address>
              </div>

              <a
                href="tel:+917022356243"
                className="sb-focus inline-flex items-center gap-2 mt-8 text-[#f0d58a] hover:text-white transition"
              >
                <Phone size={17} />
                70223 56243
              </a>
            </div>

            <div className="bg-white p-10 md:p-14 flex flex-col justify-center">
              <h4 className="sb-display text-3xl font-semibold">
                Featured services
              </h4>
              <div className="flex flex-wrap gap-3 mt-7">
                {sisterServices.map((name) => (
                  <span
                    key={name}
                    className="px-5 py-2.5 rounded-full bg-[#fbf7ef] border border-[#e8d9b8] text-stone-700 text-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Heading title="Professional care. Beautiful results." />

          <div className="grid md:grid-cols-3 md:divide-x divide-[#b8892b]/30">
            {reasons.map((r) => (
              <div key={r.title} className="px-6 lg:px-12 py-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#f1e4d3] text-[#8d6516] flex items-center justify-center">
                  {r.icon}
                </div>
                <h3 className="sb-display text-3xl font-semibold leading-tight mt-6">
                  {r.title}
                </h3>
                <p className="text-stone-600 font-light mt-3 leading-7">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#1c1712] text-[#fbf7ef] py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-[#b8892b]/20 blur-3xl"
        />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Ornament className="justify-center mb-8" />

          <h2 className="sb-display text-4xl md:text-6xl font-semibold leading-[1.08]">
            Book your appointment today
          </h2>

          <p className="mt-6 text-stone-300 font-light leading-8 max-w-xl mx-auto">
            Contact Sheeba's Beauty Care &amp; Makeup Studio, or visit our
            sister concern, Aishwarya Beauty Parlour &amp; Makeup Studio.
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
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
