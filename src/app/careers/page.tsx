import CTASection from "@/features/CTASection";
import FAQSection from "@/features/FAQSection/container";
import JobOpeningsSection from "@/features/JobOpeningsSection/container";
import OurBenefitsSection from "@/features/OurBenefitsSection/container";
import OurValuesSection from "@/features/OurValuesSection/container";
// import OverviewSection from "@/features/OverviewSection/container";

export default function CareersPage() {
    return (
        <div className="2xl:my-[100px] md:my-[60px] space-y-[20px] md:space-y-[60px] 2xl:space-y-[100px]">
            {/* <OverviewSection content="" /> */}
            <OurValuesSection />
            <OurBenefitsSection />
            <JobOpeningsSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
