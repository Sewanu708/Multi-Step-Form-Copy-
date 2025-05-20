import React from 'react'
import Form from './Form'
import { CiLocationOn } from "react-icons/ci";
import { MdCancel } from 'react-icons/md';
const CommonInput = ({ details, handleOnChange, inputValue, setInputValue }) => {

    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-between font-Roboto p-4 shadow-sm mt-4'>
                <div className='w-full flex items-center justify-start gap-x-4'>
                    <label className='font-[700]' id={details.id}>{details.header}:</label>
                    <input onChange={(e) => handleOnChange(e.target.value)} type={details.type} htmlFor={details.id} placeholder={details.placeholder} required className='placeholder:text-[14px] w-full border-none outline-0'
                        value={inputValue}
                    />
                </div>
                {
                    inputValue.trim().length > 0 ? <MdCancel size={20} color='black' className='cursor-pointer' onClick={() => setInputValue('')} /> : details.icon
                }

            </div>

        </div>

    )
}

export default CommonInput