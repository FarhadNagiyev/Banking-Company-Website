import HeroSection from "@/features/HeroSection/container";
import OurProductsSection from "@/features/OurProductsSection/container";



export default function HomePage() {
  return (
    <div className="2xl:my-[100px] md:my-[60px]">
      <HeroSection />
      <OurProductsSection />
    </div>
  );
}
