import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context'
import { useLocation } from 'react-router'
import { BiCheck } from 'react-icons/bi'
const Header = () => {
    const { data } = useContext(myContext);
    const Location = useLocation()
    const helperFunction = (pathname, completed, number) => {
        const isCurrent = Location.pathname === pathname;

        if (isCurrent) {
            return {
                label: 'text-main',
                circle: 'bg-main text-white',
                content: number
            }
        }
        if (completed) {
            return {
                label: 'text-black',
                circle: 'bg-checked text-white',
                content: <BiCheck color='black' />
            }
        }
        return {
            label: 'text-primary',
            circle: 'bg-primary text-white',
            content: number
        }
    }
    const location = helperFunction('/', data.location, '1')
    const position = helperFunction('/position', data.position, '2')
    const details = helperFunction('/details', data.Name, '3')
    return (
        <div className='w-full flex flex-col sm:flex-row sm:items-center sm:justify-between items-start justify-center gap-4'>
            <div className='flex gap-2 md:gap-x-4 items-center justify-center font-Roboto'>
                <div className={`w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center font-[700] rounded-full ${location.circle}`}>{location.content}</div>
                <div className={` font-[700] md:text-[16px] text-[14px] ${location.label}`}>Job Location</div>
            </div>
            <div className='w-[10%] h-[1px] hidden sm:block bg-primary'> </div>
            <div className='flex gap-x-2 items-center justify-center font-Roboto'>
                <div className={`w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center font-[700] rounded-full ${position.circle}`}>{position.content}</div>
                <div className={` font-[700] md:text-[16px] text-[14px] ${position.label}`}>Job Position</div>
            </div>
            <div className='w-[10%] h-[1px] hidden sm:block  bg-primary'> </div>
            <div className='flex gap-x-2 items-center justify-center font-Roboto'>
                <div className={`w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center font-[700] rounded-full ${details.circle}`}>{details.content}</div>
                <div className={` font-[700] md:text-[16px] text-[14px]  ${details.label}`}>Personal Details</div>
            </div>
        </div>
    )
}

export default Header