
import CTASection from "@/features/CTASection";
import HeroSection from "@/features/HeroSection/HeroSection.container";
import OurProductsSection from "@/features/OurProductsSection/container";



export default function HomePage() {
  return (
    <div className="2xl:my-[100px] md:my-[60px] space-y-[20px] md:space-y-[60px] 2xl:space-y-[100px]">
      <HeroSection />
      <OurProductsSection />
      <CTASection />
    </div>
  );
}
