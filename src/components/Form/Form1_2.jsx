import React from 'react'
import { BiCheck } from 'react-icons/bi'
const Form1_2 = ({ item, data }) => {
    return (
        <div className='w-full flex items-center justify-between font-Roboto p-4 shadow-sm mt-4'>
            <div className='w-full flex items-center justify-start gap-x-4'>
                <label className='font-[700]' id={item.id}>{item.header}:</label>
                <input type={item.type} htmlFor={item.id} placeholder={item.placeholder}
                    value={data[item.id]} required className='placeholder:text-[14px] w-full border-none outline-0'
                readOnly/>
            </div>
            {
                <BiCheck color='#7B287D' />
            }

        </div>
    )
}

export default Form1_2