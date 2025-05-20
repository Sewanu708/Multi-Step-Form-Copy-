import React, { useContext, useEffect, useRef } from 'react'
import { form_one, form_three, form_two } from './index'
import { useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'
import Form1_2 from './Form1_2'
import { myContext } from '../../context'
import { useNavigate } from 'react-router'
const Form3 = () => {
    const { data, setData } = useContext(myContext)
    const [inputValue, setInputValue] = useState({
        name: '', phone: ''
    });
    const handleOnChange = (field, value) => {
        setInputValue(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        setData(prev => ({ ...prev, Name: inputValue.name, Phone: inputValue.phone }))
        Navigate('/success')
         
    }
    const fileInputRef = useRef(null);
    const fileInputLabelRef = useRef(null);

    const [fileInput, setFileInput] = useState('')
    const Navigate = useNavigate(null)
    useEffect(() => {
        const handleClick = () => {
            fileInputRef.current.click()
        }
        if (fileInputLabelRef.current) {
            fileInputLabelRef.current.addEventListener('click', handleClick)
        }

        return () => {

            if (fileInputLabelRef.current) {
                fileInputLabelRef.current.removeEventListener('click', handleClick)
            }
        }
    }, [])
    return (
        <form onSubmit={handleSubmit}>
            <Form1_2 item={form_one} data={data} />
            <Form1_2 item={form_two} data={data} />

            {
                form_three.map((item, index) => {
                    return (
                        <div key={index} className='w-full flex items-center justify-between font-Roboto p-4 shadow-sm mt-4'>
                            <div className='w-full flex items-center justify-start gap-x-4'>
                                <label className='font-[700]' id={item.id}>{item.header}:</label>
                                <input onChange={(e) => handleOnChange(item.id, e.target.value)}
                                    type={item.type}
                                    htmlFor={item.id}
                                    placeholder={item.placeholder}
                                    value={inputValue[item.id]}
                                    required
                                    className='placeholder:text-[14px] w-full border-none outline-0'
                                />
                            </div>
                        </div>)
                })
            }
            <div className='mt-4 w-full flex flex-col items-start justify-start'>
                <label htmlFor="certification" className='block font-[700] font-Roboto'> Certification <span className=' font-[500] font-Roboto text-primary text-[14px]'>(optional)</span></label>
                <div className='w-full border border-dashed h-[250px] flex items-center justify-center mt-2'>
                    <input type="file" name="certification" id="certification" ref={fileInputRef} className='hidden'
                        onChange={(e) => setFileInput(e.target.files[0].name)}
                    />
                    <div className=' cursor-pointer flex flex-col font-Roboto justify-center items-center gap-y-4' ref={fileInputLabelRef}>
                        <FaFile color='#7B287D' size={100} />
                        <div>{fileInput.length > 0 ? fileInput : <div className='inline'>
                            <span className='font-bold underline'>Click to upload</span><span> or drag and drop</span></div>}</div>
                    </div>
                </div>

            </div>
            <div className='flex mt-8 justify-between '>
                <button
                    className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"
                    onClick={() => { Navigate(-1) }}
                >
                    Prev
                </button>
                <button
                    className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={
                        inputValue.name.trim() === '' || inputValue.phone.trim() === ''
                    }
                    type="submit"

                >
                    Submit
                </button>
            </div>
        </form >
    )
}

export default Form3