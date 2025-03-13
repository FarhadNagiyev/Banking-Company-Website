
import Link from "next/link";
import Input from "@/components/ui/Input";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionHeader from "@/components/ui/SectionHeader"
import GoogleAuthButton from "@/features/AuthSection/ui/GoogleAuthButton";
import IcloudAuthButton from "@/features/AuthSection/ui/IcloudAuthButton";
import FacebookAuthButton from "@/features/AuthSection/ui/FacebookAuthButton";




export default function AuthPage() {
    return (
        <div className="custom-flex-center">
            <section className="
            flex
            flex-col
            items-center
            text-center
            justify-between
            2xl:px-[150px] 2xl:py-[100px] lg:px-[50px] p-[20px]
            bg-grey-11 custom-border rounded-[20px]
            2xl:space-y-[80px] md:space-y-[60px] space-y-[40px]
            mb-10">


                <SectionHeader
                    heading="Login"
                    description="Welcome back! Please log in to access your account."
                    className="items-center text-center 2xl:gap-[20px] md:gap-4 gap-2.5" />

                <div className="
                flex
                flex-col
                items-center
                text-center">
                    <div className="
                    flex
                    flex-col
                    items-center
                    text-center
                    2xl:space-y-[40px] md:space-y-[30px] space-y-[24px]
                    ">
                        <form
                            className="2xl:space-y-[40px] md:space-y-[30px] space-y-[24px]">
                            <div className="flex md:flex-row flex-col 2xl:space-x-[30px] md:space-x-[24px] space-x-0">
                                <Input placeholder="Enter your Email" />
                                <Input type="password" placeholder="Enter your Password" />
                            </div>
                            <Link href="/auth" className="border-b-[1px] fluid-18 ">Forgot Password?</Link>
                        </form>

                        <div className="flex flex-col 2xl:w-96 2xl:gap-[24px] gap-[20px]">
                            <PrimaryButton className="rounded-[63px]">
                                Login
                            </PrimaryButton>
                            <PrimaryButton className="bg-grey-15 text-white">
                                <Link href="auth">
                                    Signup
                                </Link>
                            </PrimaryButton>
                        </div>
                        <div className="flex justify-center items-center gap-[20px]">
                            <div className="h-[1px] min-w-[20px] bg-grey-70"></div>
                            <div className="min-w-max fluid-18 text-grey-70">
                                Or Continue with
                            </div>
                            <div className="h-[1px] min-w-[20px] bg-grey-70"></div>
                        </div>
                        <div className="flex justify-center items-center 2xl:space-x-[24px] space-x-[20px]">
                            <GoogleAuthButton />
                            <FacebookAuthButton />
                            <IcloudAuthButton />

                        </div>
                    </div>



                </div>
            </section>
        </div>
    );
}