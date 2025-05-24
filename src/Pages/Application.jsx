import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import { Navigate } from 'react-router'
const Application = () => {
    
    return (
        <div>
            <Header/>
            <Outlet/>
        
        </div>
    )
}

export default Application