import Input from "@/components/ui/Input";
import Link from "next/link";

export default function SignUpForm() {
    return (
        <div className="2xl:space-y-[40px] md:space-y-[30px] space-y-[24px] w-full">
            <form
                className="2xl:space-y-[40px] md:space-y-[30px] space-y-[24px] w-full">
                <div className="grid md:grid-cols-2  2xl:gap-7.5 md:gap-x-6 md:gap-y-6 gap-5 w-full">
                    <Input placeholder="Enter First Name" />
                    <Input placeholder="Enter Last Name" />
                    <Input placeholder="Enter your Email" />
                    <Input type="password" placeholder="Enter your Password" />
                </div>
            </form>
            <Link href="/auth" className="border-b-[1px] fluid-18 ">Forgot Password?</Link>
        </div>
    );
}