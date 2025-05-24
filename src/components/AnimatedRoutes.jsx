import React from 'react'
import { Location, Success, Application, Position, Details } from '../Pages/index'
import { Route, Routes, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Application />}>
                    <Route index element={<Location />} />
                    <Route path='/details' element={<Details />} />
                    <Route path='/position' element={<Position />} />
                    <Route path='/success' element={<Success />} />

                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes