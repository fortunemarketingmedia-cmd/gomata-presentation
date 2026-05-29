// app/about/page.tsx (or similar)
import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  Building2,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Users,
  Globe,
  HandshakeIcon,
  BarChart3,
  Clock,
  FileCheck,
  LucideIcon,
  IndianRupee,
  MapPinned,
  LucideBadgeCheck,
  LucideHandCoins,
  LucideScale,
  Award,
  CheckCircle2,
  LocateFixed,
  TrainFront,
  Bike,
  Plane,
  History,
  FileText,
  Timer,
  Share2,
  Hotel,
  School,
  Factory,
  Trees,
} from "lucide-react";

// Core Values Data
const coreValues = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Trust",
    description:
      "Built through decades of government service, ethical execution, and transparent investor relations.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Transparency",
    description:
      "Investor names on 7/12 land records, 100% cheque payments, and legal due diligence by 3 independent firms.",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Transformation",
    description:
      "Converting agricultural land into high-value urban assets through planned development and infrastructure.",
  },
];

// Key Investment Model Features
const investmentHighlights = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Land Pooling Concept",
    description:
      "Investors participate at the land acquisition stage, earning developer-level profits by pooling resources for 1-3 acre parcels.",
  },
  {
    icon: <IndianRupee className="w-8 h-8" />,
    title: "Structured Investment",
    description:
      "Total investment ₹39.7L with clear breakdown: ₹22L to landowner (incl. charges) + ₹17.7L to Gomata Vision (incl. GST).",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Direct Ownership",
    description:
      "Your name appears on the 7/12 ownership document, making this one of the most secure investment modules available.",
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "Phased Timeline",
    description:
      "Land registration in ~60 days → Development agreement ~30 days → Approvals 12-18 months → Completion ~3 years 9 months.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "High ROI Potential",
    description:
      "With NMIA operational and NAINA infrastructure expanding, land prices are projected to appreciate 2-3x in coming years.",
  },
  {
    icon: <HandshakeIcon className="w-8 h-8" />,
    title: "Flexible Exits",
    description:
      "Exit before sale deed or after CC. Refunds processed with 12% p.a. interest (after legal deductions).",
  },
];

// NAINA Advantages
const nainaAdvantages = [
  "Largest planned urban zone – 600+ sq. km around Navi Mumbai International Airport",
  "CIDCO-led, government-backed initiative ensuring transparency & investor confidence",
  "Rapid infrastructure: Metro, Expressways, ATAL Setu, JNPT, IT & Industrial Corridors",
  "Development zones: Aerocity, Educity, Medicity, Innovation Park, MMC",
];

// TPS-11 Specific Advantages
const tps11Advantages = [
  "Closest to NMIA influence zone – unmatched connectivity & appreciation",
  "6-Lane Highway to Atal Setu (MTHL) touches TPS-11",
  "Palaspa Phata – strategic tri-junction connecting Goa, Pune & Mumbai",
  "16 Lane Virar-Alibaug Multi Modal Corridor with proposed metro station passes through",
  "Local villagers & politicians actively coordinate with CIDCO for inclusive development",
  "Proposed Aero City and Edu City are located nearby",
];

// Leadership Cards (integrated from your journey page)
const leadershipCards = [
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Former Project Director – NHAI",
    subtitle: "Maharashtra & Goa • Ministry of Road Transport, Government of India",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Real Estate Visionary",
    subtitle: "Indradhanu Township (15+ lakh sq. ft.) & Vrundavan Park",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Founder – Monarch Group",
    subtitle: "Building excellence in hospitality with customer-first experiences",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Educational Leadership",
    subtitle: "Director of Indian Model School & Indo British Global School",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Investment Coach",
    subtitle: "Trusted advisor for TPS-11, NAINA area, farmers & village communities",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Community Builder",
    subtitle: "Empowering people through infrastructure, strategy, and mentorship",
  },
];

// Track Record Items
const trackRecord = [
  {
    title: "Multi-Industry Operations",
    description: "Successfully managing hotels and schools, showcasing diverse leadership.",
  },
  {
    title: "Credibility & Trust",
    description: "Trusted by government and communities for ethical, result-driven execution.",
  },
  {
    title: "Indradhanu Township",
    description: "Delivered over 15 lakh sq. ft. of integrated township projects in Solapur.",
  },
  {
    title: "Ground-Level Advisory",
    description: "Advising TPS-11 villages with on-ground execution and transparency.",
  },
];

// Investment Models for Different Investors
const investmentModels = [
  {
    title: "Combined Flat Ownership",
    description: "Fractional/shared ownership for middle-class investors.",
  },
  {
    title: "Agricultural Land Investment",
    description: "Secure plots with growth potential.",
  },
  {
    title: "Flats & Commercial Spaces",
    description: "Within future TPS-11 urban townships.",
  },
  {
    title: "Joint Ventures",
    description: "For HNIs & institutional investors with Gomata Vision LLP.",
  },
];

// Investor Benefits
const investorBenefits = [
  "Early-bird pricing for maximum value gain",
  "Assured appreciation in high-demand zones",
  "Professional management of land titles & development",
  "Transparent legal framework with RERA compliance",
  "Planned exit strategy: resale, rental, or JV models",
];

// New FAQ Section Data
const faqs = [
  {
    q: "Why is it called 'Boarding Pass to Wealth Creation'?",
    a: "Because this opportunity can give you the biggest Financial Leap of your lifetime — a chance to step out of the rat race through Strategic Real Estate Investment around the newly inaugurated Navi Mumbai International Airport. Airports are not built often, and such once-in-a-generation urban expansions rarely repeat. The NAINA Land Pooling Scheme makes this opportunity unique and high-return.",
  },
  {
    q: "What is the Land Pooling Scheme?",
    a: "In simple terms, you Buy Land, and as it is under the Town Planning Scheme (TPS) you receive 40% Final Plot (FP) with 2.5 FSI — fully legalized, developed, and ready for construction or resale. This system ensures planned growth, high value appreciation, and transparency, backed by CIDCO and the Government of Maharashtra.",
  },
  {
    q: "Why NAINA (CIDCO)?",
    a: "NAINA is the planned Smart city being developed around the Navi Mumbai International Airport, designed to handle 9 crore passengers per year. It includes 150+ villages, with 23 villages already notified in Phase 1, spread along the Mumbai–Pune Expressway, NH-66 (Goa Highway), and NH-4 (Bengaluru Highway). An entire new city is being built around this airport.",
  },
  {
    q: "Why TPS 11 from NAINA?",
    a: "Out of all 12 Town Planning Schemes, TPS 11 stands out as the crown jewel because it is the closest TPS from Airport (less than 5kms), has a 6 Lane Highway to Atal Setu (MTHL) touching it, high-rise projects are already present, and the 16 Lane Virar-Alibaug Multi Modal Corridor with a proposed metro station passes through it.",
  },
  {
    q: "Why only Vikas Koli (Gomata Vision LLP)?",
    a: "Because behind this opportunity stands a visionary leader with 28+ years of national-level experience in infrastructure and development, including former Project Director at NHAI, former Officer at Airports Authority of India, and Strategic Contributor to NAINA TPS-11 Land Pooling Module. Mr. Vikas Koli has designed and mentored several wealth-creation models around national infrastructure projects.",
  },
  {
    q: "What is the minimum ticket size of Investment?",
    a: "Each investor participates with an investment of just ₹39.70 lakhs incl Stamp Duty, Reg, Legal Charges and GST (100% Cheque Payments). Breakup: ₹22,00,000 to Landowner (₹20L + ₹2L charges) and ₹17,70,000 to Gomata Vision LLP (₹15L + ₹2.7L GST).",
  },
  {
    q: "What is the expected market value at handover?",
    a: "The estimated market value is expected to appreciate by approx 30% by the time of handover, with potential for 2-3x returns as the airport and surrounding infrastructure becomes fully operational by 2031.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F2D8] overflow-hidden">
      <Navbar />

      {/* ========== HERO SECTION with Mission/Vision ========== */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#422565]/5 via-[#F9F2D8] to-[#F9F2D8]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Gomata Vision LLP Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-[#2B1A0D] tracking-tight">
              <span className="text-[#A1268D]">Gomata</span> Vision LLP
            </h1>
            <p className="text-xl md:text-2xl text-[#5C4A3B] mt-4 font-light">
              Your Boarding Pass to Wealth Creation through Land Pooling
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Mission */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#EFE2C4] relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#F3C12F]/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#A1268D]/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-[#A1268D]" />
                </div>
                <h2 className="text-3xl font-bold text-[#2B1A0D]">Mission</h2>
                <p className="mt-4 text-xl leading-relaxed text-[#5C4A3B]">
                  Inclusive, sustainable, and profitable real estate development.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#EFE2C4] relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F3C12F]/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#F3C12F]/20 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-[#A1268D]" />
                </div>
                <h2 className="text-3xl font-bold text-[#2B1A0D]">Vision</h2>
                <p className="mt-4 text-xl leading-relaxed text-[#5C4A3B]">
                  Balancing farmer rights, urban growth, and investor returns.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Row */}
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 rounded-full bg-[#422565] text-white text-sm tracking-widest uppercase">
              Our Core Values
            </span>
            <p className="text-lg text-[#5C4A3B] mt-4">
              Trust • Transparency • Transformation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#EFE2C4] text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4 text-[#A1268D]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2B1A0D]">{value.title}</h3>
                <p className="mt-2 text-[#666666] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== YOUTUBE VIDEOS SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em]">Watch & Learn</span>
            <h2 className="mt-4 text-5xl font-black text-[#2B1A0D]">Why Invest in TPS-11, NAINA?</h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              Hear directly from our leadership about this transformative opportunity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/N6AG1g4DBO0" 
                title="NAINA TPS-11 Investment Opportunity"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/zBb1cJqPCsc" 
                title="Gomata Vision LLP - Land Pooling Concept"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* NEW: Additional Video & Facebook Post */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/AXsb1fpaWng" 
                title="Additional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-[#F9F2D8] flex items-center justify-center p-6">
              <div className="text-center">
                <Globe className="w-12 h-12 text-[#A1268D] mx-auto mb-4" />
                <p className="font-bold text-[#2B1A0D] mb-2">Facebook Post</p>
                <p className="text-sm text-[#5C4A3B] mb-4">Transforming Maharashtra's Healthcare and Education Landscape</p>
                <a 
                  href="https://www.facebook.com/devendra.fadnavis/posts/transforming-maharashtras-healthcare-and-education-landscapechaired-a-review-mee/1561692341980657/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-[#A1268D] text-white font-semibold rounded-full hover:bg-[#8a1f78] transition"
                >
                  View on Facebook →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY NAINA SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em]">
              Strategic Advantage
            </span>
            <h2 className="mt-4 text-5xl font-black text-[#2B1A0D]">Why NAINA?</h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              The Navi Mumbai Airport Influence Notified Area (NAINA) - A planned smart city for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {nainaAdvantages.map((adv, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#F3C12F] flex-shrink-0 mt-1" />
                  <p className="text-[#333333] text-lg">{adv}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#422565]/10 flex items-center justify-center p-8">
              <div className="text-center">
                <Plane className="w-24 h-24 text-[#A1268D] mx-auto mb-4" />
                <p className="font-bold text-[#2B1A0D]">NMIA - Operational Now</p>
                <p className="text-sm text-[#666]">9 crore passengers per year capacity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY TPS-11 SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em]">
              Prime Location
            </span>
            <h2 className="mt-4 text-5xl font-black text-[#2B1A0D]">Why Only TPS-11?</h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              The crown jewel of all 12 Town Planning Schemes in NAINA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tps11Advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-[#F9F2D8] rounded-2xl p-6 shadow-md border border-[#EFE2C4] flex gap-4"
              >
                <LocateFixed className="w-6 h-6 text-[#A1268D] flex-shrink-0 mt-1" />
                <p className="text-[#333333]">{adv}</p>
              </div>
            ))}
          </div>

          {/* Current Plot Card */}
          <div className="mt-12 bg-gradient-to-r from-[#422565] to-[#A1268D] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold">Current Investment Plot (TPS-11)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <p className="text-sm opacity-80">Village</p>
                <p className="font-semibold">Vadavali Turmale</p>
              </div>
              <div>
                <p className="text-sm opacity-80">FP No.</p>
                <p className="font-semibold">TPS 11 - 585</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Size (sq.ft.)</p>
                <p className="font-semibold">57,522</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Land (Guntha)</p>
                <p className="font-semibold">133.6</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2">
              <TrainFront className="w-5 h-5" />
              <p className="text-sm">📍 Located less than 500 meters from the proposed MMC Metro Station</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INVESTMENT STRUCTURE ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em]">
              Wealth Creation
            </span>
            <h2 className="mt-4 text-5xl font-black text-[#2B1A0D]">
              Developer-Level Profit Participation
            </h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              Land Pooling Concept by Gomata Vision LLP – Invest at the land acquisition stage
              where maximum value creation begins.
            </p>
          </div>

          {/* Investment Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-[#F3C12F] p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-[#2B1A0D]">
              Total Investment: ₹39,70,000*
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="font-bold text-[#A1268D]">To Landowner</p>
                  <p className="text-2xl font-bold">₹20,00,000</p>
                  <p className="text-sm text-[#666]">+ ₹2,00,000 (SD + Reg + Legal)</p>
                </div>
                <div>
                  <p className="font-bold text-[#A1268D]">To Gomata Vision LLP</p>
                  <p className="text-2xl font-bold">₹15,00,000</p>
                  <p className="text-sm text-[#666]">+ ₹2,70,000 (18% GST)</p>
                </div>
              </div>
              <div className="bg-[#FFF7E7] p-5 rounded-xl">
                <p className="font-semibold">Payment Schedule (100% Cheque):</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>1️⃣ Booking (Immediate): ₹1,18,000 (incl. GST)</li>
                  <li>2️⃣ 7 days later: ₹5,90,000 (incl. GST)</li>
                  <li>3️⃣ Balance at Registration: ₹32,62,000</li>
                </ul>
                <div className="mt-4 p-3 bg-[#A1268D]/10 rounded-lg">
                  <p className="text-xs font-semibold">Bank Details:</p>
                  <p className="text-xs">GOMATA VISION LLP, HDFC Bank, Sec 15 Belapur</p>
                  <p className="text-xs">A/c: 50200106979590 | IFSC: HDFC0002860</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-[#666] border-t pt-6">
              ✅ Your name appears on the 7/12 ownership document – most secure investment module
            </div>
          </div>
        </div>
      </section>

      {/* ========== TIMELINE SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#2B1A0D]">Project Timeline</h2>
            <p className="text-[#5C4A3B]">Total duration: Approx. 5-6 years to completion</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-[#F9F2D8] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-[#A1268D] text-white flex items-center justify-center mx-auto mb-3 font-bold">1</div>
              <h3 className="font-bold">Land Registration</h3>
              <p className="text-sm text-[#666]">~60 Days</p>
              <p className="text-xs mt-2">Joint Sale Deed + Common 7/12</p>
            </div>
            <div className="bg-[#F9F2D8] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-[#A1268D] text-white flex items-center justify-center mx-auto mb-3 font-bold">2</div>
              <h3 className="font-bold">Development Agreement</h3>
              <p className="text-sm text-[#666]">~30 Days after Stage 1</p>
              <p className="text-xs mt-2">Gomata Estates LLP or Reputed Developer</p>
            </div>
            <div className="bg-[#F9F2D8] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-[#A1268D] text-white flex items-center justify-center mx-auto mb-3 font-bold">3</div>
              <h3 className="font-bold">Approvals & Permissions</h3>
              <p className="text-sm text-[#666]">12-18 Months</p>
              <p className="text-xs mt-2">CC, EC, RERA, CIDCO, Property Card</p>
            </div>
            <div className="bg-[#F9F2D8] p-6 rounded-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-[#A1268D] text-white flex items-center justify-center mx-auto mb-3 font-bold">4</div>
              <h3 className="font-bold">Construction & Possession</h3>
              <p className="text-sm text-[#666]">~3 Years 9 Months</p>
              <p className="text-xs mt-2">Upto 15 Storey Building</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INVESTMENT MODELS & BENEFITS ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-[#2B1A0D]">Unique Investment Models</h2>
              <div className="mt-8 space-y-4">
                {investmentModels.map((model, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 shadow-md">
                    <h3 className="font-bold text-[#A1268D]">{model.title}</h3>
                    <p className="text-[#666]">{model.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-[#2B1A0D]">Investor Benefits</h2>
              <div className="mt-8 bg-white rounded-3xl p-8 shadow-xl">
                <ul className="space-y-4">
                  {investorBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <LucideBadgeCheck className="w-6 h-6 text-[#F3C12F]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t text-center">
                  <p className="font-bold text-[#A1268D]">Planned Exit Strategy</p>
                  <p className="text-sm">Resale • Rental • JV Models</p>
                  <p className="text-xs text-[#666] mt-2">Exit before sale deed or after CC with 12% p.a. interest on net balance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INCLUSIVE DEVELOPMENT APPROACH ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#2B1A0D]">Inclusive Development Approach</h2>
            <p className="text-[#5C4A3B] mt-2">Benefiting all stakeholders in the ecosystem</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#F9F2D8] rounded-2xl">
              <Users className="w-12 h-12 mx-auto text-[#A1268D]" />
              <h3 className="text-xl font-bold mt-4">For Farmers</h3>
              <ul className="mt-3 text-[#666] space-y-1">
                <li>Secure land rights</li>
                <li>Better compensation</li>
                <li>Joint ventures</li>
                <li>Social infrastructure</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-[#F9F2D8] rounded-2xl">
              <BarChart3 className="w-12 h-12 mx-auto text-[#A1268D]" />
              <h3 className="text-xl font-bold mt-4">For Investors</h3>
              <ul className="mt-3 text-[#666] space-y-1">
                <li>Clear titles on 7/12</li>
                <li>Professional approvals</li>
                <li>Phased exits with 12% interest</li>
                <li>High appreciation potential</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-[#F9F2D8] rounded-2xl">
              <Landmark className="w-12 h-12 mx-auto text-[#A1268D]" />
              <h3 className="text-xl font-bold mt-4">For Government</h3>
              <ul className="mt-3 text-[#666] space-y-1">
                <li>Smooth execution</li>
                <li>Community support</li>
                <li>Planned urban growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRACK RECORD & CREDENTIALS ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#FCFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em]">
              Track Record
            </span>
            <h2 className="mt-4 text-5xl font-black text-[#2B1A0D]">Credentials That Matter</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackRecord.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-[#EFE2C4]">
                <h3 className="font-bold text-xl text-[#2B1A0D]">{item.title}</h3>
                <p className="mt-2 text-[#666] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em]">
              Leadership
            </span>
            <h2 className="mt-4 text-5xl font-black text-[#2B1A0D]">
              Led by Mr. Vikas Koli
            </h2>
            <p className="max-w-3xl mx-auto mt-6 text-lg text-[#5C4A3B]">
              Civil Engineer • Former NHAI Project Director • Former AAI Official • Real Estate Visionary • Wealth Creation Mentor
            </p>
            <p className="text-[#A1268D] font-semibold mt-2">28+ Years of National-Level Experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-lg border border-[#EFE2C4] hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FDD91D] to-[#DBAB26] flex items-center justify-center text-[#422565]">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#2B1A0D]">{card.title}</h3>
                <p className="mt-2 text-[#666]">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em]">FAQs</span>
            <h2 className="mt-4 text-4xl font-black text-[#2B1A0D]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#F9F2D8] rounded-2xl p-6 open:bg-white transition-all border border-[#EFE2C4]">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-bold text-[#2B1A0D] text-lg pr-4">{faq.q}</h3>
                  <span className="text-[#A1268D] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-[#5C4A3B] leading-relaxed pl-2 border-l-4 border-[#F3C12F]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

<section className="branding-banner-section flex justify-center py-10">
  <Image
    src="/images/banner/banner.png"
    alt="Branding Banner"
    width={1200}
    height={250}
    className="branding-banner-image w-[85%] h-auto rounded-2xl object-contain"
  />
</section>
      {/* ========== QUOTE + CTA ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#422565] via-[#5B2B7A] to-[#A1268D] px-10 md:px-20 py-20 shadow-2xl">
            <div className="relative text-center">
              <p className="text-3xl md:text-4xl font-bold text-white italic">
                "Even a correct decision is wrong when it is too late."
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                <a
                  href="tel:+91 9892784379"
                  className="inline-block px-8 py-3 bg-[#F3C12F] text-[#2B1A0D] font-bold rounded-full hover:bg-[#E0A800] transition"
                >
                  📞 Contact - +91 9892784379
                </a>
              </div>
              <p className="mt-8 text-[#F9F2D8] text-sm">
                Submit PAN, Aadhaar + ₹1.18L Booking Fee to lock your deal.
              </p>
              <p className="mt-2 text-[#F9F2D8] text-xs">
                *Terms and conditions apply. Investment subject to risk. 100% Cheque Payments only.
              </p>
            </div>
          </div>
        </div>
      </section>
         
      {/* Footer */}
      <footer className="text-center py-8 text-[#666] text-sm border-t border-[#EFE2C4] bg-[#F9F2D8]">
        <p>Gomata Vision LLP • 707 B-Wing The Great Eastern Summit, Plot No. 66, Sector 15, CBD Belapur, Navi Mumbai - 400614</p>
        <p className="mt-2">www.gomatavision.com | CIN: ABC-1234 | RERA Registered</p>
        <p className="mt-4 text-xs">Disclaimer: The information provided here is for educational and illustrative purposes only. Investments are subject to risk. Terms & Conditions apply.*</p>
      
      </footer>
    </main>
  );
}