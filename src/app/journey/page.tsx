"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { MapPinned } from "lucide-react";

const milestones = [
  {
    year: "1997",
    title: "Roots of Resilience",
    description:
      "The beginning of a journey shaped by discipline, determination, and a vision to create impact through engineering and leadership.",
  },
  {
    year: "1998",
    title: "Knowledge & Foundation",
    description:
      "Started as a Tuition Teacher & Lecturer, believing education is the first step towards empowering minds and shaping futures.",
  },
  {
    year: "1998 – 2003",
    title: "Airports Authority of India",
    description:
      "Worked as an Engineer contributing to airport infrastructure development and operational excellence.",
  },
  {
    year: "2003 – 2009",
    title: "Project Director – NHAI",
    description:
      "Led major highway and infrastructure projects across Maharashtra & Goa, driving nation-building through connectivity.",
  },
  {
    year: "2009 – 2025",
    title: "Entrepreneurship & Leadership",
    description:
      "Expanded vision into real-estate development, hospitality, education, and mentorship with a focus on long-term impact.",
  },
  {
    year: "2025 & Beyond",
    title: "Mentorship & Innovation",
    description:
      "Guiding entrepreneurs, communities, and future leaders with strategic investment knowledge and visionary leadership.",
  }
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-34">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#C8A2C8]/10 to-white" />

        <div className="relative w-full max-w-[1500px] mx-auto overflow-hidden rounded-[32px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-auto object-contain"
          >
            <source src="/journey-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-[#6105A3] text-[#FFFFFF] text-sm tracking-widest uppercase mb-6 font-semibold">
              Journey of Leadership
            </span>

            <h1 className="text-5xl md:text-6xl font-black leading-tight text-[#241F24]">
              The Visionary Journey of{" "}
              <span className="text-[#6105A3] whitespace-nowrap">
                Vikas Koli
              </span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-[#5F5660]">
              From engineering excellence to entrepreneurial leadership,
              Vikas Koli Sir’s journey is a story of Resilience, Innovation,
              and Nation-building. With decades of experience across
              Infrastructure, Hospitality, Education, and Community
              Development. He continues to inspire future generations
              through leadership rooted in purpose.
            </p>
          </div>

          {/* IMAGE CARD */}
          <div className="relative max-w-[430px] mx-auto">
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-[#C8A2C8]/25 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full bg-[#6105A3]/15 blur-3xl" />

            <div className="relative rounded-[32px] overflow-hidden border border-[#C8A2C8]/30 shadow-2xl bg-white">
              <Image
                src="/vikas.webp"
                alt="Vikas Koli"
                width={700}
                height={850}
                className="w-full h-[560px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#241F24]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white leading-tight">
                  Engineer • Mentor • Entrepreneur
                </h3>

                <p className="text-white/80 mt-2 text-sm leading-6">
                  Building roads, communities, businesses & futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TIMELINE SECTION (Horizontal PPT Slide Presentation Style) */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-36 bg-[#C8A2C8]/10 overflow-visible">
        {/* COSMIC NEBULA GLOWS */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#6105A3]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C8A2C8]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-24">
            <span className="uppercase tracking-[0.4em] text-[#6105A3] font-bold text-sm">
              Journey Timeline
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#241F24] leading-tight font-serif tracking-tight">
              Milestones of Excellence
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-base leading-7 text-[#5F5660]">
              A legendary path of engineering, nation-building, and visionary leadership.
            </p>
          </div>

          {/* HORIZONTAL TIMELINE LAYOUT */}
          <div className="relative px-4 pb-24 pt-24 overflow-x-auto lg:overflow-x-visible">
            
            {/* Thicker, glowing horizontal timeline axis */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col gap-[3px] w-full pointer-events-none z-0">
              <div className="h-[2px] bg-[#6105A3]/30 w-full" />
              <div className="h-[1px] bg-[#C8A2C8]/50 w-full" />
            </div>

            {/* Grid container with 6 columns for milestones */}
            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-40 lg:gap-y-0 gap-x-6 z-10 min-w-[1000px] lg:min-w-0">
              {milestones.map((item, index) => {
                const isAbove = index % 2 === 0;

                return (
                  <div 
                    key={index} 
                    className="relative flex flex-col items-center justify-center h-20 group cursor-pointer z-10 hover:z-50"
                  >
                    {/* ENLARGED HUB TRACK POINT PIN */}
                    <div className="relative z-20 w-7 h-7 rounded-full bg-white border-2 border-[#6105A3] group-hover:border-[#C8A2C8] flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-125">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#6105A3] shadow-[0_0_10px_#6105A3] group-hover:bg-[#6105A3]" />
                    </div>

                    {/* AXIS DURATION TRACK LABEL (Larger Year) */}
                    <div className={`absolute ${isAbove ? 'top-[calc(50%+20px)]' : 'bottom-[calc(50%+20px)]'} text-base font-mono font-black text-[#5F5660] group-hover:text-[#6105A3] tracking-widest transition-all duration-300 z-20`}>
                      {item.year}
                    </div>

                    {isAbove ? (
                      <>
                        {/* STEM LINE UP */}
                        <div className="absolute bottom-1/2 w-[2px] h-20 bg-gradient-to-t from-[#6105A3]/40 via-[#6105A3]/10 to-transparent group-hover:from-[#6105A3]/80 transition-all duration-500 z-10" />
                        
                        {/* BOLDER STATIC HEADING ABOVE TRACK */}
                        <div className="absolute bottom-[calc(50%+68px)] w-full text-center select-none z-20 px-1 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                          <h4 className="text-[#6105A3] text-base md:text-lg font-extrabold font-serif tracking-wide leading-tight transform">
                            {item.title}
                          </h4>
                        </div>

                        {/* HOVER TOOLTIP POPUP (Enlarged and optimized for presentations) */}
                        <div 
                          className="absolute bottom-[calc(50%+115px)] z-40 w-80 p-6 bg-white border border-[#C8A2C8] rounded-2xl shadow-2xl transition-all duration-300 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                          style={{ transformOrigin: "bottom center" }}
                        >
                          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-r border-b border-[#C8A2C8]" />
                          <div className="relative z-10 text-left">
                            <span className="text-xs font-mono font-black uppercase tracking-widest text-[#6105A3] mb-1.5 block">
                              {item.year}
                            </span>
                            <h5 className="text-base font-black text-[#241F24] leading-tight mb-3 font-serif">
                              {item.title}
                            </h5>
                            <p className="text-sm md:text-[15px] text-[#5F5660] leading-relaxed font-sans text-justify">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* STEM LINE DOWN */}
                        <div className="absolute top-1/2 w-[2px] h-20 bg-gradient-to-b from-[#6105A3]/40 via-[#6105A3]/10 to-transparent group-hover:from-[#6105A3]/80 transition-all duration-500 z-10" />
                        
                        {/* BOLDER STATIC HEADING BELOW TRACK */}
                        <div className="absolute top-[calc(50%+68px)] w-full text-center select-none z-20 px-1 transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                          <h4 className="text-[#6105A3] text-base md:text-lg font-extrabold font-serif tracking-wide leading-tight transform">
                            {item.title}
                          </h4>
                        </div>

                        {/* HOVER TOOLTIP POPUP (Enlarged and optimized for presentations) */}
                        <div 
                          className="absolute top-[calc(50%+115px)] z-40 w-80 p-6 bg-white border border-[#C8A2C8] rounded-2xl shadow-2xl transition-all duration-300 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                          style={{ transformOrigin: "top center" }}
                        >
                          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-[#C8A2C8]" />
                          <div className="relative z-10 text-left">
                            <span className="text-xs font-mono font-black uppercase tracking-widest text-[#6105A3] mb-1.5 block">
                              {item.year}
                            </span>
                            <h5 className="text-base font-black text-[#241F24] leading-tight mb-3 font-serif">
                              {item.title}
                            </h5>
                            <p className="text-sm md:text-[15px] text-[#5F5660] leading-relaxed font-sans text-justify">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* QUOTE SECTION */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#6105A3] via-[#6105A3]/60 to-[#6105A3] px-10 md:px-20 py-20 shadow-2xl">
            {/* Decorative Texture Grid overlay */}
            <div className="absolute inset-0 opacity-15 bg-[url('/grid.svg')] mix-blend-multiply pointer-events-none" />

            <div className="relative text-center">
              <MapPinned className="w-14 h-14 text-[#FFFFFF] mx-auto mb-8 drop-shadow-[0_2px_4px_rgba(142,69,133,0.15)]" />

              <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] leading-tight tracking-tight">
                “Jo kaam 25 saal mei nhi hua,
                <br />
                <span className="text-[#FFFFFF]">voh ab hoga”</span>
              </h2>

              <p className="mt-8 text-[#FFFFFF] text-xl font-black tracking-wide">
                — Vikas Koli
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}