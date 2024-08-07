import {createContext, useEffect, useState, } from "react";

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [groupsData, setGroupsData] = useState([])

    return(
        <AppContext.Provider
            value={{
                groupsData,
                setGroupsData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}