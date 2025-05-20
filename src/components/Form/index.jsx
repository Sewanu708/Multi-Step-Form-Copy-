import { BiCheck, BiLocationPlus, BiSearch } from "react-icons/bi"
import { CiLocationOn } from "react-icons/ci"

export const form_one = {
    name: 'location',
    placeholder: 'city,area...',
    id: "location",
    formType: 'input',
    type: 'text',
    header: 'Location',
    icon: <CiLocationOn size={20} color='black' className='cursor-pointer' />
}

export const form_two = {
    name: 'position',
    placeholder: 'job title, position',
    id: "position",
    formType: 'input',
    type: 'text',
    header: 'Roles',
    icon: <BiSearch size={20} color='black' className='cursor-pointer' />
}

export const form_three = [{
    name: 'name',
    placeholder: 'e.g John doe',
    id: "name",
    formType: 'input',
    type: 'text',
    header: 'Name',
    icon: <BiCheck size={20} color='black' className='cursor-pointer' />
}, {
    name: 'phone',
    placeholder: 'e.g 08022287813',
    id: "phone",
    formType: 'input',
    type: 'text',
    header: 'Phone',
    icon: <BiCheck size={20} color='black' className='cursor-pointer' />
}]