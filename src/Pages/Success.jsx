import React, { useContext, useEffect, useState } from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { CircularProgress } from '@mui/material'
const Success = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => { setDisplay(true) }, 8000)
  }, [])

  // const success = <div className="m-auto h-[75vh] flex flex-col items-center justify-center px-4 text-center">
  //   <div className="flex flex-col items-center justify-center">
  //     <FaRegThumbsUp className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-[#7B287D]" />

  //     <p className="font-Roboto font-bold text-[1.625rem] sm:text-[1.75rem] text-gray-700 mt-4">
  //       We've received your application!
  //     </p>
  //     <p className="font-Roboto text-[1rem] sm:text-[1.125rem] text-gray-700 mt-2">
  //       We will process it and reach out to you within five working days.
  //     </p>
  //   </div>
  // </div>

  return (
    <div className="m-auto h-[75vh] flex flex-col items-center justify-center px-4 text-center">
      {display ? <div className="flex flex-col items-center justify-center">
        <FaRegThumbsUp className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-[#7B287D]" />

        <p className="font-Roboto font-bold text-[1.625rem] sm:text-[1.75rem] text-gray-700 mt-4">
          We've received your application!
        </p>
        <p className="font-Roboto text-[1rem] sm:text-[1.125rem] text-gray-700 mt-2">
          We will process it and reach out to you within five working days.
        </p>
      </div> : <CircularProgress size="5rem" color='#7B287D'/>}
    </div>

  )
}

export default Success