import React, { useContext, useState } from "react";
import styles from "./Messages.module.css"
import { AppContext } from "../context/AppContext";

function Messages() {
    const {selectedGroup, setSelectedGroup, groupsData, setGroupsData} = useContext(AppContext)
    const [textAreaData, setTextAreaData] = useState("")

    function handleSaveClick() {
        const updatedGroups = groupsData.map(group => {
            if (group.name === selectedGroup.name) {
                setSelectedGroup({ ...group, data: [...group.data,textAreaData] })
                return { ...group, data: [...group.data,textAreaData] };
            }
            return group;
        });
        setGroupsData(updatedGroups);
        setTextAreaData("")
    }

    return (
        <div>
            <h1>Messages</h1>
            <p>{selectedGroup.name}</p>
            {selectedGroup["data"]?.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <textarea 
                value={textAreaData}
                onChange={e => setTextAreaData(e.target.value)}
            />
            <button style={{bottom:0,right:0, position:"absolute"}} onClick={handleSaveClick}>Save</button>
        </div>
        
    )
}

export default Messages