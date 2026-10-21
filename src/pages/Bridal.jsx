import { useState } from "react";
import {
  Check,
  Heart,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
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

const BRIDAL_IMAGE =
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85";

function Ornament({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-[#b8892b]/60" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#b8892b]" />
      <span className="h-px w-10 bg-[#b8892b]/60" />
    </div>
  );
}

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
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

function Bridal() {
  const highlights = [
    "Bridal Makeup",
    "Airbrush Makeup",
    "Bridal Hair",
    "Engagement Look",
    "Reception Look",
    "Complete Bridal Package",
  ];

  const services = [
    {
      icon: <Sparkles size={24} />,
      title: "Bridal makeup",
      description:
        "A personalised bridal makeup look created around your features, skin tone, outfit and personal style.",
    },
    {
      icon: <Heart size={24} />,
      title: "Bridal hair",
      description:
        "Elegant hairstyles designed to complement your wedding outfit, jewellery and overall bridal look.",
    },
    {
      icon: <Check size={24} />,
      title: "Complete bridal package",
      description:
        "A complete beauty experience covering the important preparations before your wedding day.",
    },
  ];

  const looks = [
    "Bridal Makeup",
    "Airbrush Makeup",
    "Bridal Hair",
    "Engagement Look",
    "Reception Look",
    "Bridal Package",
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

            <h1 className="sb-display">
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-[#fbf7ef]">
                Sheeba's bridal beauty
              </span>
              <span className="sb-gold-text block mt-2 pb-2 pr-2 text-6xl sm:text-7xl lg:text-[6.5rem] font-bold leading-[0.98] tracking-tight">
                Your day. Your moment.
              </span>
            </h1>

            <p className="mt-8 text-stone-200 font-light text-lg leading-8 max-w-lg">
              At Sheeba's Beauty Care &amp; Makeup Studio, we create elegant
              bridal looks designed around your features, outfit and personal
              style.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium shadow-[0_10px_30px_-10px_rgba(210,166,64,.7)] hover:brightness-110 transition"
              >
                Book bridal consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+917022356243"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#d2a640]/60 text-[#f0d58a] hover:bg-[#d2a640] hover:text-[#1c1712] transition"
              >
                <Phone size={18} />
                Call us
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
                src={BRIDAL_IMAGE}
                alt="Bridal beauty and makeup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-3 sm:-left-8 bottom-12 bg-[#fbf7ef] text-[#1c1712] rounded-2xl px-5 py-4 shadow-xl">
              <p className="sb-display text-2xl font-semibold leading-tight">
                Bridal Beauty
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Made for your special day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS (marquee) ================= */}
      <section
        aria-label="Bridal highlights"
        className="sb-marquee bg-gradient-to-r from-[#9c731c] via-[#d2a640] to-[#9c731c] text-[#1c1712] overflow-hidden"
      >
        <div className="sb-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {highlights.map((item) => (
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

      {/* ================= BRIDAL SERVICES ================= */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Ornament className="justify-center mb-6" />
            <h2 className="sb-display text-4xl md:text-5xl font-semibold leading-[1.1]">
              Everything for your big day
            </h2>
            <p className="font-light text-stone-600 mt-5 leading-8">
              Beautiful and personalised bridal services to help you look
              confident and feel special on your wedding day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 md:divide-x divide-[#b8892b]/30">
            {services.map((s) => (
              <div
                key={s.title}
                className="group px-6 lg:px-12 py-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full border border-[#b8892b]/50 flex items-center justify-center text-[#9c731c] group-hover:bg-[#1c1712] group-hover:text-[#f0d58a] group-hover:border-[#1c1712] transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="sb-display text-3xl md:text-4xl font-semibold mt-6 leading-tight">
                  {s.title}
                </h3>
                <p className="text-stone-600 font-light mt-3 leading-7">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <ul className="flex flex-wrap justify-center gap-3 mt-14">
            {looks.map((item) => (
              <li
                key={item}
                className="px-5 py-2.5 rounded-full bg-white border border-[#e8d9b8] text-sm text-stone-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-24 lg:py-28 bg-[#f1e4d3]/60">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <Ornament className="justify-center mb-8" />

          <h2 className="sb-display text-4xl md:text-6xl font-semibold leading-[1.08]">
            Feel beautiful. Feel confident.
          </h2>

          <p className="max-w-2xl mx-auto text-stone-600 font-light leading-8 mt-7">
            Your wedding day deserves a beauty experience that feels personal,
            comfortable and memorable. Our professional makeup services are
            created to enhance your natural beauty while complementing your
            bridal style.
          </p>

          <Link
            to="/contact"
            className="sb-focus inline-flex items-center gap-2 mt-9 px-8 py-4 rounded-full border border-[#1c1712] hover:bg-[#1c1712] hover:text-[#fbf7ef] transition"
          >
            Enquire about bridal makeup
            <ArrowRight size={18} />
          </Link>
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
            Let's create your bridal look
          </h2>

          <p className="mt-6 text-stone-300 font-light leading-8 max-w-xl mx-auto">
            Contact Sheeba's Beauty Care &amp; Makeup Studio to discuss your
            bridal makeup requirements and appointment.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="https://wa.me/917022356243"
              target="_blank"
              rel="noopener noreferrer"
              className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium hover:brightness-110 transition"
            >
              <MessageCircle size={18} />
              WhatsApp us
            </a>

            <a
              href="tel:+917022356243"
              className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#d2a640]/60 text-[#f0d58a] hover:bg-[#d2a640] hover:text-[#1c1712] transition"
            >
              <Phone size={18} />
              Call 70223 56243
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bridal;
