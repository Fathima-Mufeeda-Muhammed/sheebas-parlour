

function SectionTitle({ subtitle, title, description, light = false }) {
  return (
    <div className="sb-body text-center max-w-2xl mx-auto mb-14">
      {/* Ornament: hairline, diamond, hairline */}
      <div
        className="flex items-center justify-center gap-3 mb-6"
        aria-hidden="true"
      >
        <span className="h-px w-10 bg-[#b8892b]/60" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#b8892b]" />
        <span className="h-px w-10 bg-[#b8892b]/60" />
      </div>

      {subtitle && (
        <p
          className={`sb-display italic text-xl mb-3 ${
            light ? "text-[#f0d58a]" : "text-[#8d6516]"
          }`}
        >
          {subtitle}
        </p>
      )}

      <h2
        className={`sb-display text-4xl md:text-5xl leading-[1.1] ${
          light ? "text-[#fbf7ef]" : "text-[#1c1712]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 font-light leading-8 ${
            light ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
