import SectionHeader from "@/components/ui/SectionHeader"
import { headerContent } from "./data/contents"


function OurBenefitsSection() {
    return (
        <section>
            <SectionHeader heading={headerContent.SectionHeading} description={headerContent.SectionDescription} />
        </section>
    )
}

export default OurBenefitsSection
