import FAQSection from "@/features/FAQSection/container";
import HowWeProtectYouSection from "@/features/HowWeProtectYouSection/container";
// import OverviewSection from "@/features/OverviewSection/container";

export default function SecurityPage() {
    return (
        <div className="2xl:my-[100px] md:my-[60px] space-y-[20px] md:space-y-[60px] 2xl:space-y-[100px]">
            {/* <OverviewSection content="" /> */}
            <HowWeProtectYouSection />
            <FAQSection />
        </div>

    );
}