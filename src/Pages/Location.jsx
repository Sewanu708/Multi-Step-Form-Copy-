import React from 'react'
import Form from '../components/Form/Form'
import { form_one } from '../components/Form/index';
const Location = () => {
  const Locations = {
    "Lagos": ["Ikeja", "Yaba", "Lekki", "Victoria Island", "Ajah", "Surulere", "Ikoyi", "Agege", "Mushin", "Ikorodu", "Maryland", "Festac", "Oshodi", "Ojota", "Badagry", "Ogba"],
    "Abuja": ["Garki", "Wuse", "Maitama", "Asokoro", "Utako", "Gwarinpa", "Lokogoma", "Lugbe", "Karu", "Jabi", "Kubwa", "Nyanya"],
    "Port Harcourt": ["GRA", "D-Line", "Trans-Amadi", "Rumuola", "Rumuokoro", "Mgbuoba", "Elekahia", "Obio-Akpor", "Oyigbo", "Choba"],
    "Ibadan": ["Bodija", "Mokola", "Dugbe", "Jericho", "Ring Road", "Challenge", "Eleyele", "UI", "Apata", "Iwo Road"],
    "Kano": ["Tarauni", "Nassarawa", "Sabon Gari", "Fagge", "Bompai", "Kofar Ruwa", "Kumbotso", "Gidan Murtala"],
    "Enugu": ["Independence Layout", "New Haven", "Achara Layout", "GRA", "Coal Camp", "Abakpa", "Thinkers Corner"],
    "Benin City": ["Uselu", "Ikpoba Hill", "GRA", "Ugbowo", "Oredo", "New Benin", "Sapele Road"]
  };

  return (
    <Form Locations={Locations} details={form_one} />
  )
}

export default Location