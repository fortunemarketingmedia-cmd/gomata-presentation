// app/brochure/page.tsx
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  MapPin,
  IndianRupee,
  Phone,
  Mail,
  Globe,
  Building2,
  Train,
  Bus,
  Car,
  Utensils,
  ShoppingBag,
  Trees,
  Users,
  Sparkles,
  Shield,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Play,
  X,
} from "lucide-react";
import { useState } from "react";

// YouTube Video Component
function YouTubeVideo({ videoId }: { videoId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Indradhanu Township Video"
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#F3C12F] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
            <Play className="w-10 h-10 text-[#2B1A0D] ml-1" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-full">
          <p className="text-white text-sm font-semibold">Watch Video Tour</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#F3C12F] transition z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Indradhanu Township Solapur"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Gallery Images (Replace with actual image paths in your public folder)
// Add your images to: public/images/gallery/
const galleryImages = [
  {
    src: "/images/indradhanu/gallery2.jpg",
    title: "infrastructure",
  },
  {
    src: "/images/indradhanu/gallery1.jpg",
    title: "Gym",
  },
  {
    src: "/images/indradhanu/gallery3.jpg",
    title: "Green Landscapes",
  },
  {
    src: "/images/indradhanu/gallery4.jpg",
    title: "Clubhouse",
  },
  {
    src: "/images/indradhanu/gallery5.jpg",
    title: "Library",
  },
  {
    src: "/images/indradhanu/gallery6.jpg",
    title: "Kids Play Area",
  },
];

// Key Distances
const keyDistances = [
  { place: "Railway Station", distance: "650 m", icon: <Train className="w-5 h-5" /> },
  { place: "Central Bus Stand", distance: "2.3 km", icon: <Bus className="w-5 h-5" /> },
  { place: "Vasant Vihar", distance: "3.3 km", icon: <MapPin className="w-5 h-5" /> },
  { place: "Akkalkot Road", distance: "5.2 km", icon: <Car className="w-5 h-5" /> },
  { place: "Jule Solapur", distance: "6.6 km", icon: <MapPin className="w-5 h-5" /> },
];

// Amenities
const amenities = [
  { icon: <ShoppingBag className="w-6 h-6" />, title: "Retail Space" },
  { icon: <Utensils className="w-6 h-6" />, title: "Multi-Cuisine Food Court" },
  { icon: <Sparkles className="w-6 h-6" />, title: "Luxurious Ambience" },
  { icon: <Car className="w-6 h-6" />, title: "Adequate Vehicle Parking" },
  { icon: <Users className="w-6 h-6" />, title: "Kids Zone" },
  { icon: <Sparkles className="w-6 h-6" />, title: "Live Events & Festivals" },
  { icon: <Trees className="w-6 h-6" />, title: "Green Landscapes" },
  { icon: <Shield className="w-6 h-6" />, title: "24/7 Security" },
];

// Credits Team
const credits = [
  { role: "Concept Architects", name: "dse. k. Architecture and urban design practice, Pune" },
  { role: "Structural Designers & RCC Consultant", name: "Strudcom Consultant Pvt. Ltd., Pune" },
  { role: "Legal Advisor", name: "Adv. Vijay Bhaskar Marathe & Adv. Umesh Balkrishna Marathe, Solapur" },
  { role: "Financial Advisor", name: "G.G. Borgaonkar & Company, Chartered Accountants, Solapur" },
  { role: "Sales Co-ordinator & Team Leader", name: "Ganesh Koli" },
  { role: "Technical Co-ordinator", name: "Abhishek Apte (B.E. Civil, M.S., Construction Management, Arizona State University, USA)" }
];

export default function BrochurePage() {
  return (
    <main className="min-h-screen bg-[#F9F2D8] overflow-x-hidden">
      <Navbar />

      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative pt-28 md:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#422565]/10 via-[#F9F2D8] to-[#F9F2D8]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#F3C12F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A1268D]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#422565]/10 backdrop-blur mb-6">
            <Building2 className="w-4 h-4 text-[#A1268D]" />
            <span className="text-sm font-semibold text-[#A1268D] uppercase tracking-wide">
              Premium Township
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-[#2B1A0D]">Indradhanu</span>
            <span className="text-[#A1268D]"> Township</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5C4A3B] mt-6 max-w-3xl mx-auto">
            The Quest for Utopia Ends Here
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <MapPin className="w-5 h-5 text-[#A1268D]" />
            <p className="text-[#5C4A3B]">Vishnu Mill Compound, Near Railway Station, Solapur - 413001</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS BAR */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-2xl shadow-xl p-6 border border-[#EFE2C4]">
            <div className="text-center p-4">
              <Building2 className="w-10 h-10 mx-auto text-[#A1268D]" />
              <p className="text-2xl font-bold text-[#2B1A0D] mt-2">58,000+</p>
              <p className="text-[#5C4A3B]">Sq.Ft. Spread Area</p>
            </div>
            <div className="text-center p-4 border-x border-[#EFE2C4]">
              <Users className="w-10 h-10 mx-auto text-[#A1268D]" />
              <p className="text-2xl font-bold text-[#2B1A0D] mt-2">3,000+</p>
              <p className="text-[#5C4A3B]">Residential Hub Population</p>
            </div>
            <div className="text-center p-4">
              <Award className="w-10 h-10 mx-auto text-[#A1268D]" />
              <p className="text-2xl font-bold text-[#2B1A0D] mt-2">RERA</p>
              <p className="text-[#5C4A3B]">Registered Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* YOUTUBE VIDEO SECTION */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#2B1A0D]">
              Project <span className="text-[#A1268D]">Video Tour</span>
            </h2>
            <p className="mt-2 text-[#5C4A3B]">Experience the grandeur of Indradhanu Township</p>
          </div>
          <YouTubeVideo videoId="vt_pS7tyJbI" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT SECTION */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
                About Indradhanu
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
                The Quest for Utopia Ends Here
              </h2>
              <p className="mt-6 text-[#5C4A3B] leading-relaxed text-lg">
                All in all, this township makes good on the promise of dream housing, abundantly full of 
                ultramodern amenities that are equally balanced by the premise of sustainability and ambient 
                greenery. Unparalleled connectivity is something INDRADHANU ensures, given that it is situated 
                right next to the Solapur railway station, is a few minutes' drive to the bus station and lies 
                at a minimal distance to the airport.
              </p>
              <p className="mt-4 text-[#5C4A3B] leading-relaxed text-lg">
                All kinds of amenities are within a stone's throw: from the well-stocked market, high-quality 
                schooling, medical aid and yet other service providers.
              </p>
              <p className="mt-4 text-[#5C4A3B] leading-relaxed text-lg font-semibold">
                Ultimately, INDRADHANU reflects the promise of a new, vibrant, bustling Solapur for its residents.
              </p>
            </div>

            {/* Key Distances */}
            <div className="bg-[#FCFBF7] rounded-3xl p-8 border border-[#EFE2C4]">
              <h3 className="text-2xl font-bold text-[#2B1A0D] mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#A1268D]" />
                Key Distances
              </h3>
              <div className="space-y-4">
                {keyDistances.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-[#EFE2C4] pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F3C12F]/20 flex items-center justify-center text-[#A1268D]">
                        {item.icon}
                      </div>
                      <span className="font-semibold text-[#2B1A0D]">{item.place}</span>
                    </div>
                    <span className="text-[#A1268D] font-bold">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* AMENITIES SECTION */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              World-Class Features
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              Shop, Dine, <span className="text-[#A1268D]">Enjoy!</span>
            </h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              Experience a lifestyle of convenience and luxury with our premium amenities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#EFE2C4] hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[#F3C12F]/20 to-[#A1268D]/20 flex items-center justify-center text-[#A1268D] mb-4">
                  {amenity.icon}
                </div>
                <h3 className="font-bold text-[#2B1A0D]">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* GALLERY SECTION */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Visual Tour
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              Project <span className="text-[#A1268D]">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className = "w-full h-full bg-gradient-to-br from-[#422565] to-[#A1268D] flex items-center justify-center";
                      fallback.innerHTML = `<div class="text-center text-white p-4"><Building2 class="w-12 h-12 mx-auto mb-2 opacity-50" /><p class="font-semibold">${image.title}</p></div>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0D]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LOCATION ADVANTAGE */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#2B1A0D]">
                Prime Location in <span className="text-[#A1268D]">Solapur</span>
              </h2>
              <p className="mt-4 text-[#5C4A3B] leading-relaxed">
                Strategically located with excellent connectivity to all major landmarks of Solapur.
                Whether you need to catch a train, board a bus, or access daily essentials, everything
                is just minutes away.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A1268D]" />
                  <span>650 meters from Solapur Railway Station</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A1268D]" />
                  <span>2.3 km from Central Bus Stand</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A1268D]" />
                  <span>Excellent rail & road connectivity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A1268D]" />
                  <span>Adjacent to residential hub of 3000+ people</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] bg-gradient-to-br from-[#422565] to-[#A1268D]">
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                <div className="py-10">
  <MapPin className="w-20 h-20 mx-auto mb-6 opacity-60" />

  <p className="text-2xl font-bold mb-3">
    Vishnu Mill Compound
  </p>

  <p className="text-lg opacity-80">
    Near Railway Station, Solapur
  </p>

  <p className="text-sm opacity-50 mt-6 tracking-wide">
    Interactive map view available in brochure
  </p>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CREDITS & TEAM SECTION */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-4">
              Project <span className="text-[#A1268D]">Credits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credits.map((credit, idx) => (
              <div
                key={idx}
                className="bg-[#FCFBF7] rounded-2xl p-6 border border-[#EFE2C4] hover:shadow-lg transition"
              >
                <h3 className="font-bold text-[#A1268D] text-lg">{credit.role}</h3>
                <p className="mt-2 text-[#5C4A3B] text-sm leading-relaxed">{credit.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DISCLAIMER */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-8 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-[#666] leading-relaxed bg-white p-6 rounded-2xl border border-[#EFE2C4]">
            <p className="font-semibold mb-2">Disclaimer:</p>
            <p>
              The intent of this advertising collateral is to provide only preliminary information about the project. 
              By accepting the same you have agreed that your purchase decision will be made only after satisfactorily 
              examining and understanding the entire project, its relevant documents including but not limited to 
              examining the sanctioned plans, permission, property title, amenities, specifications, FSI statements, 
              phase-wise development plan, project location, agreement, possession date etc. The developer reserves 
              the right to change, amend and modify the architectural specifications during development stages. 
              Amenities and features of the project mentioned hereby are subject to change(s)/deletion at the 
              discretion of the company. A copy of detailed sanction plans and other documents are available for 
              reference in our corporate office.
            </p>
            <p className="mt-2">MRN: P52600053600</p>
          </div>
        </div>
      </section>
    </main>
  );
}