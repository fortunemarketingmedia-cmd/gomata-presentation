"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Sidebar from "./Sidebar";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function MapView() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      
      {/* FIXED FULLSCREEN MAP CONTAINER */}
      <div className="absolute inset-0">
        
        <div className="relative w-full h-full overflow-hidden">
          
          {/* MAP */}
          <Map setSelectedLocation={setSelectedLocation} />

          {/* SIDEBAR */}
          <Sidebar
            selectedLocation={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        </div>
      </div>
    </section>
  );
}