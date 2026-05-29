import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  Briefcase,
  Building2,
  GraduationCap,
  Hotel,
  Landmark,
  MapPinned,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

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
  },
];

const leadershipCards = [
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Former Director – NHAI",
    subtitle:
      "Maharashtra & Goa • Ministry of Road Transport, Government of India",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Real Estate Visionary",
    subtitle:
      "Indradhanu Township & Vrundavan Park with decades of ground-level expertise",
  },
  {
    icon: <Hotel className="w-8 h-8" />,
    title: "Founder – Monarch Group",
    subtitle:
      "Building excellence in hospitality with customer-first experiences",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Educational Leadership",
    subtitle:
      "Director of Indian Model School & Indo British Global School",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Investment Coach",
    subtitle:
      "Trusted advisor for TPS-11, NAINA area, farmers & village communities",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Community Builder",
    subtitle:
      "Empowering people through infrastructure, strategy, and mentorship",
  },
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#F9F2D8] overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-34">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F2D8] via-[#FFF7E7] to-[#F9F2D8]" />

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
            <span className="inline-block px-5 py-2 rounded-full bg-[#422565] text-white text-sm tracking-widest uppercase mb-6">
              Journey of Leadership
            </span>

            <h1 className="text-5xl md:text-6xl font-black leading-tight text-[#2B1A0D]">
  The Visionary Journey of{" "}
  
  <span className="text-[#A1268D] whitespace-nowrap">
    Vikas Koli
  </span>
</h1>

            <p className="mt-8 text-lg leading-9 text-[#5C4A3B]">
              From engineering excellence to entrepreneurial leadership,
              Vikas Koli Sir’s journey is a story of resilience, innovation,
              and nation-building. With decades of experience across
              infrastructure, hospitality, education, and community
              development, he continues to inspire future generations
              through leadership rooted in purpose.
            </p>
          </div>

          {/* IMAGE CARD */}
          <div className="relative max-w-[430px] mx-auto">
  <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-[#F3C12F]/20 blur-3xl" />
  <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full bg-[#A1268D]/15 blur-3xl" />

  <div className="relative rounded-[32px] overflow-hidden border border-[#E5D7B2] shadow-2xl bg-white">
    <Image
      src="/vikas.png"
      alt="Vikas Koli"
      width={700}
      height={850}
      className="w-full h-[560px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A0D]/85 via-transparent to-transparent" />

    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-2xl font-bold text-white leading-tight">
        Engineer • Mentor • Entrepreneur
      </h3>

      <p className="text-[#F9F2D8] mt-2 text-sm leading-6">
        Building roads, communities, businesses & futures.
      </p>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* TIMELINE */}
<section className="relative px-6 md:px-16 lg:px-24 py-28 bg-[#FCFBF7] overflow-hidden">
  {/* BACKGROUND GLOW */}
  <div className="absolute top-20 left-0 w-72 h-72 bg-[#F3C12F]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A1268D]/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto">
    {/* HEADING */}
    <div className="text-center mb-24">
      <span className="uppercase tracking-[0.35em] text-[#A1268D] font-semibold">
        Journey Timeline
      </span>

      <h2 className="mt-5 text-5xl md:text-6xl font-black text-[#171717] leading-tight">
        Milestones of Excellence
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#666666]">
        A transformational journey built on engineering, leadership,
        entrepreneurship, and visionary growth.
      </p>
    </div>

    {/* TIMELINE */}
    <div className="relative">
      {/* CENTER LINE */}
      <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-[#F3C12F] via-[#D4AF37] to-[#A1268D]" />

      <div className="space-y-24">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="relative grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* LEFT SIDE */}
            {index % 2 === 0 ? (
              <>
                {/* CARD */}
                <div className="relative lg:pr-24">
                  {/* CONNECTOR LINE */}
                  <div className="hidden lg:block absolute top-1/2 right-0 w-24 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#A1268D]" />

                  <div className="bg-white border border-[#EFE6D0] rounded-[32px] p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* YEAR */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#FCFBF7] border border-[#E9DFC1] mb-6">
                      <span className="text-[#4A2567] font-bold">
                        {item.year}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <h3 className="text-3xl font-black text-[#171717]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[#666666] leading-8 text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* CENTER NODE */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#F3C12F] shadow-2xl flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F3C12F] to-[#A1268D]" />
                  </div>
                </div>

                {/* EMPTY SIDE */}
                <div />
              </>
            ) : (
              <>
                {/* EMPTY SIDE */}
                <div />

                {/* CARD */}
                <div className="relative lg:pl-24">
                  {/* CONNECTOR LINE */}
                  <div className="hidden lg:block absolute top-1/2 left-0 w-24 h-[3px] bg-gradient-to-r from-[#A1268D] to-[#D4AF37]" />

                  <div className="bg-white border border-[#EFE6D0] rounded-[32px] p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* YEAR */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#FCFBF7] border border-[#E9DFC1] mb-6">
                      <span className="text-[#4A2567] font-bold">
                        {item.year}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <h3 className="text-3xl font-black text-[#171717]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[#666666] leading-8 text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* CENTER NODE */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#A1268D] shadow-2xl flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F3C12F] to-[#A1268D]" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* LEADERSHIP SECTION */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#F9F2D8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#A1268D] font-semibold uppercase tracking-[0.3em]">
              Leadership
            </span>

            <h2 className="mt-4 text-5xl font-black text-[#2B1A0D]">
              What Defines His Leadership?
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-[#5C4A3B]">
              A rare blend of technical expertise, visionary planning,
              business intelligence, and people-centric leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {leadershipCards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-[32px] p-8 shadow-xl border border-[#EFE2C4] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#FDD91D]/20 to-[#A1268D]/20 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FDD91D] to-[#DBAB26] flex items-center justify-center text-[#422565] shadow-lg">
                    {card.icon}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#2B1A0D]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[#5C4A3B] leading-7">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="relative px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#422565] via-[#5B2B7A] to-[#A1268D] px-10 md:px-20 py-20 shadow-2xl">
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]" />

            <div className="relative text-center">
              <MapPinned className="w-14 h-14 text-[#FDD91D] mx-auto mb-8" />

              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                “Jo kam 25 saal mei nhi hua,
                <br />
                voh ab hoga”
              </h2>

              <p className="mt-8 text-[#F9F2D8] text-xl">
                — Vikas Koli
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}