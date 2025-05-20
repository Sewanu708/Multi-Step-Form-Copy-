import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import { Navigate } from 'react-router'
const Application = () => {
    
    return (
        <div>
            <Header/>
            <Outlet/>
            <div>
                <button></button>
            </div>
        </div>
    )
}

export default Application