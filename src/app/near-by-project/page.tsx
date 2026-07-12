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
      <section className="relative w-full min-h-[100vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-[#6105A3] via-[#3C0366] to-[#241F24]">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] mix-blend-overlay pointer-events-none" />
        
        {/* Cosmic Nebula glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#C8A2C8]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#6105A3]/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <span className="text-[#D4AF37]">Nearby</span> <span className="text-[#FFFFFF]">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E2D5E8] mt-6 max-w-3xl mx-auto tracking-wide font-medium leading-relaxed drop-shadow-sm">
            Discover luxury living at its finest with our curated collection of
            premium residential projects in Panvel and Navi Mumbai region.
          </p>
        </div>
      </section>

      
    </main>
  );
}