import Mapper from '@/components/Mapper'
import React from 'react'
import { releaseCardContent } from '../../data/contents'
import ReleaseCard from '../ReleaseCard'

function ReleaseCards() {
    return (
        <div>
            <Mapper ulStyle='grid lg:grid-cols-2 gap-[clamp(20px,3vw,30px)]' array={releaseCardContent}>
                {(item) =>
                    <ReleaseCard content={item} />
                }
            </Mapper>
        </div>
    )
}

export default ReleaseCards
