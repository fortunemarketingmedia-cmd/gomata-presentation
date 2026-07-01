import IntroGate from "@/components/IntroGate";
import MapView from "@/components/MapView";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <IntroGate>
      <main className="h-screen overflow-hidden bg-white">
        <Navbar />
        <MapView />
      </main>
    </IntroGate>
  );
}