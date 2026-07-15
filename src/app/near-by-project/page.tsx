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

      {/* ========== HERO SECTION WITH THEME GRADIENT BACKGROUND ========== */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-[#89CFF0] to-[#89CFF0]">

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <span className="text-[#FFFFFF]">Nearby</span> <span className="text-[#FFFFFF]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-2xl text-[#FFFFFF] mt-9 max-w-3xl mx-auto tracking-wide font-medium leading-relaxed drop-shadow-sm">
            Discover luxury living at its finest with our curated collection of
            premium residential projects in Panvel and Navi Mumbai region.
          </p>
        </div>
      </section>

      {/* ========== PROJECTS PRESENTATION IMAGES ========== */}
      <section className="py-16 bg-[#FDFBFD] flex flex-col items-center gap-16 px-6 md:px-12">
        <div className="max-w-6xl w-full relative shadow-2xl rounded-[32px] overflow-hidden border border-[#C8A2C8]/30 bg-white">
          <Image
            src="/images/arihant_pricing.webp"
            alt="Arihant Aspire Presentation Pricing"
            width={1600}
            height={1200}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <div className="max-w-6xl w-full relative shadow-2xl rounded-[32px] overflow-hidden border border-[#C8A2C8]/30 bg-white">
          <Image
            src="/images/marathon_pricing.webp"
            alt="Marathon Nexzone Presentation Pricing"
            width={1600}
            height={1200}
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-6xl w-full relative shadow-2xl rounded-[32px] overflow-hidden border border-[#C8A2C8]/30 bg-white">
          <Image
            src="/images/sai_world_pricing.webp"
            alt="Sai World City Presentation Pricing"
            width={1600}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}