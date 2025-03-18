import SectionHeader from "@/components/ui/SectionHeader"
import { headerContent } from "./data/contents"
import JobCards from "./components/JobCards"


function JobOpeningsSection() {
    return (
        <section className="flex flex-col custom-section-gap">
            <SectionHeader variant="allGreen" heading={headerContent.Heading} description={headerContent.Description} />
            <JobCards />
        </section>
    )
}

export default JobOpeningsSection
