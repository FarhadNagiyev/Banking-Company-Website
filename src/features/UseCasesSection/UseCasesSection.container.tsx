
import SectionHeader from '@/components/ui/SectionHeader'
export const content = {
    SectionHeading: "Use Cases",
    SectionDescription: "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"
}

function UseCasesSection() {
    return (
        <section>
            <SectionHeader heading={content.SectionHeading} description={content.SectionDescription} />
        </section>
    )
}

export default UseCasesSection
