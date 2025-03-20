import FAQSection from "@/features/FAQSection/container";
import HowWeProtectYouSection from "@/features/HowWeProtectYouSection/container";
import OverviewSection from "@/features/OverviewSection/container";
import { OverviewSectionContents } from "./data/contents";

export default function SecurityPage() {
    return (
        <div className="flex flex-col p-fluid-60 custom-page-gap">
            <OverviewSection content={OverviewSectionContents} />
            <HowWeProtectYouSection />
            <FAQSection />
        </div>

    );
}