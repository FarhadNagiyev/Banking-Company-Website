import GoogleAuthButton from "@/features/AuthSection/ui/GoogleAuthButton";
import IcloudAuthButton from "@/features/AuthSection/ui/IcloudAuthButton";
import FacebookAuthButton from "@/features/AuthSection/ui/FacebookAuthButton";
import FormButtons from "./ui/FormButtons";
import Divider from "@/components/ui/Divider";
import AuthSectionHeading from "./ui/AuthSectionHeading";
import Form from "./ui/Form";
type AuthSectionProps = {
    children: React.ReactNode;
}
function AuthSection({ children }: AuthSectionProps) {
    return (
        <div className="custom-flex-center custom-container 2xl:my-[100px] md:my-[60px] space-y-[60px] 2xl:space-y-[100px]">
            <section className="flex flex-col items-center text-center justify-center custom-container
                                2xl:py-[100px] md:py-[80px] py-[30px]
                                2xl:space-y-[80px] md:space-y-[60px] space-y-[40px]
                                bg-grey-11 custom-border rounded-[20px] w-full">

                <AuthSectionHeading />

                <div className="flex flex-col items-center text-center w-full">
                    <div className="flex flex-col items-center text-center 2xl:space-y-[40px] md:space-y-[30px] space-y-[24px] w-full">
                        <Form>
                            {children}
                        </Form>
                        <div className="flex flex-col w-full md:w-1/2 2xl:gap-[24px] gap-[20px]">
                            <FormButtons />
                            <Divider variant="between">Or Continue with</Divider>
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
    )
}

export default AuthSection
