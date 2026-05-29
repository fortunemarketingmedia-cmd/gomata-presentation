// app/about-gomata/page.tsx
"use client";

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
  Eye,
  Target,
  Rocket,
  HeartHandshake,
  Lightbulb,
  Briefcase,
  GraduationCap,
  User,
  UsersRound,
  Star,
  Quote,
  Phone,
  Mail,
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

// Why Choose Gomata Vision
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

// Leadership Team Data (Updated with correct image paths - no full Mac paths)
const leadershipTeam = [
  {
    name: "Vikas Koli",
    role: "Founder & Visionary",
    image: "/images/team/vikas.png",
    description:
      "Distinguished civil engineer and real estate strategist with 28+ years' experience. Expertise in infrastructure, urban development, hospitality, education, and real estate. Former Director at National Highways Authority of India (Maharashtra & Goa). Experience with Airports Authority of India and Municipal Corporation of Thane City.",
  },
  {
    name: "Nitin Shahasane",
    role: "Co-Founder & Land Acquisition",
    image: "/images/team/nitin.png",
    description:
      "25+ years in land acquisition across Maharashtra. Specialist in Pen, Raigad, Navi Mumbai regions. Worked closely with Government of Maharashtra. Skilled in navigating complex acquisition processes.",
  },
  {
    name: "Mithun Shitkande",
    role: "Co-Founder & Liaison",
    image: "/images/team/mithun.png",
    description:
      "16 years in liaison and land coordination. Region expertise: Panvel, Raigad, Alibaug, Pen. Proven track record in timely government approvals. Skilled in handling objections & legal frameworks.",
  },
  {
    name: "Yash Manohar Bhoir",
    role: "Co-Founder & Finance",
    image: "/images/team/yash.png",
    description:
      "BMS graduate with a specialization in Finance. Strategic business & finance planning, investment structure optimization, risk assessment & management, financial modeling & projections.",
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
    title: "Investment Advisory",
    description:
      "Strategic guidance for HNIs, institutions, and individuals looking to maximize returns in emerging real estate corridors.",
  },
  {
    title: "End-to-End Project Management",
    description:
      "From land identification to legal approvals and development, we manage every step of the investment lifecycle.",
  },
];

// Gallery Images (Placeholder data - Replace with actual image paths)
const galleryImages = [
  { id: 1, src: "/images/gomata/office-1.jpg", alt: "Gomata Vision Office Front View", size: "large" },
  { id: 2, src: "/images/gomata/office-2.jpg", alt: "Conference Room", size: "medium" },
  { id: 3, src: "/images/gomata/cabin.jpg", alt: "Cabin", size: "medium" },
  { id: 4, src: "/images/gomata/office-3.jpg", alt: "Office Interior", size: "small" },
  { id: 5, src: "/images/gomata/sitting-area.jpg", alt: "Sitting Area", size: "small" },
  { id: 6, src: "/images/gomata/event.jpg", alt: "Company Event", size: "large" },
  { id: 7, src: "/images/gomata/office-4.jpg", alt: "Reception Area", size: "medium" },
  { id: 8, src: "/images/gomata/office-5.jpg", alt: "Work Space", size: "small" },
];

// Stats
const stats = [
  { value: "28+", label: "Years of Combined Leadership Experience" },
  { value: "15+", label: "Lakh Sq. Ft. Township Delivered" },
  { value: "100%", label: "Cheque Payments & Transparent Dealings" },
  { value: "23+", label: "Villages Covered in NAINA Region" },
];

// Testimonials / Quotes
const testimonials = [
  {
    quote:
      "Gomata Vision's transparency and expertise gave me the confidence to invest in NAINA. The team's guidance throughout the process was exceptional.",
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
      "Professional, knowledgeable, and genuinely committed to investor success. Highly recommend Gomata Vision for NAINA land investments.",
    author: "Amit Patil",
    role: "HNI Investor",
  },
];

export default function AboutGomataPage() {
  return (
    <main className="min-h-screen bg-[#F9F2D8] overflow-hidden">
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#422565]/10 via-[#F9F2D8] to-[#F9F2D8]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#F3C12F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A1268D]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#422565]/10 backdrop-blur mb-6">
            <Building2 className="w-4 h-4 text-[#A1268D]" />
            <span className="text-sm font-semibold text-[#A1268D] uppercase tracking-wide">
              Your Trusted Partner
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-[#A1268D]">Gomata</span>
            <span className="text-[#2B1A0D]"> Vision</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5C4A3B] mt-6 max-w-3xl mx-auto">
            Vision to Build Dreams — Transforming Land into Legacy
          </p>
          <p className="text-lg text-[#5C4A3B] mt-4 max-w-2xl mx-auto">
            Founded by Mr. Vikas Koli, Gomata Vision is a forward-thinking real estate company
            focused on high-return land development projects within CIDCO's ambitious NAINA plan.
          </p>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl p-6 border border-[#EFE2C4]">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 border-r last:border-r-0 border-[#EFE2C4]">
                <p className="text-3xl md:text-4xl font-bold text-[#A1268D]">{stat.value}</p>
                <p className="text-[#5C4A3B] text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VISION & MISSION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#EFE2C4] relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#F3C12F]/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#A1268D]/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#A1268D]" />
                </div>
                <h2 className="text-3xl font-bold text-[#2B1A0D]">Our Vision</h2>
                <p className="mt-4 text-xl leading-relaxed text-[#5C4A3B]">
                  To be India's leading real estate partner, turning dreams into sustainable developments
                  built on trust, innovation, and lasting relationships.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-[32px] p-10 shadow-xl border border-[#EFE2C4] relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F3C12F]/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#F3C12F]/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#A1268D]" />
                </div>
                <h2 className="text-3xl font-bold text-[#2B1A0D]">Our Mission</h2>
                <p className="mt-4 text-xl leading-relaxed text-[#5C4A3B]">
                  To offer transparent, tailored real estate solutions that empower informed investment
                  decisions and long-term value creation.
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
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              Core Values
            </h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              The pillars that guide every decision and every development we undertake
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-[#F9F2D8] rounded-2xl p-6 border border-[#EFE2C4] text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4 text-[#A1268D]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2B1A0D]">{value.title}</h3>
                <p className="mt-2 text-[#5C4A3B] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Why Gomata Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              Your Trusted Partner in Growth
            </h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              Discover what makes us the preferred choice for land investments in NAINA region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#EFE2C4] hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F3C12F]/20 to-[#A1268D]/20 flex items-center justify-center text-[#A1268D] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2B1A0D]">{item.title}</h3>
                <p className="mt-3 text-[#5C4A3B] text-sm leading-relaxed">
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
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((offer, idx) => (
              <div
                key={idx}
                className="bg-[#F9F2D8] rounded-2xl p-6 border border-[#EFE2C4] flex gap-4 items-start hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#A1268D]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#A1268D]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B1A0D]">{offer.title}</h3>
                  <p className="mt-1 text-[#5C4A3B]">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY / COLLAGE SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Our Space
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              A Glimpse Into Gomata Vision
            </h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              Step inside our workspace where vision meets action, and relationships are built on trust.
            </p>
          </div>

          {/* Dynamic Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {/* Large Image */}
            <div className="sm:col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white font-medium">{galleryImages[0].alt}</p>
              </div>
            </div>

            {/* Medium & Small Images - This is a simplified layout. 
                For production, implement a proper masonry library or use CSS Grid with dynamic row spans */}
            {galleryImages.slice(1, 5).map((img, idx) => (
              <div key={img.id} className="relative overflow-hidden rounded-2xl shadow-lg group h-full min-h-[200px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}

            {/* Second Large Image */}
            <div className="sm:col-span-2 row-span-1 relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white font-medium">{galleryImages[5].alt}</p>
              </div>
            </div>

            {/* More small/medium images */}
            {galleryImages.slice(6, 8).map((img) => (
              <div key={img.id} className="relative overflow-hidden rounded-2xl shadow-lg group h-full min-h-[200px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
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

      {/* ========== LEADERSHIP SECTION - PREMIUM FULL COVER CARDS ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              Led by Visionaries. Built on Experience.
            </h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              A team with decades of combined expertise in infrastructure, land acquisition, finance, and government liaison
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-[#14091f] border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500"
              >
                {/* IMAGE - Full Cover, Taller */}
                <div className="relative h-[520px] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Minimal bottom gradient for name readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0113]/90 via-transparent to-transparent" />
                </div>

                {/* CONTENT - Compact name/role at bottom, description on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-purple-300 font-medium mb-3">
                    {leader.role}
                  </p>
                  {/* Description slides up on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500 ease-out">
                    <p className="text-white/80 text-sm leading-relaxed pt-2 border-t border-white/10">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Investor Speak
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              What Our Investors Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#F9F2D8] rounded-2xl p-6 shadow-lg border border-[#EFE2C4] hover:-translate-y-2 transition duration-300"
              >
                <Quote className="w-8 h-8 text-[#F3C12F] mb-4" />
                <p className="text-[#5C4A3B] italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-4 pt-4 border-t border-[#EFE2C4]">
                  <p className="font-bold text-[#2B1A0D]">{testimonial.author}</p>
                  <p className="text-sm text-[#A1268D]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOUNDER'S NOTE / QUOTE ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#422565] via-[#5B2B7A] to-[#A1268D] px-10 md:px-20 py-16 shadow-2xl">
            <div className="relative text-center">
              <Quote className="w-14 h-14 text-[#F3C12F] mx-auto mb-6 opacity-80" />
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                "Even a correct decision is wrong when it is too late.<br />
                At Gomata Vision, we help you make the right decision at the right time."
              </p>
              <p className="mt-6 text-[#F9F2D8] text-xl">— Vikas Koli, Founder</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}