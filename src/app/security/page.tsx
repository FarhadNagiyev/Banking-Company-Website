import FAQSection from "@/features/FAQSection/container";
import HowWeProtectYouSection from "@/features/HowWeProtectYouSection/container";
// import OverviewSection from "@/features/OverviewSection/container";

export default function SecurityPage() {
    return (
        <div className="flex flex-col p-fluid-60 custom-page-gap">
            {/* <OverviewSection content="" /> */}
            <HowWeProtectYouSection />
            <FAQSection />
        </div>

    );
}