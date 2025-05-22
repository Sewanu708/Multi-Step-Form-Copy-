import React, { useState } from 'react'
import CommonInput from '../components/Form/CommonInput'
import { Locations } from '../components/Form'
import { useFormik } from 'formik'
import Card1 from '../components/Suggestion/Card1'
import Card2 from '../components/Suggestion/Card2'
import { useNavigate } from 'react-router'
const FormTest = ({ validate, initialValues, data, suggestions, type }) => {
    let path = type === 'position' ? '/success' : '/position'
    let errorCheck ;
    const Navigate = useNavigate()
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    if (type==='position'){
        path='/details';
        errorCheck=formik.errors.position
    }else{
        path='/position';
        errorCheck=formik.errors.location
    }
    const [comma, setComma] = useState(false)

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.includes(',')) {
            setComma(true)
        } else {
            setComma(false)
        }

        formik.handleChange(e)
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <CommonInput details={data} formik={formik} handleChange={handleInputChange} />
            {type === 'position' ? <Card2 data={suggestions} formik={formik} /> : <Card1 data={Locations} formik={formik} comma={comma} setComma={setComma} />}
            <div className='flex mt-8 justify-between '>
                <button
                    className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto  font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={type === '/position'}
                    type="submit"
                    onClick={() => { Navigate(-1) }}
                >
                    Prev
                </button>
                <button
                    className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={errorCheck}
                    type="submit"
                    onClick={() => {
                        Navigate(path)
                    }}
                >
                    Next
                </button>
            </div>
        </form>
    )
}

export default FormTest
