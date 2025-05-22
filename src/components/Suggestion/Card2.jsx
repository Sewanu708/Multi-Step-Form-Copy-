import React, { useState } from 'react'
import { CiMoneyBill } from 'react-icons/ci'
const Card2 = ({ data, formik }) => {
    const [selectedJob, setSelectedJob] = useState(null)
    const handleRadio = (e, value) => {
        setSelectedJob(value)
        formik.setFieldValue('position', value)
    }
    const inputValue = formik.values.position;
    const filteredJobs = data.filter(item => item.title.toLocaleLowerCase().includes(inputValue.trim().toLocaleLowerCase()))
    const jobsToDisplay = inputValue.trim().length > 0 ? [...filteredJobs] : [...data].slice(0, 4);
    return (
        <div className='w-full h-auto flex gap-4 flex-wrap'>

            {
                jobsToDisplay.map((item, index) => <div key={index} className='max-w-[360px] h-auto shadow-sm  p-4 flex items-start flex-col gap-y-4 font-Roboto relative' onClick={(e) => handleRadio(e, (item.title))}>
                    <div className='text-[20px] w-[80%] font-[700] text-gray-600 text-start'>
                        {item.title}
                    </div>
                    <div className='text-start line-clamp-2 text-gray-600 font-medium text-[14px]'>
                        {item.description}
                    </div>


                    <div className='flex items-center bg-primary px-2 py-1 gap-2 font-bold text-gray-800'>
                        <CiMoneyBill /> from £{item.salary_from} per annum
                    </div>
                    <div className='absolute right-4'>
                        <input type="radio" name="job" id={`job${index}`} checked={selectedJob === item.title || inputValue === item.title} onChange={(e) => handleRadio(e, item.title)} />
                        <label htmlFor={`job${index}`} className='job__label'>
                            <span className='job__label-span'></span>
                        </label>
                    </div>
                </div>)
            }


        </div>)


}

export default Card2