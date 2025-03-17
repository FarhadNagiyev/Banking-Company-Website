
import { redirect } from "next/navigation";

export default function AuthPage() {
    const session = false;
    if (!session) {
        redirect("/auth/login")
    }
    return (
        <div></div>
    );
}