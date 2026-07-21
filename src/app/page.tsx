"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import IntroGate from "@/components/IntroGate";
import { 
  Target, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  MapPin, 
  Compass, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Strategic Land Acquisition",
    category: "NAINA & TPS-11 Focus",
    description:
      "Identifying and securing premium land parcels within CIDCO's Town Planning Scheme No. 11 (TPS-11) and the overarching NAINA smart city framework to guarantee maximum development readiness.",
    highlights: ["CIDCO TPS-11 Aligned", "Fast-Track Approval Zone", "High Growth Corridor"],
    gradient: "from-[#6105A3] to-[#8E4585]"
  },
  {
    icon: TrendingUp,
    title: "Maximizing Investor Wealth",
    category: "High ROI Potential",
    description:
      "Capitalizing on unprecedented mega-infrastructure projects—including Atal Setu (MTHL), Navi Mumbai International Airport, and multimodal corridors—to generate exponential long-term capital appreciation.",
    highlights: ["MTHL / Atal Setu Proximity", "Airport Impact Zone", "Unmatched Capital Appreciation"],
    gradient: "from-[#8E4585] to-[#AD5691]"
  },
  {
    icon: Building2,
    title: "Planned Smart City Infrastructure",
    category: "Sustainable Urbanization",
    description:
      "Supporting the transformation of NAINA into a world-class megacity featuring smart utility networks, educational hubs, medical cities, and integrated commercial ecosystems.",
    highlights: ["Aerocity & Medicity Hubs", "Smart Utilities & Metro", "Green Ecological Reserves"],
    gradient: "from-[#6105A3] to-[#510488]"
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Legal Assurance",
    category: "100% Trust & Compliance",
    description:
      "Providing clear-title land opportunities, RERA compliance, and transparent legal documentation, backed by decades of combined expertise in land acquisition and government liaisoning.",
    highlights: ["100% Clear Land Titles", "RERA Compliant Ecosystem", "Expert Legal Advisory"],
    gradient: "from-[#AD5691] to-[#6105A3]"
  }
];

const metrics = [
  { value: "600+", label: "Sq. Km. NAINA Planned Region", icon: MapPin },
  { value: "TPS-11", label: "Town Planning Scheme Core Focus", icon: Target },
  { value: "< 15 Mins", label: "To Navi Mumbai Int'l Airport", icon: Compass },
  { value: "100%", label: "Verified & Transparent Advisory", icon: ShieldCheck }
];

export default function ObjectivePage() {
  const handleOpenMap = () => {
    window.open("/home", "_blank");
  };

  return (
    <IntroGate>
      <main className="min-h-screen bg-[#130721] text-white selection:bg-[#6105A3] selection:text-white relative overflow-hidden">
        <Navbar />

        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#6105A3]/30 via-[#8E4585]/15 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-[#6105A3]/20 blur-[140px] pointer-events-none" />
        <div className="absolute top-[1600px] left-0 w-[600px] h-[600px] bg-[#8E4585]/15 blur-[160px] pointer-events-none" />

        {/* ==================== HERO SECTION ==================== */}
        <section className="relative min-h-screen flex flex-col items-center justify-between pt-36 pb-16 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
          {/* Top Filler Spacing */}
          <div />

          {/* Hero Main Content */}
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center z-10 my-auto">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#C8A2C8]/30 bg-white/5 backdrop-blur-md mb-8 shadow-lg shadow-[#6105A3]/10 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#FFD700]">
                Strategic Vision & Objectives
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.15] mb-6">
              Pioneering NAINA & TPS-11{" "}
              <span className="bg-gradient-to-r from-[#FFD700] via-[#C8A2C8] to-[#FFFFFF] bg-clip-text text-transparent">
                Growth Corridor
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
              Gomata Vision LLP is dedicated to unlocking prime real estate opportunities, high-yield land acquisitions, and sustainable smart infrastructure adjacent to Navi Mumbai International Airport.
            </p>

            {/* Action Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleOpenMap}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#6105A3] to-[#8E4585] text-white font-bold text-sm md:text-base uppercase tracking-wider shadow-[0_10px_30px_rgba(97,5,163,0.4)] hover:shadow-[0_15px_40px_rgba(97,5,163,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border border-white/20"
              >
                <span>Explore Interactive Map</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

              <Link
                href="/about-gomata"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-bold text-sm md:text-base uppercase tracking-wider border border-white/15 hover:border-white/30 transition-all duration-300"
              >
                <span>About Our Vision</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* ==================== HERO BOTTOM CENTRE BUTTON ==================== */}
          <div className="z-20 pt-12 pb-4 flex flex-col items-center justify-center w-full">
            <button
              onClick={handleOpenMap}
              className="group relative flex items-center gap-4 px-10 py-4 rounded-full bg-[#180828] border-2 border-[#FFD700]/60 hover:border-[#FFD700] text-white shadow-[0_0_35px_rgba(255,215,0,0.25)] hover:shadow-[0_0_50px_rgba(255,215,0,0.45)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Pulse Indicator dot */}
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FFD700]"></span>
              </span>

              <span className="text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-white group-hover:text-[#FFD700] transition-colors">
                Explore Map
              </span>

              <div className="w-8 h-8 rounded-full bg-[#FFD700]/15 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-[#180828] transition-all">
                <ExternalLink className="w-4 h-4" />
              </div>
            </button>
            <p className="mt-3 text-xs text-white/50 tracking-wider uppercase">
              Opens full interactive map in new tab
            </p>
          </div>
        </section>

        {/* ==================== OBJECTIVES GRID SECTION ==================== */}
        <section className="relative py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#FFD700] font-bold text-xs md:text-sm uppercase tracking-[0.25em]">
              Core Directives
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">
              Our Strategic Objectives
            </h2>
            <p className="text-white/70 mt-4 text-base md:text-lg font-light">
              Built on transparency, future-ready land planning, and unmatched spatial growth in the NAINA region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {objectives.map((obj, idx) => {
              const IconComp = obj.icon;

              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl p-8 lg:p-10 bg-white/5 border border-white/15 backdrop-blur-xl hover:border-[#FFD700]/50 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${obj.gradient} flex items-center justify-center text-white shadow-lg shadow-[#6105A3]/30 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-8 h-8" />
                      </div>
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#C8A2C8] border border-white/10">
                        {obj.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors">
                      {obj.title}
                    </h3>

                    <p className="text-white/75 leading-relaxed text-sm md:text-base font-light mb-8">
                      {obj.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2.5">
                    {obj.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[#6105A3]/20 text-white/90 border border-[#6105A3]/40"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================== KEY METRICS ==================== */}
        <section className="relative py-20 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
          <div className="rounded-3xl p-10 md:p-16 bg-gradient-to-r from-[#6105A3]/40 via-[#8E4585]/30 to-[#6105A3]/40 border border-white/20 backdrop-blur-2xl shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {metrics.map((m, idx) => {
                const MIcon = m.icon;

                return (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#FFD700] mb-4">
                      <MIcon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl md:text-5xl font-black text-white mb-2">
                      {m.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/75 font-medium uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== BOTTOM FOOTER CTA ==================== */}
        <section className="relative py-20 px-6 text-center border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore the Master Plan?
            </h2>
            <p className="text-white/70 mb-8 text-base md:text-lg">
              Launch our interactive GIS presentation map to inspect TPS-11 boundaries, nearby infrastructure projects, and strategic land locations.
            </p>
            <button
              onClick={handleOpenMap}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#FFD700] text-[#180828] font-black text-sm md:text-base uppercase tracking-wider shadow-[0_10px_35px_rgba(255,215,0,0.3)] hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <span>Launch Interactive Map</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </IntroGate>
  );
}