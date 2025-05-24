import React, { useContext, useState } from 'react'
import CommonInput from '../components/Form/CommonInput';
import { form_one } from '../components/Form/index';
import { Locations } from '../components/Form/index';
import { useFormik } from 'formik';
import Card1 from '../components/Suggestion/Card1';
import { useLocation, useNavigate } from 'react-router';
import { myContext } from '../context';
import { motion } from 'framer-motion';
const validate = (values) => {
  const errors = {};
  if (!values.location || !/^[a-zA-Z\s]+\s*,\s*[a-zA-Z\s]+$/.test(values.location)) {
    errors.location = 'Please add your area in the format "city, area"';
  }

  return errors;
}
const Location = () => {
  const { data, setData } = useContext(myContext)
  const locale = useLocation()
  const Navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      location: data?.location || ''
    },
    validate,
    onSubmit: values => {
      setData(prev => {
        const updated = { ...prev, location: values.location };
        sessionStorage.setItem('data', JSON.stringify(updated));
        return updated;
      });
      Navigate('/position')
    },
  });

  const [comma, setComma] = useState(false);
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <CommonInput details={form_one} formik={formik} handleChange={handleInputChange} />
        <Card1 data={Locations} formik={formik} comma={comma} setComma={setComma} />
        <div className='flex mt-8 justify-between '>
          <button
            className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto opacity-0 font-[600] transition-all duration-150 
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
            disabled={
              !!formik.errors.location || !formik.values.location.trim()
            }
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>

  )
}

export default Location