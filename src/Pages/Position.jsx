import React, { Fragment, useContext, useEffect, useState } from 'react'
import { form_two, Positions } from '../components/Form/index';
import CommonInput from '../components/Form/CommonInput';
import Card2 from '../components/Suggestion/Card2';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { myContext } from '../context';
import { motion } from 'framer-motion';
const validate = (values) => {
  const errors = {};
  if (!values.position || values.position.trim() === '') {
    errors.position = "This field is required";
  }

  return errors;
}

const Position = () => {
  const { data, setData } = useContext(myContext)
  const Navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      position: data?.position || ''
    },
    validate,
    onSubmit: values => {
      setData(prev => {
        const updated = { ...prev, position: values.position };
        sessionStorage.setItem('data', JSON.stringify(updated));
        return updated;
      });
      Navigate('/details')
    },


  })
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
    <form onSubmit={formik.handleSubmit}>
      <CommonInput details={form_two} formik={formik} handleChange={handleInputChange} />
      <Card2 data={Positions} formik={formik} />
      <div className='flex mt-8 justify-between '>
        <button
          className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto  font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"

          type="button"
          onClick={() => { Navigate(-1) }}
        >
          Prev
        </button>
        <button
          className=" bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 
             hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!!formik.errors.position || !formik.values.position.trim()}
          type="submit"
        >
          Next
        </button>
      </div>
    </form>

  )
}

export default Position
