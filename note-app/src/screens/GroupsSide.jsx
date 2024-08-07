import React, { useState } from "react";
import styles from "./Groups.module.css"

import addIcon from "../assets/Add_icon.png"
function GroupsSide(){
    const [groupList, setGroupList] = useState(["NAMAN", "PONNANNA", "K", "P"])
    const [openAddScreen, setOpenAddScreen] = useState(false)
    const [groupName, setGroupName] = useState("")

    function onSaveClick() {
        setOpenAddScreen(false)
        setGroupName("")
    }

    function onCancelClick() {
        setOpenAddScreen(false)
        setGroupName("")
    }

    return(
        <div className={styles.groups}>    
            <div className={styles.header}>
                <p className={styles.headerText}>Pocket Notes</p>
            </div>
            <div className={styles.groupList}>
                {groupList.map((groupName) => (
                    <p>{groupName}</p>
                ))} 
            </div>
            <div className={styles.addIcon} onClick={()=>{setOpenAddScreen(true)}}>
                <img src={addIcon} alt="add"/>
            </div>
            {openAddScreen && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <h2>Create New Group</h2>
                        <input
                            type="text"
                            placeholder="Group Name"
                            value={groupName}
                            onChange={(e) =>setGroupName(e.target.value)}
                        />
                        <button onClick={onSaveClick}>Save</button>
                        <button onClick={onCancelClick}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GroupsSide;