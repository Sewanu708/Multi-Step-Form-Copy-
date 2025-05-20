import React, { useContext, useState } from 'react'
import CommonInput from './CommonInput'
import { myContext } from '../../context'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import Suggestion from '../Suggestion'
const Form = ({ Locations, details }) => {
    const Navigate = useNavigate()
    const locale = useLocation();
    let dataToBeSaved;
    if (locale.pathname === '/') {
        dataToBeSaved = 'location'
    } else if (locale.pathname === '/position') {
        dataToBeSaved = 'position'
    } else {
        dataToBeSaved = 'personal'
    }
    const paths = ['/', '/position', '/details', '/success']
    const nextPath = paths.indexOf(locale.pathname) + 1
    const { data, setData } = useContext(myContext)
    console.log(locale.pathname);
    const [inputValue, setInputValue] = useState('');
    const handleOnChange = (value) => {
        setInputValue(value)
    }
    const handleOnClick = (value) => {
        setInputValue(value.target.innerText)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <form className='flex gap-y-4 flex-col' onSubmit={handleSubmit}>
            <CommonInput details={details} handleOnChange={handleOnChange} inputValue={inputValue} setInputValue={setInputValue} />
            <p className='font-Roboto uppercase text-start font-[600] text-[14px]'>Suggestions</p>
            <Suggestion data={Locations} handleOnClick={handleOnClick} inputValue={inputValue} path={locale.pathname} setInputValue={setInputValue} />
            <div className='flex mt-8 justify-between '>
                <button
                    className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={locale.pathname === '/'}
                    type="submit"
                    onClick={() => { Navigate(-1) }}
                >
                    Prev
                </button>
                <button
                    className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={inputValue.length === 0}
                    type="submit"
                    onClick={() => {
                        Navigate(paths[nextPath])
                        setData(prev => ({ ...prev, [dataToBeSaved]: inputValue}))
                    }}
                >
                    Next
                </button>
            </div>
        </form>

    )
}

export default Form