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

      {/* PROJECT 1: SAI WORLD CITY */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-2">
                Sai World City
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4 text-[#6105A3]" />
                <p className="text-[#5F5660]">Panvel, Navi Mumbai</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <ProjectImage
              src="/images/saiworld/saiworld2.webp"
              alt="Sai World City Panvel"
              title="Sai World City | Panvel"
            />

            <div>
              <p className="text-[#5F5660] leading-relaxed text-lg">
                Amid the lush foliage and natural landscapes of Panvel lies{" "}
                <strong className="text-[#6105A3]">Sai World City</strong> - a
                majestic township set in lush surroundings. It is a hub of green
                and luxury amenities ensuring that every convenience is at your
                doorstep.
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl text-[#241F24] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#6105A3]" />
                  World-Class Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {saiWorldCityAmenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#C8A2C8]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-[#6105A3]" />
                      </div>
                      <span className="text-[#5F5660] text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="mt-10">
            <h3 className="font-bold text-xl text-[#241F24] mb-4 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-[#6105A3]" />
              Pricing & Carpet Area
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-[#C8A2C8]/30">
                <thead className="bg-gradient-to-r from-[#C8A2C8] to-[#6105A3]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Type</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Carpet Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {saiWorldCityPrices.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#C8A2C8]/20 ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#C8A2C8]/5"
                      }`}
                    >
                      <td className="px-6 py-3 font-semibold text-[#241F24]">{item.type}</td>
                      <td className="px-6 py-3 text-[#5F5660]">{item.area}</td>
                      <td className="px-6 py-3 text-[#6105A3] font-bold">{item.price}</td>
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
                className="flex items-center gap-2 px-3 py-1.5 bg-[#C8A2C8]/18 rounded-full"
              >
                <div className="text-[#6105A3]">{feature.icon}</div>
                <span className="text-sm text-[#241F24] font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT 2: MARATHON NEXZONE */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16 bg-[#C8A2C8]/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-2">
                Marathon Nexzone
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4 text-[#6105A3]" />
                <p className="text-[#5F5660]">Panvel, Navi Mumbai</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="order-2 lg:order-1">
              <p className="text-[#5F5660] leading-relaxed text-lg">
                <strong className="text-[#6105A3]">Marathon Nexzone</strong> offers thoughtfully designed homes that blend comfort with contemporary living. Located in the heart of Panvel, this project provides excellent connectivity and world-class amenities for a modern lifestyle.
              </p>
              <div className="mt-6">
                <h3 className="font-bold text-xl text-[#241F24] mb-4">Key Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3]" />
                    <span className="text-sm text-[#5F5660]">Prime Location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3]" />
                    <span className="text-sm text-[#5F5660]">Excellent Connectivity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3]" />
                    <span className="text-sm text-[#5F5660]">Modern Amenities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6105A3]" />
                    <span className="text-sm text-[#5F5660]">Vaastu Compliant</span>
                  </div>
                </div>
              </div>
            </div>
            <ProjectImage
              src="/images/marathon/marathon1.webp"
              alt="Marathon Nexzone Panvel"
              title="Marathon Nexzone | Panvel"
            />
          </div>

          {/* Pricing Table */}
          <div className="mt-10">
            <h3 className="font-bold text-xl text-[#241F24] mb-4 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-[#6105A3]" />
              Pricing & Carpet Area
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-[#C8A2C8]/30">
                <thead className="bg-gradient-to-r from-[#C8A2C8] to-[#6105A3]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Type</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Carpet Area</th>
                  </tr>
                </thead>
                <tbody>
                  {marathonNexzonePrices.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#C8A2C8]/20 ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#C8A2C8]/5"
                      }`}
                    >
                      <td className="px-6 py-3 font-semibold text-[#241F24]">{item.type}</td>
                      <td className="px-6 py-3 text-[#5F5660]">{item.area}</td>
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
                <div className="text-[#6105A3]">{feature.icon}</div>
                <span className="text-sm text-[#241F24] font-medium">{feature.text}</span>
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
              <h2 className="text-4xl md:text-5xl font-black text-[#241F24] mt-2">
                Arihant Aspire
              </h2>
              <p className="text-xl font-bold text-[#6105A3]">
                ACE OF PANVEL | Palaspe - Panvel
              </p>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-[#6105A3]" />
                <p className="text-[#5F5660]">Palaspe, Panvel, Navi Mumbai</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <ProjectImage
              src="/images/arihant/arihant1.webp"
              alt="Arihant Aspire Panvel"
              title="Arihant Aspire | Panvel"
            />

            <div>
              <p className="text-[#5F5660] leading-relaxed text-lg">
                <strong className="text-[#6105A3]">Arihant Aspire Codename Ace of Panvel</strong> is a newly launched tower of this premium township at Palaspe. Offering BHK lavish homes with wide decks and office spaces. The apartments are designed with functional fittings and overlook astonishing views of lush surroundings.
              </p>
              <p className="text-[#5F5660] leading-relaxed mt-4">
                This gated community comes with premium amenities including mini theatre, clubhouse, gymnasium, maze garden, banquet hall, organic spa, pet zones, water fountains, and more.
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl text-[#241F24] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#6105A3]" />
                  Premium Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {arihantAspireAmenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#C8A2C8]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-[#6105A3]" />
                      </div>
                      <span className="text-[#5F5660] text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="mt-10">
            <h3 className="font-bold text-xl text-[#241F24] mb-4 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-[#6105A3]" />
              Pricing & Carpet Area
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-[#C8A2C8]/30">
                <thead className="bg-gradient-to-r from-[#C8A2C8] to-[#6105A3]">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Type</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Carpet Area</th>
                  </tr>
                </thead>
                <tbody>
                  {arihantAspirePrices.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#C8A2C8]/20 ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#C8A2C8]/5"
                      }`}
                    >
                      <td className="px-6 py-3 font-semibold text-[#241F24]">{item.type}</td>
                      <td className="px-6 py-3 text-[#5F5660]">{item.area}</td>
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
                className="flex items-center gap-2 px-3 py-1.5 bg-[#C8A2C8]/18 rounded-full"
              >
                <div className="text-[#6105A3]">{feature.icon}</div>
                <span className="text-sm text-[#241F24] font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}