import React, { useContext, useState } from "react";
import styles from "./Messages.module.css"
import { AppContext } from "../context/AppContext";
import emptyPic from "../assets/empty_image.png"
import { AiFillLock, AiOutlineSend} from "react-icons/ai";
import { getInitials } from "../utils/utils";

function Messages() {
    const {selectedGroup, setSelectedGroup, groupsData, setGroupsData} = useContext(AppContext)
    const [textAreaData, setTextAreaData] = useState("")

    function handleSaveClick() {
        console.log("Here")
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
                :   <div className={styles.messageParent}>
                        <div className={styles.nameIconItem}>
                            <div className={styles.circleIcon} style={{ backgroundColor: selectedGroup.color }}>
                                <p className={styles.initials}>{getInitials(selectedGroup.name)}</p>
                            </div>
                            <p style={{ color: "white" }}>{selectedGroup.name}</p>
                        </div>
                        {selectedGroup["data"]?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                        <div className={styles.textAreaDiv}>
                            <span 
                                contentEditable="true" 
                                value={textAreaData}
                                onChange={e => setTextAreaData(e.target.value)}
                            >
                                
                            </span>
                            
                        <AiOutlineSend className={styles.sendIcon} onClick={handleSaveClick}/>
                        </div>
                        
                    </div>      
            }
            
        </div>
        
    )
}

export default Messages