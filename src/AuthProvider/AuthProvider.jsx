import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [projectsData, setProjectsData] = useState({})

    useEffect(() => {
        fetch("./projects")
            .then(res => res.json())
            .then(data => setProjectsData(data))
    }, [])



    const data = {
        projectsData, setProjectsData,


    }


    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider