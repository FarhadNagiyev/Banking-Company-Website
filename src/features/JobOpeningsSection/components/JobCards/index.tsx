import Mapper from '@/components/Mapper'
import React from 'react'
import JobCard from '../JobCard'
import { jobCards } from '../../data/contents'

function JobCards() {
    return (
        <Mapper ulStyle="grid lg:grid-cols-2 gap-[clamp(20px,2vw,30px)]" array={jobCards} >
            {
                (item) => <JobCard content={item} />
            }
        </Mapper>
    )
}

export default JobCards
