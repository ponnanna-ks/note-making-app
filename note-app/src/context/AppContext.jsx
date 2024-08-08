import {createContext, useEffect, useState, } from "react";

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [groupsData, setGroupsData] = useState([])
    
    useEffect(() => {
        if(groupsData.length>0){  
            localStorage.setItem("groupData", JSON.stringify(groupsData))
        }
    }, [groupsData])

    useEffect(() => {
        try{
            let data = JSON.parse(localStorage.getItem("groupData"))
            if(data!=null){
                setGroupsData(data)
            }
        }catch(error){
            console.error(error)
        }
    }, [])

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