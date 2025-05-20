import React, { useEffect, useState } from 'react'
import { BsCurrencyEuro } from 'react-icons/bs'
import { CiMoneyBill } from 'react-icons/ci'
import { useRef } from 'react'
const Suggestion = ({ data, handleOnClick, inputValue, setInputValue, path }) => {
    useEffect(() => {
        if (inputValue.trim() === "") {
            setSelectedJob(null)
        }
    }, [inputValue])
    const [selectedJob, setSelectedJob] = useState(null)
    const handleRadio = (value) => {
        setInputValue(value)
        setSelectedJob(value)
    }

    let details
    if (path === '/') {
        details = <div className='w-full h-auto flex gap-4 flex-wrap '>
            {data.slice(0, 10)
                .filter(item => item.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
                .map((item, index) => (
                    <p key={index} className='text-center  shadow-sm cursor-pointer px-4 py-2' onClick={handleOnClick}>
                        {item}
                    </p>
                ))}
        </div>
    } else {
        const filteredJobs = data.filter(item => item.title.toLocaleLowerCase().includes(inputValue.trim().toLocaleLowerCase()))
        const jobsToDisplay = inputValue.trim().length > 0 ? [...filteredJobs].sort(() => 0.5 - Math.random()) : [...data].sort(() => 0.5 - Math.random()).slice(0, 4);
        details = <div className='w-full h-auto flex gap-4 flex-wrap'>

            {
                jobsToDisplay.map((item, index) => <div key={index} className='max-w-[360px] h-auto shadow-sm  p-4 flex items-start flex-col gap-y-4 font-Roboto relative' onClick={() => handleRadio(item.title)}>
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
                        <input type="radio" name="job" id={`job${index}`} checked={selectedJob === item.title} onChange={() => handleRadio(item.title)} />
                        <label htmlFor={`job${index}`} className='job__label'>
                            <span className='job__label-span'></span>
                        </label>
                    </div>
                </div>)
            }


        </div>
    }

    return (
        details
    )
}

export default Suggestion