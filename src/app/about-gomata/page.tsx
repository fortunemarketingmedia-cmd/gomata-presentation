"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  Users,
  HandshakeIcon,
  CheckCircle2,
  Eye,
  Target,
  Rocket,
  FileCheck,
  Quote,
  Layers,
  Map,
  BadgeCheck,
  ExternalLink,
  TrainFront,
} from "lucide-react";

// Company Values Data
const companyValues = [
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

// Why Choose Gomata Vision LLP
const whyChooseUs = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "High-Growth Locations",
    description:
      "Invest in premium plots within CIDCO's NAINA zone, strategically positioned near Navi Mumbai International Airport and future infrastructure hubs.",
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Legally Transparent Investments",
    description:
      "Every project is backed by clear documentation, joint ownership structures, and government-aligned approvals to protect your investment.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert-Led Development",
    description:
      "With decades of infrastructure and real estate experience, our leadership ensures every plot is primed for maximum appreciation and sustainable development.",
  },
  {
    icon: <HandshakeIcon className="w-8 h-8" />,
    title: "Hassle-Free Process",
    description:
      "From land selection to post-purchase support, we handle everything so you can invest with peace of mind and zero operational burden.",
  },
];

// Leadership Team Data
const leadershipTeam = [
  {
    name: "Vikas Koli",
    role: "Founder & Visionary",
    image: "/images/team/vikas.webp",
    description:
      "Distinguished civil engineer and real estate strategist with 28+ years' experience. Expertise in infrastructure, urban development, hospitality, education, and real estate. Former Director at National Highways Authority of India (Maharashtra & Goa). Experience with Airports Authority of India and Municipal Corporation of Thane City.",
  },
  {
    name: "Nitin Shahasane",
    role: "Founder & Land Acquisition",
    image: "/images/team/nitin.webp",
    description:
      "25+ years in land acquisition across Maharashtra. Specialist in Pen, Raigad, Navi Mumbai regions. Worked closely with Government of Maharashtra. Skilled in navigating complex acquisition processes.",
  },
  {
    name: "Mithun Shitkande",
    role: "Co-Founder & Liaison",
    image: "/images/team/mithun.webp",
    description:
      "16 years in liaison and land coordination. Region expertise: Panvel, Raigad, Alibaug, Pen. Proven track record in timely government approvals. Skilled in handling objections & legal frameworks.",
  },
  {
    name: "Yash Manohar Bhoir",
    role: "Co-Founder & Finance",
    image: "/images/team/yash.webp",
    description:
      "BMS graduate with a specialization in Finance. Strategic business & finance planning, investment structure optimization, risk assessment & management, financial modeling & projections.",
  },
];

// Official Social Media Links
const socialLinks = [
  {
    name: "Instagram",
    handle: "@gomata_vision",
    description:
      "Follow our latest project updates, real estate insights, site visits, and investor-focused content.",
    href: "https://www.instagram.com/gomata_vision/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    handle: "Gomata Vision LLP",
    description:
      "Stay connected for company announcements, educational posts, project highlights, and community updates.",
    href: "https://www.facebook.com/61588854754892/",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    handle: "Gomata Vision LLP",
    description:
      "Explore professional updates, infrastructure insights, company milestones, and business opportunities.",
    href: "https://in.linkedin.com/company/gomata-vision-llp",
    icon: FaLinkedinIn,
  },
];

// Core Services / Offerings
const offerings = [
  {
    title: "Land Pooling Schemes",
    description:
      "Investors participate at the land acquisition stage, earning developer-level profits by pooling resources for 1-3 acre parcels.",
  },
  {
    title: "Joint Development Ventures",
    description:
      "Partner with us for large-scale residential and commercial developments in high-growth NAINA zones.",
  },
  {
    title: "Real Development Advisory",
    description:
      "Strategic guidance for HNIs, institutions, and individuals looking to maximize returns in emerging real estate corridors.",
  },
  {
    title: "End-to-End Project Management",
    description:
      "From land identification to legal approvals and development, we manage every step of the investment lifecycle.",
  },
];

// Gallery Images
const galleryImages = [
  { id: 1, src: "/images/gomata/cabin.webp", alt: "Cabin", size: "large" },
  {
    id: 2,
    src: "/images/gomata/office-2.webp",
    alt: "Conference Room",
    size: "medium",
  },
  {
    id: 3,
    src: "/images/gomata/office-1.webp",
    alt: "Gomata Vision LLP Office Front View",
    size: "medium",
  },
  {
    id: 4,
    src: "/images/gomata/office-3.webp",
    alt: "Office Interior",
    size: "small",
  },
  {
    id: 5,
    src: "/images/gomata/sitting-area.webp",
    alt: "Sitting Area",
    size: "small",
  },
  {
    id: 6,
    src: "/images/gomata/event.webp",
    alt: "Company Event",
    size: "large",
  },
  {
    id: 7,
    src: "/images/gomata/office-4.webp",
    alt: "Reception Area",
    size: "medium",
  },
  {
    id: 8,
    src: "/images/gomata/office-5.webp",
    alt: "Work Space",
    size: "small",
  },
];

// Enhanced KPI Schema Array
const stats = [
  {
    value: "28+",
    label: "Years Experience",
    detail: "Combined leadership in elite infrastructure developments",
    icon: TrendingUp,
  },
  {
    value: "15+",
    label: "Lakh Sq. Ft.",
    detail: "Premium high-value township spaces delivered seamlessly",
    icon: Layers,
  },
  {
    value: "100%",
    label: "Transparent Execution",
    detail: "Verified via clear cheque records & instant 7/12 land data",
    icon: BadgeCheck,
  },
  {
    value: "23+",
    label: "Villages Covered",
    detail: "Strategic premium presence across active NAINA regions",
    icon: Map,
  },
];

// Testimonials / Quotes
const testimonials = [
  {
    quote:
      "Gomata Vision LLP's transparency and expertise gave me the confidence to invest in NAINA. The team's guidance throughout the process was exceptional.",
    author: "Rajesh Sharma",
    role: "Investor, TPS-11",
  },
  {
    quote:
      "The land pooling concept explained by Vikas Koli Sir is revolutionary. My investment is secured with clear documentation and 7/12 ownership.",
    author: "Priya Mehta",
    role: "First-time Investor",
  },
  {
    quote:
      "Professional, knowledgeable, and genuinely committed to investor success. Highly recommend Gomata Vision LLP for NAINA land investments.",
    author: "Amit Patil",
    role: "HNI Investor",
  },
];

// Investment Models Data
const investmentModels = [
  {
    title: "Land Pooling Scheme",
    description:
      "Invest at the land acquisition stage for 1-3 acre parcels alongside Gomata Vision LLP, capturing developer-level margins before infrastructure rollout.",
  },
  {
    title: "Joint Development (JV) Model",
    description:
      "Co-invest in high-density commercial, residential, and township projects in CIDCO's NAINA zone with structured profit-sharing ratios.",
  },
  {
    title: "Strategic Land Holding",
    description:
      "Acquire 100% clear-title, RERA-compliant land plots with individual 7/12 ownership entries near upcoming expressways and metro lines.",
  },
];

// Investor Benefits Data
const investorBenefits = [
  "Direct 7/12 Land Ownership Record in your name",
  "100% Cheque Transactions & Bank Escrow Security",
  "Legal Due Diligence by 3 Independent Top Law Firms",
  "High Multiplier Appreciation in CIDCO NAINA/TPS-11 Zone",
  "Hassle-Free Government Approval & Title Guarantee",
];

export default function AboutGomataPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* ========== HERO SECTION WITH BACKGROUND IMAGE ========== */}
      <section className="relative w-full min-h-[115vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gomataimg.webp"
            alt="Gomata Vision LLP Infrastructure Development Landscape"
            fill
            priority
            unoptimized
            className="object-cover scale-105"
          />
        </div>
      </section>

      {/* ========== HIGH-END PREMIUM KPI CARDS SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 -mt-12 md:-mt-16 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="relative group overflow-hidden bg-white rounded-2xl p-6 border border-[#C8A2C8]/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Subtle Interactive Card Accent Glow */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#6105A3] to-[#C8A2C8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-start justify-between">
                    <div>
                      <span className="block text-4xl md:text-5xl font-black text-[#6105A3] tracking-tight group-hover:text-[#6105A3]/80 transition-colors duration-300">
                        {stat.value}
                      </span>
                      <span className="block text-base font-bold text-[#241F24] mt-1 tracking-wide">
                        {stat.label}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#C8A2C8]/18 text-[#6105A3] group-hover:bg-[#6105A3] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#C8A2C8]/20">
                    <p className="text-xs text-[#5F5660] leading-relaxed font-medium">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== VISION & MISSION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#C8A2C8]/30 relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C8A2C8]/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#6105A3]/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#6105A3]" />
                </div>
                <h2 className="text-3xl font-bold text-[#241F24]">
                  Our Vision
                </h2>
                <p className="mt-4 text-xl leading-relaxed text-[#5F5660]">
                  To be India's leading real estate partner, turning dreams into
                  sustainable developments built on trust, innovation, and
                  lasting relationships.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#C8A2C8]/30 relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#C8A2C8]/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#C8A2C8]/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#6105A3]" />
                </div>
                <h2 className="text-3xl font-bold text-[#241F24]">
                  Our Mission
                </h2>
                <p className="mt-4 text-xl leading-relaxed text-[#5F5660]">
                  To offer transparent, tailored real estate solutions that
                  empower informed investment decisions and long-term wealth
                  creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.3em] text-2xl">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
              Core Values
            </h2>
            <p className="mt-4 text-lg text-[#5F5660]  mx-auto">
              The pillars that guide every decision and every development we
              undertake
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-[#C8A2C8]/15 rounded-2xl p-6 border border-[#C8A2C8]/30 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4 text-[#6105A3]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#241F24]">
                  {value.title}
                </h3>
                <p className="mt-2 text-[#5F5660] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] text-2xl font-semibold uppercase tracking-[0.2em]">
              Why Gomata Vision LLP
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
              Your Trusted Partner in Growth
            </h2>
            <p className="mt-4 text-lg text-[#5F5660]  mx-auto">
              Discover what makes us the preferred choice for land investments
              in NAINA region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#C8A2C8]/30 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C8A2C8]/20 to-[#6105A3]/20 flex items-center justify-center text-[#6105A3] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#241F24]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#5F5660] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT WE OFFER ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((offer, idx) => (
              <div
                key={idx}
                className="bg-[#C8A2C8]/15 rounded-2xl p-6 border border-[#C8A2C8]/30 flex gap-4 items-start hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#6105A3]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#6105A3]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#241F24]">
                    {offer.title}
                  </h3>
                  <p className="mt-1 text-[#5F5660]">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY / COLLAGE SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.3em] text-2xl">
              Our Space
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
              A Glimpse Into Gomata Vision LLP
            </h2>
            <p className="mt-4 text-lg text-[#5F5660]  mx-auto">
              Step inside our workspace where vision meets action, and
              relationships are built on trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            <div className="sm:col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white font-medium">{galleryImages[0].alt}</p>
              </div>
            </div>

            {galleryImages.slice(1, 5).map((img) => (
              <div
                key={img.id}
                className="relative overflow-hidden rounded-2xl shadow-lg group h-full min-h-[200px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 row-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white font-medium">{galleryImages[5].alt}</p>
              </div>
            </div>

            {galleryImages.slice(6, 8).map((img) => (
              <div
                key={img.id}
                className="relative overflow-hidden rounded-2xl shadow-lg group h-full min-h-[200px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
              Led by Visionaries. Built on Experience.
            </h2>
            <p className="mt-4 text-lg text-[#5F5660]  mx-auto">
              A team with decades of combined expertise in infrastructure, land
              acquisition, finance, and government liaison
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white border border-[#C8A2C8]/30 hover:border-[#6105A3] shadow-lg transition-all duration-500"
              >
                <div className="relative h-[520px] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241F24]/90 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#C8A2C8] font-medium mb-3">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          
          {/* Current Plot Card */}
          <div className="mt-12 bg-gradient-to-r from-[#6105A3] to-[#6105A3] rounded-3xl p-8 text-white">
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
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">
              Wealth Creation
            </span>
            <h2 className="mt-4 text-5xl font-black text-[#241F24]">
              Developer-Level Profit Participation
            </h2>
            <p className="mt-4 text-lg text-[#5F5660] mx-auto">
              Land Pooling Concept by Gomata Vision LLP – Invest at the land acquisition stage
              where maximum value creation begins.
            </p>
          </div>

          {/* Investment Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-[#6105A3] p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-[#241F24]">
              Total Investment: ₹39,70,000*
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="font-bold text-[#6105A3]">To Landowner</p>
                  <p className="text-2xl font-bold text-black">₹20,00,000</p>
                  <p className="text-sm text-[#5F5660]">+ ₹2,00,000 (SD + Reg + Legal)</p>
                </div>
                <div>
                  <p className="font-bold text-[#6105A3]">To Gomata Vision LLP</p>
                  <p className="text-2xl font-bold text-black">₹15,00,000</p>
                  <p className="text-sm text-[#5F5660]">+ ₹2,70,000 (18% GST)</p>
                </div>
              </div>
              <div className="bg-[#6105A3] p-5 rounded-xl text-white">
                <p className="font-semibold text-white">Payment Schedule (100% Cheque):</p>
                <ul className="mt-3 space-y-2 text-sm text-white/90">
                  <li>1️⃣ Booking (Immediate): ₹1,18,000 (incl. GST)</li>
                  <li>2️⃣ 7 days later: ₹5,90,000 (incl. GST)</li>
                  <li>3️⃣ Balance at Registration: ₹32,62,000</li>
                </ul>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs font-semibold text-white">Bank Details:</p>
                  <p className="text-xs text-white/90">Gomata Vision LLP, HDFC Bank, Sec 15 Belapur</p>
                  <p className="text-xs text-white/90">A/c: 50200106979590 | IFSC: HDFC0002860</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-[#5F5660] border-t border-[#C8A2C8]/20 pt-6">
              ✅ Your name appears on the 7/12 ownership document – most secure investment module
            </div>
          </div>
        </div>
      </section>

      {/* ========== INVESTMENT MODELS & BENEFITS ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col h-full">
              <h2 className="text-3xl text-center font-black text-[#241F24]">Unique Investment Models</h2>
              <div className="mt-8 space-y-4 flex-1 flex flex-col justify-between">
                {investmentModels.map((model, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 shadow-md border border-[#C8A2C8]/30 flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-[#6105A3]">{model.title}</h3>
                    <p className="text-[#5F5660] text-sm md:text-base mt-1">{model.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-black text-center text-[#241F24]">Investor Benefits</h2>
              <div className="mt-8 bg-[#6105A3] rounded-3xl p-8 shadow-xl text-white flex-1 flex flex-col justify-between">
                <ul className="space-y-5">
                  {investorBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <BadgeCheck className="w-6 h-6 text-[#C8A2C8] flex-shrink-0" />
                      <span className="text-sm md:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <p className="font-bold text-[#FFFFFF] text-lg">Planned Exit Strategy</p>
                  <p className="text-sm opacity-90 mt-1">Resale • Rental • JV Models</p>
                  <p className="text-xs text-[#FFFFFF] mt-3 leading-relaxed opacity-75">Exit before sale deed or after CC with 12% p.a. interest on net balance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="branding-banner-section flex justify-center py-10">
        <Image
          src="/images/banner/banner.webp"
          alt="Branding Banner"
          width={1200}
          height={250}
          className="branding-banner-image w-[85%] h-auto rounded-2xl object-contain"
        />
      </section>
      {/* ========== SOCIAL MEDIA SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">
              Connect With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
              Follow Gomata Vision LLP
            </h2>
            <p className="mt-4 text-lg text-[#5F5660] max-w-3xl mx-auto">
              Stay updated with our latest projects, real estate insights,
              company news, and investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Gomata Vision LLP on ${social.name}`}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-[#C8A2C8]/30 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#6105A3] transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6105A3] to-[#C8A2C8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#6105A3]/10 flex items-center justify-center text-[#6105A3] group-hover:bg-[#6105A3] group-hover:text-white transition-colors duration-300">
                      <SocialIcon className="w-8 h-8" />
                    </div>

                    <ExternalLink className="w-5 h-5 text-[#8A7F8B] group-hover:text-[#6105A3] transition-colors duration-300" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#241F24]">
                    {social.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#6105A3]">
                    {social.handle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5F5660]">
                    {social.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#6105A3]">
                    Visit Profile
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FOUNDER'S NOTE / QUOTE ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#6105A3] via-[#6105A3]/60 to-[#6105A3] px-10 md:px-20 py-20 shadow-2xl">
            <div className="relative text-center">
              <Quote className="w-14 h-14 text-white mx-auto mb-6 opacity-80" />
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                "Even a correct decision is
                <span className="text-[#FFD700] text-style-Italic">
                  <i> wrong </i>
                </span>
                when it is
                <span className="text-[#FFD700] text-style-Italic">
                  <i> too late</i>
                </span>
                .
                <br />
                At Gomata Vision LLP, we help you make the
                <span className="text-[#FFD700] text-style-Italic">
                  <i> right decision </i>
                </span>
                at the
                <span className="text-[#FFD700] text-style-Italic">
                  <i> right time</i>
                </span>
                ."
              </p>
              <p className="mt-6 text-white/90 text-xl">
                — Vikas Koli, Founder
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
