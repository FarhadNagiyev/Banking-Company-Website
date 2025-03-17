
import AuthSection from "@/features/AuthSection/AuthSection.container";
import OurTestimonialsSection from "@/features/OurTestimonialsSection/container";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="2xl:my-[100px] md:my-[60px] space-y-[20px] md:space-y-[60px] 2xl:space-y-[100px]">
            <AuthSection>
                {children}
            </AuthSection>
            <OurTestimonialsSection />

        </div>
    );
}