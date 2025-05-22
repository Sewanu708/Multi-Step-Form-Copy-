import React, { useState } from 'react'

const Card1 = ({ data, formik, comma, setComma }) => {
    const inputData1 = formik.values.location?.split(',')[0].trim()
    const inputData2 = formik.values.location?.split(',')[1]?.trim()
    let dataToDisplay;
    const [selectedLocation, setSelectedLocation] = useState({
        city: '', area: ''
    })
    if (comma && inputData1) {
        const inputData = formik.values.location?.split(',')[0].trim()
        dataToDisplay = data[inputData] || []
    } else {
        dataToDisplay = Object.keys(data)
        setComma(false)
    }
    const filterText = comma ? inputData2 : inputData1;
    const filteredText = filterText ? dataToDisplay?.filter(item => item.toLocaleLowerCase().includes((comma ? inputData2 : inputData1).toLocaleLowerCase())) : dataToDisplay
    console.log(filteredText);
    return (
        <div className='w-full h-auto flex gap-4 flex-wrap '>
            {filteredText?.map((item, index) => (
                <p key={index} className='text-center  shadow-sm cursor-pointer px-4 py-2' onClick={(e) => {
                    let updatedLocation;
                    if (comma) {
                        setSelectedLocation(prev => ({ ...prev, area: e.target.innerText }))
                        updatedLocation = `${selectedLocation?.city} , ${e.target.innerText}`
                        formik.setFieldValue('location', updatedLocation)
                    } else {
                        setSelectedLocation(prev => ({ ...prev, city: e.target.innerText }))
                        updatedLocation = `${e.target.innerText},`
                        formik.setFieldValue('location', updatedLocation)
                        setComma(true)
                    }

                    // handleOnClick(updatedLocation)
                }}>
                    {item}
                </p>
            ))}
        </div>

    )
}

export default Card1

