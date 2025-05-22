import React from 'react'   
import { CiLocationOn } from "react-icons/ci";
import { MdCancel } from 'react-icons/md';
const CommonInput = ({ details, formik, handleChange }) => {
    return (
        <div className='w-full mb-4'>
            <div className='w-full flex items-center justify-between font-Roboto p-4 shadow-sm mt-4'>
                <div className='w-full flex items-center justify-start gap-x-4'>
                    <label className='font-[700]' htmlFor={details.id} id={details.id}>{details.header}:</label>
                    <input onChange={handleChange} type={details.type} id={details.id}
                        name={details.name} placeholder={details.placeholder} required className='placeholder:text-[14px] w-full border-none outline-0'
                        value={formik.values[details.id]}   
                    />
                </div>
                {
                    formik.values[details.id]?.trim().length > 0 ? <MdCancel size={20} color='black' className='cursor-pointer' onClick={() => formik.setFieldValue(details.id, '')} /> : details.icon
                }

            </div>
            {formik.errors[details.name] && (
                <div className="text-start mt-2 mb-4 text-red-500">{formik.errors[details.name]}</div>
            )}


        </div>

    )
}

export default CommonInput