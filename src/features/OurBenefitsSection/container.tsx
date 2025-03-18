import SectionHeader from "@/components/ui/SectionHeader"
import { headerContent } from "./data/contents"

import BenefitCards from "./components/BenefitCards"


function OurBenefitsSection() {
    return (
        <section className="flex flex-col custom-section-gap">
            <SectionHeader heading={headerContent.SectionHeading} description={headerContent.SectionDescription} />
            <BenefitCards />



        </section>
    )
}

export default OurBenefitsSection
