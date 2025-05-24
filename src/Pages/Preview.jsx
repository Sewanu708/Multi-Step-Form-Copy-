import React, { Fragment, useContext, useEffect, useState } from 'react'
import { myContext } from '../context'
import { form_one, form_three, form_two } from '../components/Form';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router';
import { BiCheck } from 'react-icons/bi';
import Form1_2 from '../components/Form/Form1_2';
function Preview() {
    const { data } = useContext(myContext);
    const navigate = useNavigate()
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => { setDisplay(true) }, 2000)
    }, [])
    const success = <Fragment><div className="m-auto h-[75vh] flex flex-col items-center justify-center px-4 text-center">
        <Form1_2 item={form_one} data={data} />
        <Form1_2 item={form_two} data={data} />
        {form_three.map((item, index) => <Form1_2 item={item} data={data} />)}
        <div className='w-full flex items-center justify-between font-Roboto p-4 shadow-sm mt-4'>
            <div className='w-full flex items-center justify-start gap-x-4'>
                <label className='font-[700]' id='certification'>Certification:</label>
                <input type='text' htmlFor='certification'
                    defaultValue={data?.certification} className='placeholder:text-[14px] w-full border-none outline-0'
                    readOnly />
            </div>
            {
                <BiCheck color='#7B287D' />
            }

        </div>
    </div>
        <div className='flex mt-2 justify-between '>
            <button
                className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto  font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"

                type="button"
                onClick={() => { navigate(-1) }}
            >
                Prev
            </button>
            <button
                className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={() => { navigate('/success') }}
            >
                Submit
            </button>
        </div></Fragment>
    return (

        <div>
            {display ? success : <div className="m-auto h-[75vh] flex flex-col items-center justify-center px-4 text-center"><CircularProgress size="5rem" sx={{ color: '#7B287D' }} /></div>}
        </div>
    );


}

export default Preview