"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  Building2,
  MapPin,
  IndianRupee,
  CheckCircle2,
  Sparkles,
  Shield,
  Clock,
  Car,
} from "lucide-react";
import { useState } from "react";

// Sai World City Data
const saiWorldCityAmenities = [
  "Swimming Pool",
  "Children's Play Area",
  "Tennis Court",
  "Yoga/Meditation Zone",
  "Volleyball Court",
  "Dry Fountain",
  "Lush Green Landscapes",
  "Clubhouse",
  "Gymnasium",
  "Jogging Track",
];

const saiWorldCityPrices = [
  {
    type: "2 BHK",
    area: "878 - 931 SqFt",
    price: "₹ 1.57 Cr - ₹ 1.66 Cr",
  },
  {
    type: "3 BHK",
    area: "1153 - 1373 SqFt",
    price: "₹ 2.04 Cr - ₹ 2.43 Cr",
  },
];

// Marathon Nexzone Data
const marathonNexzonePrices = [
  {
    type: "1 BHK",
    area: "459 SqFt",
    price: "₹ 62.88 Lac",
  },
  {
    type: "2 BHK",
    area: "577 - 913 SqFt",
    price: "₹ 79 Lac - ₹ 1.24 Cr",
  },
  {
    type: "3 BHK",
    area: "922 SqFt",
    price: "₹ 1.25 Cr",
  },
];

// Arihant Aspire Data
const arihantAspireAmenities = [
  "Mini Theatre",
  "Clubhouse",
  "Gymnasium",
  "Maze Garden",
  "Banquet Hall",
  "Organic Spa",
  "Pet Zones",
  "Water Fountains",
  "Children's Play Area",
  "Meditation Zone",
  "Jogging Track",
  "Landscaped Gardens",
];

const arihantAspirePrices = [
  {
    type: "1 BHK",
    area: "332 - 365 SqFt",
    price: "₹ 40.92 Lac - ₹ 44.93 Lac",
  },
  {
    type: "2 BHK",
    area: "482 - 732 SqFt",
    price: "₹ 50.32 Lac - ₹ 86.38 Lac",
  },
  {
    type: "3 BHK",
    area: "950 SqFt",
    price: "₹ 1.17 Cr",
  },
];

// Common Features
const commonFeatures = [
  { icon: <Shield className="w-5 h-5" />, text: "RERA Approved" },
  { icon: <Clock className="w-5 h-5" />, text: "Possession within 2026" },
  { icon: <Car className="w-5 h-5" />, text: "Car Parking Available" },
  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Bank Loan Approved" },
];

function ProjectImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] w-full">
      {!error ? (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover"
          onError={() => {
            setError(true);
          }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#C8A2C8] to-[#AD5691] flex items-center justify-center">
          <div className="text-center text-white p-6">
            <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-sm opacity-75">Premium Project</p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0D]/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 rounded-full pointer-events-none">
        <p className="text-white text-sm font-semibold">{title}</p>
      </div>
    </div>
  );
}

export default function PlanPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ========== HERO SECTION WITH BACKGROUND IMAGE ========== */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10 ">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <span className="text-[#FFD700]">Nearby</span> <span className="text-[#FFFFFF]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#000000] mt-6 max-w-3xl mx-auto tracking-wide font-semibold drop-shadow-sm leading-relaxed">
            Discover luxury living at its finest with our curated collection of
            premium residential projects in Panvel and Navi Mumbai region.
          </p>
        </div>
      </section>

      
    </main>
  );
}