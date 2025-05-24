import { createContext, useEffect, useState } from "react";
export const myContext = createContext("")

export const GlobalState = ({ children }) => {
    const [data, setData] = useState({
        location: '',
        positon: '',
        name: '',
        phone: '',
        certification: ''
    })
    useEffect(() => {
        const loadData = JSON.parse(sessionStorage.getItem('data'))
        setData(loadData)
    }, [])
    return <myContext.Provider value={{ data, setData }}>
        {children}
    </myContext.Provider>
}