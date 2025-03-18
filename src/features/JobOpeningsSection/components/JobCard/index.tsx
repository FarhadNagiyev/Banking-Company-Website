import Icon from '@/components/Icon';
import Mapper from '@/components/Mapper';
import Link from 'next/link';
import React from 'react'
import { JobCardType } from '../../types/types';


function JobCard({ content }: { content: JobCardType }) {
    const { id, position, location, department, about, requirementsAndQualifications } = content;
    return (
        <div className='flex flex-col h-full justify-between gap-[clamp(30px,5vh,50px)] p-fluid-50  bg-grey-11 custom-border rounded-[1rem]'>
            <div className='space-y-[clamp(30px,4vh,50px)]'>
                <div className='  space-y-[clamp(10px,1vh,14px)]'>
                    <Position title={position} />
                    <div className='flex flex-wrap gap-[clamp(6px,1vw,10px)] font-light text-grey-70'>
                        <Location place={location} />
                        <Department name={department} />
                    </div>
                </div>

                <div className='flex-1 min-h-0 space-y-[clamp(30px,3vh,40px)]'>
                    <About description={about} />
                    <RequirementsAndQualifications requirements={requirementsAndQualifications} />
                </div>
            </div>
            <div>
                <ApplyNowButton id={id} />
            </div>
        </div>
    )
}

export default JobCard
const Position = ({ title }: { title: string }) => {
    return (<h3 className='fluid-30 font-semibold'>{title}</h3>)
}
const Location = ({ place }: { place: string }) => {
    return (
        <div className='flex flex-wrap min-w-min max-w-max px-[clamp(10px,1vw,16px)] py-[clamp(6px,1vh,8px)] rounded-[68px] bg-grey-10 custom-border'>
            <div>
                Location:
            </div>
            <div>
                {place}
            </div>
        </div>
    )
}
const Department = ({ name }: { name: string }) => {
    return (
        <div className='flex flex-wrap min-w-min max-w-max px-[clamp(10px,1vw,16px)] py-[clamp(6px,1vh,8px)] rounded-[68px] bg-grey-10 custom-border'>
            <div>
                Department:
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}
const About = ({ description }: { description: string }) => {
    return (
        <div className="space-y-[clamp(8px,2vh,20px)]">
            <h4 className='fluid-24 font-semibold '>About This Job</h4>
            <p className='fluid-18 font-light text-grey-70'>
                {description}
            </p>
        </div>
    )
}
const RequirementsAndQualifications = ({ requirements }: { requirements: string[] }) => {
    return (
        <div className='space-y-[clamp(10px,2vh,20px)]'>
            <h4 className='fluid-24 font-semibold flex flex-wrap'>
                Requirements & Qualifications
            </h4>
            <Mapper ulStyle='space-y-[clamp(14px,1.5vh,20px)]' array={requirements}>
                {
                    (item: string) => (
                        <div className='flex items-center gap-[clamp(6px,1vw,8px)] text-grey-70'>
                            <Icon alt='bag' src='/bag.svg' variant='mini' />
                            {item}
                        </div>
                    )
                }
            </Mapper>

        </div>
    )
}
const ApplyNowButton = ({ id }: { id: string }) => {
    return (
        <Link
            href={`/careers/job/${id}`}
            className='fluid-18 px-[clamp(20px,3vw,30px)] py-[clamp(12px,2vh,1rem)] text-grey-11 bg-green-60 custom-rounded font-medium' >
            Apply Now
        </Link>
    )
}