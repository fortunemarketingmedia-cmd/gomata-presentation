"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { 
  UserCheck, 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Compass, 
  Users, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Award,
  Building2,
  Scale
} from "lucide-react";

// What Our Investors Will Gain (3 items required by user)
const investorGains = [
  {
    icon: TrendingUp,
    title: "A path toward financial freedom",
    description:
      "Systematic, high-yield land investments positioned to generate long-term capital security, inflation resistance, and true financial independence."
  },
  {
    icon: Compass,
    title: "A deeper understanding of the power of investment",
    description:
      "Gain strategic insights into infrastructure-driven appreciation, land entry cycles, and market timing for maximum multiplier returns."
  },
  {
    icon: Users,
    title: "Access to a strong network focused on wealth creation",
    description:
      "Join an exclusive ecosystem of visionary leaders, land experts, and like-minded investors building wealth in NAINA & TPS-11."
  }
];

export default function ObjectivePage() {
  const handleOpenMap = () => {
    window.open("/home", "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-[#241F24] overflow-hidden">
      <Navbar />

      {/* ==================== HERO SECTION (PURPLE GRADIENT THEME) ==================== */}
      <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-between pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-[#3B0764] via-[#6105A3] to-[#8E4585] text-white overflow-hidden shadow-2xl">
        {/* Subtle Ambient Pattern Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C8A2C8]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Spacer */}
        <div />

        {/* Hero Content Grid */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center my-auto">
          

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.15] drop-shadow-md">
            Welcome To The Journey Of{" "}
            <span className="text-[#FFD700] drop-shadow-sm">
              Wealth Creation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-white/90 font-medium mt-6 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Partnering with Gomata Vision LLP to build generational prosperity through strategic land investments in NAINA & TPS-11.
          </p>
        </div>
      </section>

      {/* ==================== SEPARATE SECTION 1: WHO IS VIKAS KOLI ==================== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#FAFAFC] border-b border-[#C8A2C8]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left Image / Profile Card */}
            <div className="lg:col-span-5 flex justify-center h-full">
              <div className="relative group rounded-[32px] overflow-hidden bg-white p-4 border border-[#C8A2C8]/35 shadow-2xl max-w-md w-full h-full flex flex-col">
                <div className="relative min-h-[480px] lg:min-h-0 h-full w-full rounded-[24px] overflow-hidden">
                  <Image
                    src="/images/team/vikas.webp"
                    alt="Vikas Koli - Founder & Visionary"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241F24]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFD700] text-[#180828] text-xs font-black uppercase tracking-wider mb-2">
                      Leadership
                    </span>
                    <h3 className="text-3xl font-black text-white">Vikas Koli</h3>
                    <p className="text-[#C8A2C8] font-semibold text-sm">Founder & Visionary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Details Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6105A3]/10 text-[#6105A3] w-fit mb-4">
                <UserCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Founder & Visionary
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-[#241F24] tracking-tight leading-tight mb-6">
                Who is Vikas Koli
              </h2>

              <p className="text-[#5F5660] text-base md:text-lg leading-relaxed font-medium mb-8">
                Vikas Koli is the Founder of Gomata Vision LLP. A distinguished civil engineer and real estate strategist with 28+ years of combined experience in infrastructure development, land acquisition, finance, and government liaisoning across Maharashtra.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">Former Director at NHAI</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      Served as Director at National Highways Authority of India (Maharashtra & Goa), with additional experience at Airports Authority of India and Municipal Corporation of Thane City.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">Pioneer in NAINA & TPS-11 Land Acquisition</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      Leading strategic land positioning within CIDCO&apos;s NAINA planned smart city zone, securing early-mover advantages for high-value growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">Helping Investors Make the Right Decision</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      Dedicated to guiding investors with complete legal transparency, market timing insights, and robust risk management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SEPARATE SECTION 2: WHY NAINA & TPS 11 ==================== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-white border-b border-[#C8A2C8]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left Details Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6105A3]/10 text-[#6105A3] w-fit mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  High-Growth Corridor
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-[#241F24] tracking-tight leading-tight mb-6">
                Why NAINA & TPS 11
              </h2>

              <p className="text-[#5F5660] text-base md:text-lg leading-relaxed font-medium mb-8">
                NAINA (Navi Mumbai Airport Influence Notified Area) spans over 600+ sq. km. surrounding the upcoming Navi Mumbai International Airport. CIDCO&apos;s Town Planning Scheme No. 11 (TPS-11) is the central high-appreciation urban growth engine.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAFAFC] border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">Direct Atal Setu & Airport Connectivity</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      Positioned within 15 minutes of Navi Mumbai International Airport and Atal Setu (MTHL), providing instant access to South Mumbai and main transport hubs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAFAFC] border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">CIDCO-Led Smart Infrastructure</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      Featuring planned utility corridors, smart road networks, Aerocity, Medicity, educational hubs, and modern commercial zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAFAFC] border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">India&apos;s Fastest Appreciating Real Estate Corridor</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      Ground-floor entry in planned town planning schemes yields exponential multiplier returns as infrastructure projects materialize.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stat Highlight Card */}
            <div className="lg:col-span-5 flex justify-center h-full">
              <div className="relative group rounded-[32px] overflow-hidden bg-gradient-to-br from-[#6105A3] to-[#8E4585] p-8 text-white shadow-2xl max-w-md w-full h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFD700] text-[#180828] text-xs font-black uppercase tracking-wider mb-6 w-fit">
                  NAINA Overview
                </span>

                <div className="space-y-6 my-auto">
                  <div className="border-b border-white/20 pb-4">
                    <div className="text-4xl font-black text-[#FFD700]">600+ Sq. Km.</div>
                    <div className="text-xs text-white/80 uppercase tracking-wider font-semibold mt-1">Planned NAINA Smart City</div>
                  </div>

                  <div className="border-b border-white/20 pb-4">
                    <div className="text-4xl font-black text-white">TPS-11</div>
                    <div className="text-xs text-white/80 uppercase tracking-wider font-semibold mt-1">Town Planning Scheme Core</div>
                  </div>

                  <div>
                    <div className="text-4xl font-black text-[#FFD700]">&lt; 15 Mins</div>
                    <div className="text-xs text-white/80 uppercase tracking-wider font-semibold mt-1">To International Airport</div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <button
                    onClick={handleOpenMap}
                    className="w-full py-3.5 rounded-xl bg-white text-[#6105A3] font-bold text-sm uppercase tracking-wider hover:bg-[#FFD700] hover:text-[#180828] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>View Boundary Map</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SEPARATE SECTION 3: WHY GOMATA VISION ==================== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#C8A2C8]/10 border-b border-[#C8A2C8]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left Card / Trust Badge */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 h-full">
              <div className="relative group rounded-[32px] overflow-hidden bg-white p-8 border border-[#C8A2C8]/35 shadow-2xl max-w-md w-full h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#6105A3]/10 text-[#6105A3] flex items-center justify-center">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#FFD700]/20 text-[#6105A3] uppercase tracking-wider">
                      Guaranteed Security
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#241F24] mb-3">
                    100% Legal & Transparent Trust
                  </h3>

                  <p className="text-sm text-[#5F5660] leading-relaxed mb-6 font-medium">
                    We prioritize investor safety above everything. Every plot is backed by verified legal titles, 100% cheque transactions, and government-aligned documentation to guarantee zero-risk land ownership.
                  </p>

                  {/* Core Trust Framework Features */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl bg-[#FAFAFC] border border-[#C8A2C8]/20">
                      <h4 className="text-xs font-bold text-[#6105A3] uppercase tracking-wider mb-1">
                        CIDCO & RERA Compliant
                      </h4>
                      <p className="text-xs text-[#5F5660] font-medium leading-relaxed">
                        Fully aligned with CIDCO Town Planning Scheme frameworks and government urban development norms.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAFAFC] border border-[#C8A2C8]/20">
                      <h4 className="text-xs font-bold text-[#6105A3] uppercase tracking-wider mb-1">
                        Bank Escrow Audit Trail
                      </h4>
                      <p className="text-xs text-[#5F5660] font-medium leading-relaxed">
                        Structured transfers executed via HDFC Bank escrow with complete GST tax invoices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-5 border-t border-[#C8A2C8]/20 mt-auto">
                  <div className="flex items-center gap-2.5 text-xs text-[#241F24] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3] shrink-0" />
                    <span>7/12 Land Record Direct Investor Names</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#241F24] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3] shrink-0" />
                    <span>100% Cheque Transaction Security</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#241F24] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3] shrink-0" />
                    <span>Verified by 3 Independent Law Firms</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#241F24] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3] shrink-0" />
                    <span>Zero Encumbrance Title Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#241F24] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3] shrink-0" />
                    <span>Flexible Resale & JV Exit Options</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Details Content */}
            <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6105A3]/10 text-[#6105A3] w-fit mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Trusted Real Estate Partner
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-[#241F24] tracking-tight leading-tight mb-6">
                Why Gomata Vision
              </h2>

              <p className="text-[#5F5660] text-base md:text-lg leading-relaxed font-medium mb-8">
                Gomata Vision LLP is built on absolute legal compliance, transparent advisory, and early-mover advantages in prime land parcels for risk-free, high-reward growth.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">Unmatched Legal Due Diligence</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      Every land parcel undergoes 3-tier legal scrutiny by top independent law firms to guarantee clear titles and zero encumbrance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">Deep Local & Government Liaisoning Network</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      Our leadership has 25+ years of direct experience navigating complex acquisition and town planning processes with CIDCO and government bodies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#C8A2C8]/25 shadow-sm">
                  <div className="p-2 rounded-xl bg-[#6105A3]/10 text-[#6105A3] shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#241F24] text-base">End-to-End Investor Guidance</h4>
                    <p className="text-xs md:text-sm text-[#5F5660] font-medium mt-0.5">
                      From plot selection to post-purchase documentation and exit strategies, we handle the entire process seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT OUR INVESTORS WILL GAIN ==================== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
              Investor Value
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#241F24] mt-3 tracking-tight">
              What Our Investors Will Gain?
            </h2>
            <p className="mt-3 text-[#5F5660] text-base md:text-lg">
              Unlocking long-term prosperity, financial independence, and high-impact network access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investorGains.map((gain, idx) => {
              const IconComponent = gain.icon;
              return (
                <div
                  key={idx}
                  className="relative group overflow-hidden bg-white rounded-3xl p-8 border border-[#C8A2C8]/35 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#FFD700] to-[#6105A3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div>
                    <div className="p-4 rounded-2xl bg-[#FFD700]/15 text-[#6105A3] w-fit mb-6 group-hover:bg-[#6105A3] group-hover:text-[#FFD700] transition-all duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold text-[#241F24] mb-3 leading-snug group-hover:text-[#6105A3] transition-colors">
                      {gain.title}
                    </h3>

                    <p className="text-sm text-[#5F5660] leading-relaxed font-medium">
                      {gain.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}