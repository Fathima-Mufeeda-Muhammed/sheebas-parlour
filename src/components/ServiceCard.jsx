import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* Uses the same fonts and gold palette as the redesigned pages.
   The .sb-display and .sb-body classes come from the shared STYLES block
   (or from your global CSS once you move it there). */

function ServiceCard({ icon, title, description }) {
  return (
    <div className="sb-body group relative h-full overflow-hidden bg-white border border-[#e8d9b8] p-8 rounded-[2rem] hover:border-[#b8892b]/60 hover:shadow-xl hover:shadow-[#1c1712]/10 transition-all duration-300">
      {/* Soft corner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#f1e4d3]/70 group-hover:bg-[#f1e4d3] transition-colors duration-500"
      />

      {/* Bottom accent line */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#9c731c] to-[#d2a640] group-hover:w-full transition-all duration-500"
      />

      <div className="relative flex flex-col h-full">
        <div className="w-16 h-16 rounded-full border border-[#b8892b]/50 text-[#9c731c] flex items-center justify-center mb-6 group-hover:bg-[#1c1712] group-hover:text-[#f0d58a] group-hover:border-[#1c1712] transition-colors duration-300">
          {icon}
        </div>

        <h3 className="sb-display text-3xl leading-tight text-[#1c1712] mb-3">
          {title}
        </h3>

        <p className="text-stone-600 font-light leading-7 text-sm mb-6">
          {description}
        </p>

        <Link
          to="/services"
          className="mt-auto inline-flex items-center gap-2 text-[#8d6516] text-sm font-medium hover:text-[#1c1712] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8892b]"
        >
          Explore service
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1.5 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
