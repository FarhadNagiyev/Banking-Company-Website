import CTASection from "@/features/CTASection";
import FAQSection from "@/features/FAQSection/container";
import JobOpeningsSection from "@/features/JobOpeningsSection/container";
import OurBenefitsSection from "@/features/OurBenefitsSection/container";
import OurValuesSection from "@/features/OurValuesSection/container";
// import OverviewSection from "@/features/OverviewSection/container";
// import { OverviewSectionContents } from "./data/contents";

export default function CareersPage() {

    return (
        <div className="p-fluid-60 custom-page-gap flex flex-col">
            {/* <OverviewSection content={OverviewSectionContents} /> */}
            <OurValuesSection />
            <OurBenefitsSection />
            <JobOpeningsSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
