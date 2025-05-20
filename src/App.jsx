import { useState } from 'react'
import './App.css'
import { Location, Success, Application, Position, Details } from './Pages/index'
import { Route, Routes } from 'react-router'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Application />}>
        <Route index element={<Location />} />
        <Route path='/details' element={<Details />} />
        <Route path='/position' element={<Position />} />
        <Route path='/success' element={<Success />} />
      </Route>
    </Routes>
  )
}

export default App
