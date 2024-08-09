import React, { useContext, useState } from "react";
import styles from "./Messages.module.css"
import { AppContext } from "../context/AppContext";

function Messages() {
    const {groupsData, setGroupsData, selectedGroup} = useContext(AppContext)
    const [textAreaData, setTextAreaData] = useState("")

    return (
        <div>
            <h1>Messages</h1>
            <p>{selectedGroup.name}</p>
            <textarea  
                onChange={e => setTextAreaData(e.target.value)}
            />
            <button style={{bottom:0,right:0, position:"absolute"}}>Save</button>
        </div>
        
    )
}

export default Messages