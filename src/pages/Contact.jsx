import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

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

.sb-field {
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 0.875rem;
  border: 1px solid #e8d9b8;
  background: #fff;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
}
.sb-field:focus {
  border-color: #b8892b;
  box-shadow: 0 0 0 3px rgba(184, 137, 43, .18);
}
`;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80";

function InstagramIcon({ size = 20 }) {
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

function InfoRow({ icon, title, children }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 shrink-0 rounded-full border border-[#b8892b]/50 text-[#9c731c] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="sb-display text-3xl font-semibold leading-tight">
          {title}
        </h3>
        <div className="mt-1 text-stone-600 font-light leading-7">
          {children}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const whatsappNumber = "917022356243";

  /* Address from the studio flyer */
  const mapQuery = encodeURIComponent(
    "Manna's Building, Opposite Ganapathi Temple, Virajpet, Kodagu, Karnataka 571218"
  );

  const highlights = [
    "Call Us",
    "WhatsApp Us",
    "Visit the Studio",
    "Book Your Appointment",
    "Virajpet",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value;
    const phone = form.phone.value;
    const service = form.service.value;
    const message = form.message.value;

    const whatsappMessage = encodeURIComponent(
      `Hello Sheeba's Beauty Care & Makeup Studio,

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}

Message:
${message}`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const serviceOptions = [
    "Bridal Makeup",
    "Professional Makeup",
    "Airbrush Makeup",
    "Microblading",
    "Permanent Eyebrow",
    "Hydra Facial",
    "Skin Tag / Wart Removal",
    "Nail Art",
    "Hair Treatment",
    "Other",
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
                Contact Sheeba's
              </span>
              <span className="sb-gold-text block mt-2 pb-2 pr-2 text-6xl sm:text-7xl lg:text-[7rem] font-bold leading-[0.98] tracking-tight">
                Let's talk beauty
              </span>
            </h1>

            <p className="mt-8 text-stone-200 font-light text-lg leading-8 max-w-lg">
              Have a question or want to book an appointment? Contact Sheeba's
              Beauty Care &amp; Makeup Studio.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#book"
                className="sb-focus inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium shadow-[0_10px_30px_-10px_rgba(210,166,64,.7)] hover:brightness-110 transition"
              >
                Book appointment
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
                alt="Makeup artist at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-3 sm:-left-8 bottom-12 bg-[#fbf7ef] text-[#1c1712] rounded-2xl px-5 py-4 shadow-xl">
              <p className="sb-display text-2xl font-semibold leading-tight">
                Get in Touch
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Appointments by call or WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS (marquee) ================= */}
      <section
        aria-label="How to reach us"
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

      {/* ================= CONTACT ================= */}
      <section id="book" className="py-20 lg:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
          {/* ---------- Left: details ---------- */}
          <div>
            <Ornament className="mb-6" />
            <h2 className="sb-display text-4xl md:text-5xl font-semibold leading-[1.1]">
              Visit Sheeba's Beauty Care
            </h2>

            <p className="text-stone-600 font-light leading-8 mt-5 max-w-md">
              We provide professional makeup and beauty care services designed
              to help you feel confident and beautiful for every occasion.
            </p>

            <div className="mt-10 space-y-8">
              <InfoRow icon={<MapPin size={20} />} title="Address">
                Manna's Building
                <br />
                Opp. Ganapathi Temple
                <br />
                Virajpet - 571218
              </InfoRow>

              <InfoRow icon={<Phone size={20} />} title="Phone">
                <a
                  href="tel:+917022356243"
                  className="sb-focus block hover:text-[#8d6516] transition"
                >
                  +91 70223 56243
                </a>
                <a
                  href="tel:+919448648635"
                  className="sb-focus block hover:text-[#8d6516] transition"
                >
                  +91 94486 48635
                </a>
              </InfoRow>

              <InfoRow icon={<MessageCircle size={20} />} title="WhatsApp">
                <a
                  href="https://wa.me/917022356243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sb-focus hover:text-[#8d6516] transition"
                >
                  Chat with us for bookings
                </a>
              </InfoRow>

              <InfoRow icon={<Mail size={20} />} title="Email">
                <a
                  href="mailto:sheeba275das@gmail.com"
                  className="sb-focus break-all hover:text-[#8d6516] transition"
                >
                  sheeba275das@gmail.com
                </a>
              </InfoRow>

              <InfoRow icon={<InstagramIcon size={20} />} title="Instagram">
                <a
                  href="https://www.instagram.com/_makeup_by_sheeba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sb-focus hover:text-[#8d6516] transition"
                >
                  @_makeup_by_sheeba
                </a>
              </InfoRow>

              <InfoRow icon={<Clock size={20} />} title="Opening hours">
                Appointment based
                <br />
                Contact us for available timings
              </InfoRow>
            </div>
          </div>

          {/* ---------- Right: form ---------- */}
          <div className="relative self-start">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 w-3/4 h-3/4 rounded-[2.5rem] bg-[#f1e4d3]"
            />
            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-[#1c1712]/10">
              <h3 className="sb-display text-4xl md:text-5xl font-semibold leading-tight">
                Book an appointment
              </h3>
              <p className="text-stone-600 font-light mt-3 leading-7">
                Fill in your details and we'll connect with you on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="sb-field"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="sb-field"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Select service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="sb-field"
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us what service you are interested in..."
                    className="sb-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="sb-focus w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-r from-[#9c731c] to-[#d2a640] text-[#1c1712] font-medium shadow-[0_10px_30px_-10px_rgba(210,166,64,.7)] hover:brightness-110 transition"
                >
                  <Send size={18} />
                  Send enquiry on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="relative h-[450px] bg-[#f1e4d3]">
        <iframe
          title="Sheeba's Beauty Care & Makeup Studio Location"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          className="w-full h-full border-0 [filter:sepia(.25)_saturate(.9)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="sb-focus absolute left-5 bottom-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c1712] text-[#f0d58a] text-sm font-medium shadow-lg shadow-black/20 hover:bg-black transition"
        >
          <MapPin size={16} />
          Get directions
        </a>
      </section>
    </div>
  );
}

export default Contact;
