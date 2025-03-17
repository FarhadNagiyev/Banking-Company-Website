type OverviewSectionProps = {
    content: string;
}
function OverviewSection({ content }: OverviewSectionProps) {
    return (
        <section>
            <h2>{content}</h2>
            Hello World
        </section>

    )
}

export default OverviewSection
