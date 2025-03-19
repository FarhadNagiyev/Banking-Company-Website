import Mapper from "@/components/Mapper"
import { securityCards } from "../../data/contents"
import SecurityCard from "../SecurityCard"


function SecurityCards() {
    return (
        <div className="rounded-t-[50px] rounded-b-[20px] lg:px-[clamp(0px,10vw,100px)]  lg:bg-grey-11 lg:mb-[clamp(0px,7vw,100px)]">

            <Mapper
                ulStyle="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,2.5vw,30px)] lg:top-[clamp(0px,10vh,100px)] md:relative"
                array={securityCards}>
                {
                    (item) => <SecurityCard content={item} />
                }
            </Mapper>
        </div>
    )
}

export default SecurityCards
