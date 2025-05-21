import React, { useEffect, useState } from 'react'
import { BsCurrencyEuro } from 'react-icons/bs'
import { CiMoneyBill } from 'react-icons/ci'
import { useRef } from 'react'
const Suggestion = ({ data, handleOnClick, inputValue, setInputValue, path, comma, setComma }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        city: '', area: ''
    })
    useEffect(() => {
        if (inputValue.trim() === "") {
            setSelectedJob(null)
        }
    }, [inputValue])
    useEffect(() => {
        if (inputValue.trim() === "") {
            setSelectedLocation({
                city: '', area: ''
            })
        }
    }, [inputValue])
    const [selectedJob, setSelectedJob] = useState(null)
    const handleRadio = (value) => {
        setInputValue(value)
        setSelectedJob(value)
    }

    let details
    if (path === '/') {
        const inputData1 = inputValue?.split(',')[0].trim()
        const inputData2 = inputValue?.split(',')[1]?.trim()
        let dataToDisplay;
        if (comma && inputData1) {
            const inputData = inputValue.split(',')[0].trim()
            dataToDisplay = data[inputData] || []
        } else {
            dataToDisplay = Object.keys(data)
            setComma(false)
            
            
        }
        const filterText = comma ? inputData2 : inputData1;
        const filteredText = filterText ? dataToDisplay?.filter(item => item.toLocaleLowerCase().includes((comma ? inputData2 : inputData1).toLocaleLowerCase())) : dataToDisplay
        console.log(filteredText);

        details = <div className='w-full h-auto flex gap-4 flex-wrap '>
            {filteredText?.map((item, index) => (
                <p key={index} className='text-center  shadow-sm cursor-pointer px-4 py-2' onClick={(e) => {
                    let updatedLocation;
                    if (comma) {
                        setSelectedLocation(prev => ({ ...prev, area: e.target.innerText }))
                        updatedLocation = `${selectedLocation?.city} , ${e.target.innerText}`
                    } else {
                        setSelectedLocation(prev => ({ ...prev, city: e.target.innerText }))
                        updatedLocation = `${e.target.innerText},`
                        setComma(true)
                    }

                    handleOnClick(updatedLocation)
                }}>
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