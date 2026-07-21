import IntroGate from "@/components/IntroGate";
import MapView from "@/components/MapView";

export default function HomePage() {
  return (
    <IntroGate>
      <main className="h-screen overflow-hidden bg-white">
        <MapView />
      </main>
    </IntroGate>
  );
}
