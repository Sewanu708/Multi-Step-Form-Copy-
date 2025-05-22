import React, { useContext, useEffect, useRef, useState } from 'react';
import { form_one, form_three, form_two } from '../components/Form';
import { MdCancel } from 'react-icons/md';
import { FaFile } from 'react-icons/fa';
import Form1_2 from '../components/Form/Form1_2';
import { myContext } from '../context';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.name || values.name.trim() === '') {
    errors.name = "Name is required";
  }
  if (!values.phone || !/^\d{10,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number (at least 10 digits)";
  }
  return errors;
};

const Details = () => {
  const { data, setData } = useContext(myContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: data?.Name || '',
      phone: data?.Phone || '',
      certification: data?.certification || ''
    },
    validate,
    onSubmit: values => {
      const updated = {
        ...data,
        Name: values.name,
        Phone: values.phone,
        certification: values.certification
      };
      setData(updated);
      localStorage.setItem('data', JSON.stringify(updated));
      navigate('/success');
    }
  });

  const fileInputRef = useRef(null);
  const fileInputLabelRef = useRef(null);
  const [fileInput, setFileInput] = useState('');

  useEffect(() => {
    const handleClick = () => {
      fileInputRef.current?.click();
    };

    const label = fileInputLabelRef.current;
    label?.addEventListener('click', handleClick);

    return () => {
      label?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Form1_2 item={form_one} data={data} />
      <Form1_2 item={form_two} data={data} />

      {form_three.map((item, index) => (
        <div key={index}>
          <div className='w-full flex items-center justify-between font-Roboto p-4 shadow-sm mt-4'>
            <div className='w-full flex items-center justify-start gap-x-4'>
              <label className='font-[700]' htmlFor={item.id}>
                {item.header}:
              </label>
              <input
                type={item.type}
                id={item.id}
                name={item.name}
                placeholder={item.placeholder}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='placeholder:text-[14px] w-full border-none outline-0'
              />
            </div>
          </div>
          {formik.touched[item.name] && formik.errors[item.name] && (
            <div className='text-start mt-2 mb-4 text-red-500'>
              {formik.errors[item.name]}
            </div>
          )}
        </div>
      ))}

      <div className='mt-4 w-full flex flex-col items-start justify-start'>
        <label htmlFor='certification' className='block font-[700] font-Roboto'>
          Certification{' '}
          <span className='font-[500] font-Roboto text-primary text-[14px]'>
            (optional)
          </span>
        </label>
        <div className='w-full border border-dashed h-[250px] flex items-center justify-center mt-2'>
          <input
            type='file'
            name='certification'
            id='certification'
            ref={fileInputRef}
            className='hidden'
            onChange={(e) => {
              setFileInput(e.target.files[0].name);
              formik.setFieldValue('certification', e.target.files[0].name);
            }}
          />
          <div
            className='cursor-pointer flex flex-col font-Roboto justify-center items-center gap-y-4'
            ref={fileInputLabelRef}
          >
            <FaFile color='#7B287D' size={100} />
            <div>
              {fileInput.length > 0 ? (
                fileInput
              ) : (
                <div className='inline'>
                  <span className='font-bold underline'>Click to upload</span>
                  <span> or drag and drop</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex mt-8 justify-between '>
        <button
          type='button'
          onClick={() => navigate(-1)}
          className='bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          Prev
        </button>
        <button
          type='submit'
          className='bg-main text-white px-4 py-2 rounded-xl cursor-pointer font-Roboto font-[600] transition-all duration-150 hover:bg-button disabled:bg-gray-400 disabled:cursor-not-allowed'
          disabled={
            !!formik.errors.name ||
            !!formik.errors.phone ||
            !formik.values.name.trim() ||
            !formik.values.phone.trim()
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Details;
