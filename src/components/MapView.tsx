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
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden">
          <Map setSelectedLocation={setSelectedLocation} />

          <Sidebar
            selectedLocation={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        </div>
      </div>
    </section>
  );
}