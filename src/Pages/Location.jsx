import React from 'react'
import Form from '../components/Form/Form'
import { form_one } from '../components/Form/index';
const Location = () => {
  const Locations = [
          "London", "Manchester", "Liverpool", "Birmingham", "Leeds", "Newcastle",
          "Bristol", "Sheffield", "Southampton", "Nottingham",
          "Edinburgh", "Glasgow", "Aberdeen", "Dundee",
          "Cardiff", "Swansea", "Newport",
          "Belfast", "Derry", "Lisburn"
      ];
  return (
    <Form Locations={Locations} details={form_one}/>
  )
}

export default Location