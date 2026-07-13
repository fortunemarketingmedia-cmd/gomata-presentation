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
  Book
} from "lucide-react";
import { useState, useEffect } from "react";

// YouTube Video Component with Direct Inline Playback
function YouTubeVideo({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video w-full max-w-5xl mx-auto bg-black group">
      {!isPlaying ? (
        <div 
          className="absolute inset-0 cursor-pointer w-full h-full z-10"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnailSrc}
            alt="Indradhanu Township Video Preview Tour"
            fill
            unoptimized
            className="object-cover group-hover:scale-103 transition duration-700"
            onError={() => {
              setThumbnailSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
            }}
          />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#F3C12F] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <Play className="w-10 h-10 text-[#2B1A0D] ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-full">
            <p className="text-white text-sm font-semibold">Watch Video Tour</p>
          </div>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full z-0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Indradhanu Township Solapur Video Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}

// Gallery Images
const galleryImages = [
  { src: "/images/indradhanu/gallery2.webp", title: "Infrastructure" },
  { src: "/images/indradhanu/gallery1.webp", title: "Gym" },
  { src: "/images/indradhanu/gallery3.webp", title: "Green Landscapes" },
  { src: "/images/indradhanu/gallery4.webp", title: "Clubhouse" },
  { src: "/images/indradhanu/gallery5.webp", title: "Library" },
  { src: "/images/indradhanu/gallery6.webp", title: "Kids Play Area" },
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
  { icon: <Book className="w-6 h-6" />, title: "Library" },
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

const heroImages = [
  "/images/indradhanu/hero1.webp",
  "/images/indradhanu/hero2.webp",
  "/images/indradhanu/hero3.webp",
  "/images/indradhanu/hero4.webp",
  "/images/indradhanu/hero5.webp",
  "/images/indradhanu/hero6.webp",
  "/images/indradhanu/hero7.webp",
  "/images/indradhanu/hero8.webp",
  "/images/indradhanu/hero9.webp",
];

export default function BrochurePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ========== HERO SECTION WITH BACKGROUND IMAGE ========== */}
      <section className="relative w-full min-h-[105vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Background Image Layer with Cross-fade */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Indradhanu Presentation Slide ${idx + 1}`}
                fill
                priority={idx === 0}
                unoptimized
                className="object-cover"
              />
            </div>
          ))}
          {/* Transparent Dark Shield Overlay to guarantee readability */}
          <div className="absolute inset-0 bg-[#241F24]/40 backdrop-blur-[1px]" />
        </div>

        {/* Slide Indicators/Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentImageIndex
                  ? "bg-[#C8A2C8] w-6"
                  : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg">
            <Building2 className="w-4 h-4 text-[#C8A2C8]" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              Premium Township
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Indradhanu <span className="text-[#FFD700]">Township</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#FFFFFF] mt-6 max-w-3xl mx-auto tracking-wide font-semibold drop-shadow-sm leading-relaxed">
            The Quest for Utopia Ends Here
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6 bg-black/20 backdrop-blur px-5 py-2.5 rounded-full w-max mx-auto border border-white/10 shadow-md">
            <MapPin className="w-4 h-4 text-[#C8A2C8]" />
            <p className="text-sm text-white/95 font-medium">Vishnu Mill Compound, Near Railway Station, Solapur - 413001</p>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-8 z-10 -mt-8 md:-mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-xl p-6 border border-[#C8A2C8]/30">
            <div className="text-center p-4">
              <Building2 className="w-10 h-10 mx-auto text-[#6105A3]" />
              <p className="text-3xl font-black text-[#241F24] mt-2">58,000+</p>
              <p className="text-[#5F5660] text-sm font-semibold mt-1">Sq.Ft. Spread Area</p>
            </div>
            <div className="text-center p-4 border-y md:border-y-0 md:border-x border-[#C8A2C8]/30">
              <Users className="w-10 h-10 mx-auto text-[#6105A3]" />
              <p className="text-3xl font-black text-[#241F24] mt-2">3,000+</p>
              <p className="text-[#5F5660] text-sm font-semibold mt-1">Residential Hub Population</p>
            </div>
            <div className="text-center p-4">
              <Award className="w-10 h-10 mx-auto text-[#6105A3]" />
              <p className="text-3xl font-black text-[#241F24] mt-2">RERA</p>
              <p className="text-[#5F5660] text-sm font-semibold mt-1">Registered Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== YOUTUBE VIDEO SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#241F24]">
              Project <span className="text-[#6105A3]">Video Tour</span>
            </h2>
            <p className="mt-2 text-[#5F5660] text-base">Experience the grandeur of Indradhanu Township instantly</p>
          </div>
          <YouTubeVideo videoId="vt_pS7tyJbI" />
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">
                About Indradhanu
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
                The Quest for Utopia Ends Here
              </h2>
              <p className="mt-6 text-[#5F5660] leading-relaxed text-lg">
                All in all, this township makes good on the promise of dream housing, abundantly full of 
                ultramodern amenities that are equally balanced by the premise of sustainability and ambient 
                greenery. Unparalleled connectivity is something INDRADHANU ensures, given that it is situated 
                right next to the Solapur railway station, is a few minutes' drive to the bus station and lies 
                at a minimal distance to the airport.
              </p>
              <p className="mt-4 text-[#5F5660] leading-relaxed text-lg">
                All kinds of amenities are within a stone's throw: from the well-stocked market, high-quality 
                schooling, medical aid and yet other service providers.
              </p>
              <p className="mt-4 text-[#5F5660] leading-relaxed text-lg font-semibold">
                Ultimately, INDRADHANU reflects the promise of a new, vibrant, bustling Solapur for its residents.
              </p>
            </div>

            {/* Key Distances */}
            <div className="bg-white rounded-3xl p-8 border border-[#C8A2C8]/30 h-max shadow-md">
              <h3 className="text-2xl font-bold text-[#241F24] mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#6105A3]" />
                Key Distances
              </h3>
              <div className="space-y-4">
                {keyDistances.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-[#C8A2C8]/20 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C8A2C8]/18 flex items-center justify-center text-[#6105A3]">
                        {item.icon}
                      </div>
                      <span className="font-semibold text-[#241F24] text-sm md:text-base">{item.place}</span>
                    </div>
                    <span className="text-[#6105A3] font-bold text-sm md:text-base">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== AMENITIES SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">
              World-Class Features
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
              Shop, Dine, <span className="text-[#6105A3]">Enjoy!</span>
            </h2>
            <p className="mt-4 text-lg text-[#5F5660]  mx-auto">
              Experience a lifestyle of convenience and luxury with our premium amenities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-[#C8A2C8]/30 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[#C8A2C8]/20 to-[#6105A3]/20 flex items-center justify-center text-[#6105A3] mb-4">
                  {amenity.icon}
                </div>
                <h3 className="font-bold text-[#241F24] text-sm md:text-base">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#6105A3] font-semibold uppercase tracking-[0.2em] text-2xl">
              Visual Tour
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-4">
              Project <span className="text-[#6105A3]">Gallery</span>
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
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className = "w-full h-full bg-gradient-to-br from-[#C8A2C8] to-[#6105A3] flex items-center justify-center";
                      fallback.innerHTML = `<div class="text-center text-white p-4"><Building2 class="w-12 h-12 mx-auto mb-2 opacity-50" /><p class="font-semibold">${image.title}</p></div>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241F24]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LOCATION ADVANTAGE ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-[#241F24]">
                Prime Location in <span className="text-[#6105A3]">Solapur</span>
              </h2>
              <p className="mt-4 text-[#5F5660] leading-relaxed">
                Strategically located with excellent connectivity to all major landmarks of Solapur.
                Whether you need to catch a train, board a bus, or access daily essentials, everything
                is just minutes away.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6105A3]" />
                  <span className="text-black font-medium">650 meters from Solapur Railway Station</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6105A3]" />
                  <span className="text-black font-medium">2.3 km from Central Bus Stand</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6105A3]" />
                  <span className="text-black font-medium">Excellent rail & road connectivity</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6105A3]" />
                  <span className="text-black font-medium">Adjacent to residential hub of 3000+ people</span>
                </div>
              </div>
            </div>

            {/* REAL INTERACTIVE MAP INTEGRATION CARD */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C8A2C8]/30 bg-white h-[400px] group">
              <iframe
                title="Vishnu Mill Compound Solapur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.675765793466!2d75.90310237583689!3d17.98188178711467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d96a77d24263%3A0x633519c2ef36192!2sVishnu%20Mill%20Compound%2C%20Solapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720875000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 z-0 grayscale-[10%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex flex-col items-center">
                <div className="absolute bottom-1 w-8 h-2 bg-[#6105A3]/30 rounded-full blur-[2px] animate-ping" />
                <MapPin className="w-10 h-10 text-[#6105A3] drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] filter transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md border border-[#C8A2C8]/30 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="p-2.5 rounded-xl bg-[#C8A2C8]/18 text-[#6105A3]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-[#241F24] text-sm">Vishnu Mill Compound</p>
                  <p className="text-xs text-[#5F5660] font-medium mt-0.5">Near Railway Station, Solapur, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* ========== DISCLAIMER ========== */}
      <section className="relative px-6 md:px-16 lg:px-24 py-8 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-[#5F5660] leading-relaxed bg-white p-6 rounded-2xl border border-[#C8A2C8]/30">
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
            <p className="mt-2 font-medium text-[#241F24]">MRN: P52600053600</p>
          </div>
        </div>
      </section>
    </main>
  );
}