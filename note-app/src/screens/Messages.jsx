import React, { useContext, useState } from "react";
import styles from "./Messages.module.css"
import { AppContext } from "../context/AppContext";
import emptyPic from "../assets/empty_image.png"
import { AiFillLock } from "react-icons/ai";

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
            {Object.keys(selectedGroup).length === 0 
                ?   <div className={styles.emptyParent}>
                        <img src={emptyPic} alt={"Empty"}></img>
                        <div className={styles.emptyText}>
                            <h1>Pocket Notes</h1>
                            <p>Send and receive messages without keeping your phone online.<br/>
                            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                        </div>
                        <div className={styles.emptyTextLast}>
                            <AiFillLock/><p>end-to-end encrypted</p>
                        </div>
                    </div>
                :   <div>
                        <h1>Messages</h1>
                        <p>{selectedGroup.name}</p>
                        {selectedGroup["data"]?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                        <textarea 
                            value={textAreaData}
                            onChange={e => setTextAreaData(e.target.value)}
                        />
                        <button 
                            style={{bottom:0,right:0, position:"absolute"}} 
                            onClick={handleSaveClick}>Save</button>
                    </div>      
            }
            
        </div>
        
    )
}

export default Messages