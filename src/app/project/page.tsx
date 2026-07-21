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
  LayoutGrid,
  ExternalLink,
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
      "Total investment ₹39.7L with clear breakdown: ₹22L to landowner (incl. charges) + ₹17.7L to Gomata Vision LLP (incl. GST).",
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
  "Largest planned urban zone – 600+ sq km approximately around Navi Mumbai International Airport.",
  "CIDCO-led, government-backed initiative ensuring transparency & investor confidence.",
  "Rapid infrastructure: Metro, Expressways, ATAL Setu, JNPT, IT & Industrial Corridors.",
  "Development zones: Aerocity, Educity, Medicity, Innovation Park, MMC.",
  "Maharashtra's most ambitious initiative: A rare opportunity to build an entirely new planned city around the upcoming Navi Mumbai International Airport.",
  "Massive regional scale: Conceptualized in 2013, the smart city planning zone covers approximately 240 sq. km across 92 notified villages.",
  "Future-ready urban ecosystem: Transforming rural land into high-value residential, commercial, and industrial corridors.",
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

// TPS-11 Premium Card Layout Data
const tps11Cards = [
  {
    title: "Transit & Connectivity",
    icon: <MapPinned className="w-7 h-7" />,
    items: [
      {
        icon: <LocateFixed className="w-5 h-5" />,
        label: "NH-66 Mumbai–Goa Highway",
        value: "500 m / 2 mins",
      },
      {
        icon: <TrainFront className="w-5 h-5" />,
        label: "Panvel Railway Station",
        value: "5 km / 15 mins",
      },
      {
        icon: <Plane className="w-5 h-5" />,
        label: "Navi Mumbai International Airport",
        value: "10 km / 25 mins",
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        label: "Atal Setu via Chirle Interchange",
        value: "25 km / 40 mins",
      },
    ],
  },
  {
    title: "Regional Growth Anchors",
    icon: <Building2 className="w-7 h-7" />,
    items: [
      {
        icon: <Landmark className="w-5 h-5" />,
        label: "Panvel Commercial & Administrative Hub",
        value: "5 km / 15 mins",
      },
      {
        icon: <Factory className="w-5 h-5" />,
        label: "Taloja MIDC Industrial Cluster",
        value: "16 km / 30 mins",
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        label: "CBD Belapur Business District",
        value: "17 km / 30 mins",
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        label: "JNPA Port & Logistics Hub",
        value: "25 km / 40 mins",
      },
    ],
  },
  {
    title: "Tourist Spots",
    icon: <Trees className="w-7 h-7" />,
    items: [
      {
        icon: <Trees className="w-5 h-5" />,
        label: "Karnala Bird Sanctuary & Fort",
        value: "12 km / 20 mins",
      },
      {
        icon: <Award className="w-5 h-5" />,
        label: "Prabalgad & Kalavantin Durg Base",
        value: "18 km / 35 mins",
      },
      {
        icon: <Globe className="w-5 h-5" />,
        label: "Gadeshwar Dam & Lake",
        value: "22 km / 40 mins",
      },
      {
        icon: <MapPinned className="w-5 h-5" />,
        label: "Matheran Hill Station, Dasturi Point",
        value: "40 km / 70 mins",
      },
    ],
  },
  {
    title: "Proposed Developments",
    icon: <TrendingUp className="w-7 h-7" />,
    items: [
      {
        icon: <Bike className="w-5 h-5" />,
        label: "Virar–Alibaug Corridor",
        value: "near TPS-11 / Direct Access",
      },
      {
        icon: <School className="w-5 h-5" />,
        label: "Navi Mumbai International EduCity",
        value: "10 km / 25 mins",
      },
      {
        icon: <Plane className="w-5 h-5" />,
        label: "Navi Mumbai Aerocity",
        value: "10 km / 25 mins",
      },
      {
        icon: <LocateFixed className="w-5 h-5" />,
        label: "Atal Setu–Mumbai Pune Expressway Link",
        value: "14 km / 32 mins",
      },
    ],
  },
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
    a: "The estimated market value is expected to appreciate by approx 30% by the time of handover, with potential for 2-3x returns as the airport and surrounding infrastructure become fully operational by 2031.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      

      {/* ========== WHY NAINA SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">
              Strategic Advantages
            </span>
            <h2 className="mt-4 text-5xl font-black text-[#241F24]">Why NAINA?</h2>
            <p className="mt-4 text-lg text-[#5F5660]  mx-auto">
              The Navi Mumbai Airport Influence Notified Area (NAINA) - A planned smart city for the future
            </p>
          </div>


        

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 flex flex-col justify-center">
              {nainaAdvantages.map((adv, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#C8A2C8] flex-shrink-0 mt-1" />
                  <p className="text-[#241F24]/90 text-lg">{adv}</p>
                </div>
              ))}
            </div>
            
            {/* WHY NAINA INFRASTRUCTURE IMAGE CARD */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-[#C8A2C8]/30 bg-white flex items-center justify-center">
              <Image
                src="/images/whynaina.webp"
                alt="Why NAINA Infrastructure Development Plan"
                width={500}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

{/* ========== YOUTUBE VIDEOS SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">Watch & Learn</span>
            <h2 className="mt-4 text-5xl font-black text-[#241F24]">Voices That Matter</h2>
            <p className="mt-4 text-lg text-[#5F5660]  mx-auto">
              Hear directly from our leadership about this transformative opportunity
            </p>
          </div>
          {/* 2-COLUMN GRID FOR VIDEOS & CARDS */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* ROW 1: VIDEOS */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-white border border-[#C8A2C8]/30">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/AXsb1fpaWng" 
                title="World-Class EduCity in New Mumbai"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-white border border-[#C8A2C8]/30">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/cL4f3nYfx-8?si=iKBXR16XauGDBTUU" 
                title="Aerocity & EduCity in Mumbai 3.0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROJECT GALLERY IMAGES ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-[#C8A2C8]/30 bg-white">
              <Image
                src="/images/project/img1.webp"
                alt="Gomata Vision LLP Project Development Phase 1"
                width={900}
                height={600}
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-[#C8A2C8]/30 bg-white">
              <Image
                src="/images/project/img2.webp"
                alt="Gomata Vision LLP Project Development Phase 2"
                width={900}
                height={600}
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* ========== WHY TPS-11 SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-white overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none"
          style={{ backgroundImage: "url('/images/tps11.webp')" }}
        />
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl ">
              Prime Location
            </span>
            <h2 className="mt-4 text-5xl font-black text-[#241F24]">Why TPS-11?</h2>
            <p className="mt-4 text-2xl text-[#000000]  mx-auto">
              <b>The crown jewel of all 12 Town Planning Schemes in NAINA</b>
            </p>
          </div>

<div className="z-20 pt-8 pb-4 flex items-center justify-center w-full">
          <a
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-[#6105A3] font-extrabold text-sm md:text-base uppercase tracking-wider shadow-xl hover:bg-[#FFD700] hover:text-[#180828] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Interactive Map</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {tps11Cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] p-8 shadow-xl border border-[#C8A2C8]/30 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3.5 rounded-2xl bg-[#C8A2C8]/18 text-[#6105A3] flex items-center justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-black text-[#241F24] tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Items */}
                  <div className="flex flex-col">
                    {card.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between py-4 border-b border-[#C8A2C8]/20 last:border-b-0"
                      >
                        <div className="flex items-center gap-4 mr-4">
                          <div className="w-12 h-12 rounded-full bg-[#C8A2C8]/18 flex items-center justify-center text-[#6105A3] flex-shrink-0">
                            {item.icon}
                          </div>
                          <span className="font-semibold text-[17px] text-[#241F24] leading-snug">
                            {item.label}
                          </span>
                        </div>
                        <span className="font-bold text-[17px] text-[#6105A3] whitespace-nowrap">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
{/* ========== YOUTUBE VIDEOS SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">Testimonials</span>
            <h2 className="mt-4 text-5xl font-black text-[#241F24]">Real Experiences</h2>
            <p className="mt-4 text-lg text-[#5F5660]  mx-auto">
              Hear our testimonials from satisfied investors about this transformative opportunity
            </p>
          </div>
          {/* 2-COLUMN GRID FOR VIDEOS & CARDS */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* ROW 2: VIDEOS */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-white border border-[#C8A2C8]/30">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/N6AG1g4DBO0" 
                title="Navi Mumbai Smart City Infrastructure (Dummy)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-white border border-[#C8A2C8]/30">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/zBb1cJqPCsc" 
                title="Mr. Madhav Shenoy - Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      </div>
</section>
      
      {/* ========== QUOTE + CTA ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#6105A3] via-[#6105A3]/60 to-[#6105A3] px-10 md:px-20 py-20 shadow-2xl">
            <div className="relative text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">
                "Take your first step to wealth creation, book your boarding pass now."
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
                <a
                  href="tel:+91 9892784379"
                  className="inline-block px-8 py-3 bg-[#6105A3] text-white font-bold rounded-full hover:bg-[#75386E] transition shadow-lg"
                >
                  📞 Contact - +91 9892784379, +91 8097843535
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
         
      {/* Footer */}
      <footer className="text-center py-8 text-[#5F5660] text-sm border-t border-[#C8A2C8]/30 bg-[#C8A2C8]/15">
        <p>Gomata Vision LLP • 707 B-Wing The Great Eastern Summit, Plot No. 66, Sector 15, CBD Belapur, Navi Mumbai - 400614</p>
        <p className="mt-2">www.gomatavision.com | CIN: ABC-1234 | RERA Registered</p>
        <p className="mt-4 text-xs">Disclaimer: The information provided here is for educational and illustrative purposes only. Investments are subject to risk. Terms & Conditions apply.*</p>
      
      </footer>
    </main>
  );
}