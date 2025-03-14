
import AuthSection from "@/features/AuthSection/AuthSection.container";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthSection>
            {children}
        </AuthSection>
    );
}