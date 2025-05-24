import React from 'react'
import { Location, Success, Application, Position, Details, Preview } from '../Pages/index'
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
                    <Route path='/preview' element={<Preview />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes