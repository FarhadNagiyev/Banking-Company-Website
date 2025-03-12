
import Mapper from "@/components/Mapper";
import { FooterContentItem } from "../../types/types";
import Icon from "@/components/Icon";
import Link from "next/link";
import { content } from "@/features/Footer/data/contents"


function SocialAccounts() {
    return (
        <Mapper
            array={content.socialAccounts}
            ulStyle="flex 2xl:gap-[14px] gap-[8px] relative top-[-50px] md:top-0"
            liStyle="bg-green-60 p-[12px] 2xl:p-[14px] rounded-full custom-flex-center"
        >
            {(item: FooterContentItem) => (
                <Link href={item.linkhref}>
                    <Icon src={item.imgurl} alt={item.text} variant="mini" />
                </Link>

            )}
        </Mapper>
    );
}

export default SocialAccounts;
