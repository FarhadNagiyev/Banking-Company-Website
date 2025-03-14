import Input from "@/components/ui/Input";
import Link from "next/link";

export default function LoginForm() {
    return (
        <div className="2xl:space-y-[40px] md:space-y-[30px] space-y-[24px] w-full">
            <form
                className="2xl:space-y-[40px] md:space-y-[30px] space-y-[24px] w-full">
                <div className="flex lg:flex-row flex-col 2xl:space-x-[30px] md:space-x-[24px] space-y-[20px] w-full">
                    <Input placeholder="Enter your Email" />
                    <Input type="password" placeholder="Enter your Password" />
                </div>
            </form>
            <Link href="/auth" className="border-b-[1px] fluid-18 ">Forgot Password?</Link>
        </div>
    );
}