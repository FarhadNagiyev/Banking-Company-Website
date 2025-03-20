

import MissionAndVision from "@/features/MissionAndVision/container";
import PressReleasesSection from "@/features/PressReleasesSection/container";

export default function AboutPage() {
    return (
        <div className="flex flex-col p-fluid-60 custom-page-gap">

            <MissionAndVision />
            <PressReleasesSection />
        </div>
    );
}