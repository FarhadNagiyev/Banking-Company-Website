type OverviewSectionProps = {
    content: string;
}
function OverviewSection({ content }: OverviewSectionProps) {
    return (
        <section className="flex flex-col custom-section-gap">
            <h2>{content}</h2>
            Hello World
        </section>

    )
}

export default OverviewSection
