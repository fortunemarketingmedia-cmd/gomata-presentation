// app/plan/page.tsx
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  Building2,
  MapPin,
  IndianRupee,
  Download,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
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

// Image Component with fallback (Client Component safe)
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
        <div className="w-full h-full bg-gradient-to-br from-[#422565] to-[#A1268D] flex items-center justify-center">
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
    <main className="min-h-screen bg-[#F9F2D8] overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#422565]/10 via-[#F9F2D8] to-[#F9F2D8]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#F3C12F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A1268D]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-[#2B1A0D]">Near by</span>
            <span className="text-[#A1268D]"> Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5C4A3B] mt-6 max-w-3xl mx-auto">
            Discover luxury living at its finest with our curated collection of
            premium residential projects in Panvel and Navi Mumbai region.
          </p>
        </div>
      </section>

      {/* PROJECT 1: SAI WORLD CITY */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-2">
                Sai World City
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4 text-[#A1268D]" />
                <p className="text-[#5C4A3B]">Panvel, Navi Mumbai</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <ProjectImage
              src="/images/saiworld/saiworld2.png"
              alt="Sai World City Panvel"
              title="Sai World City | Panvel"
            />

            <div>
              <p className="text-[#5C4A3B] leading-relaxed text-lg">
                Amid the lush foliage and natural landscapes of Panvel lies{" "}
                <strong className="text-[#A1268D]">Sai World City</strong> - a
                majestic township set in lush surroundings. It is a hub of green
                and luxury amenities ensuring that every convenience is at your
                doorstep.
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl text-[#2B1A0D] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#A1268D]" />
                  World-Class Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {saiWorldCityAmenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#F3C12F]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-[#A1268D]" />
                      </div>
                      <span className="text-[#5C4A3B] text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="mt-10">
            <h3 className="font-bold text-xl text-[#2B1A0D] mb-4 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-[#A1268D]" />
              Pricing & Carpet Area
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#FCFBF7] rounded-2xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-[#422565] to-[#A1268D]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Carpet Area
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {saiWorldCityPrices.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#EFE2C4] ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#FCFBF7]"
                      }`}
                    >
                      <td className="px-6 py-3 font-semibold text-[#2B1A0D]">
                        {item.type}
                      </td>
                      <td className="px-6 py-3 text-[#5C4A3B]">{item.area}</td>
                      <td className="px-6 py-3 text-[#A1268D] font-bold">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {commonFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#F9F2D8] rounded-full"
              >
                <div className="text-[#A1268D]">{feature.icon}</div>
                <span className="text-sm text-[#2B1A0D]">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT 2: MARATHON NEXZONE */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-2">
                Marathon Nexzone
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4 text-[#A1268D]" />
                <p className="text-[#5C4A3B]">Panvel, Navi Mumbai</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="order-2 lg:order-1">
              <p className="text-[#5C4A3B] leading-relaxed text-lg">
                <strong className="text-[#A1268D]">Marathon Nexzone</strong>{" "}
                offers thoughtfully designed homes that blend comfort with
                contemporary living. Located in the heart of Panvel, this
                project provides excellent connectivity and world-class
                amenities for a modern lifestyle.
              </p>
              <div className="mt-6">
                <h3 className="font-bold text-xl text-[#2B1A0D] mb-4">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A1268D]" />
                    <span className="text-sm">Prime Location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A1268D]" />
                    <span className="text-sm">Excellent Connectivity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A1268D]" />
                    <span className="text-sm">Modern Amenities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A1268D]" />
                    <span className="text-sm">Vaastu Compliant</span>
                  </div>
                </div>
              </div>
            </div>
            <ProjectImage
              src="/images/marathon/marathon1.png"
              alt="Marathon Nexzone Panvel"
              title="Marathon Nexzone | Panvel"
            />
          </div>

          {/* Pricing Table */}
          <div className="mt-10">
            <h3 className="font-bold text-xl text-[#2B1A0D] mb-4 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-[#A1268D]" />
              Pricing & Carpet Area
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-[#422565] to-[#A1268D]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Carpet Area
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {marathonNexzonePrices.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#EFE2C4] ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#FCFBF7]"
                      }`}
                    >
                      <td className="px-6 py-3 font-semibold text-[#2B1A0D]">
                        {item.type}
                      </td>
                      <td className="px-6 py-3 text-[#5C4A3B]">{item.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {commonFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm"
              >
                <div className="text-[#A1268D]">{feature.icon}</div>
                <span className="text-sm text-[#2B1A0D]">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT 3: ARIHANT ASPIRE */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2B1A0D] mt-2">
                Arihant Aspire
              </h2>
              <p className="text-xl font-bold text-[#A1268D]">
                ACE OF PANVEL | Palaspe - Panvel
              </p>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-[#A1268D]" />
                <p className="text-[#5C4A3B]">Palaspe, Panvel, Navi Mumbai</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <ProjectImage
              src="/images/arihant/arihant1.png"
              alt="Arihant Aspire Panvel"
              title="Arihant Aspire | Panvel"
            />

            <div>
              <p className="text-[#5C4A3B] leading-relaxed text-lg">
                <strong className="text-[#A1268D]">
                  Arihant Aspire Codename Ace of Panvel
                </strong>{" "}
                is a newly launched tower of this premium township at Palaspe.
                Offering BHK lavish homes with wide decks and office spaces. The
                apartments are designed with functional fittings and overlook
                astonishing views of lush surroundings.
              </p>
              <p className="text-[#5C4A3B] leading-relaxed mt-4">
                This gated community comes with premium amenities including mini
                theatre, clubhouse, gymnasium, maze garden, banquet hall,
                organic spa, pet zones, water fountains, and more.
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl text-[#2B1A0D] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#A1268D]" />
                  Premium Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {arihantAspireAmenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#F3C12F]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-[#A1268D]" />
                      </div>
                      <span className="text-[#5C4A3B] text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="mt-10">
            <h3 className="font-bold text-xl text-[#2B1A0D] mb-4 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-[#A1268D]" />
              Pricing & Carpet Area
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-[#FCFBF7] rounded-2xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-[#422565] to-[#A1268D]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Type
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Carpet Area
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-white font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {arihantAspirePrices.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#EFE2C4] ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#FCFBF7]"
                      }`}
                    >
                      <td className="px-6 py-3 font-semibold text-[#2B1A0D]">
                        {item.type}
                      </td>
                      <td className="px-6 py-3 text-[#5C4A3B]">{item.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {commonFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#F9F2D8] rounded-full"
              >
                <div className="text-[#A1268D]">{feature.icon}</div>
                <span className="text-sm text-[#2B1A0D]">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="relative px-6 md:px-16 lg:px-24 py-20 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em] text-sm">
              Quick Overview
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#2B1A0D]">
              Project Comparison
            </h2>
            <p className="mt-4 text-lg text-[#5C4A3B] max-w-2xl mx-auto">
              Compare our premium projects and find the perfect home for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#EFE2C4] hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3C12F]/20 to-[#A1268D]/20 flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-[#A1268D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2B1A0D]">Sai World City</h3>
              <p className="text-[#A1268D] text-sm mt-1">Luxury Township</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Configurations:</span> 2BHK -
                  4BHK
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Price Range:</span> ₹1.32 Cr -
                  ₹3.29 Cr
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Area:</span> 710 - 1860 SqFt
                </p>
              </div>
              <button className="mt-6 w-full py-2 rounded-full bg-[#422565] text-white font-semibold hover:bg-[#A1268D] transition">
                View Details
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#EFE2C4] hover:-translate-y-2 transition duration-300 transform md:-translate-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3C12F]/20 to-[#A1268D]/20 flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-[#A1268D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2B1A0D]">
                Marathon Nexzone
              </h3>
              <p className="text-[#A1268D] text-sm mt-1">Premium Residences</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Configurations:</span> 1BHK -
                  5BHK
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Price Range:</span> ₹59.50
                  Lacs - ₹2.16 Cr
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Area:</span> 459 - 1431 SqFt
                </p>
              </div>
              <button className="mt-6 w-full py-2 rounded-full bg-[#422565] text-white font-semibold hover:bg-[#A1268D] transition">
                View Details
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#EFE2C4] hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3C12F]/20 to-[#A1268D]/20 flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-[#A1268D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2B1A0D]">
                Arihant Aspire
              </h3>
              <p className="text-[#A1268D] text-sm mt-1">
                New Launch | ACE of Panvel
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <span className="font-semibold">Configurations:</span> 1BHK -
                  3BHK
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Price Range:</span> ₹54 Lacs -
                  ₹1.21 Cr
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Area:</span> 403 - 1000 SqFt
                </p>
              </div>
              <button className="mt-6 w-full py-2 rounded-full bg-[#422565] text-white font-semibold hover:bg-[#A1268D] transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}