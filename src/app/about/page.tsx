import MissionAndVision from "@/features/MissionAndVision/container";
import OverviewSection from "@/features/OverviewSection/container";
import PressReleasesSection from "@/features/PressReleasesSection/container";
import { OverviewSectionContents } from "./data/contents";

export default function AboutPage() {
    return (
        <div className="flex flex-col p-fluid-60 custom-page-gap">
            <OverviewSection content={OverviewSectionContents} />
            <MissionAndVision />
            <PressReleasesSection />
        </div>
    );
}