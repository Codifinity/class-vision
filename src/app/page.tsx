import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
