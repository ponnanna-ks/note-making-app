import React, { useContext, useState } from "react";
import styles from "./Groups.module.css"

import addIcon from "../assets/Add_icon.png"
import { AppContext } from "../context/AppContext";
function GroupsSide(){
    const {groupsData, setGroupsData} = useContext(AppContext)
    const [openAddScreen, setOpenAddScreen] = useState(false)
    const [groupName, setGroupName] = useState("")
    const [selectedColor, setSelectedColor] = useState(""); 
    let obj={"name":"","color":"", "data":""}
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33FB"]; 

    function onSaveClick() {
        obj.name=groupName
        obj.color=selectedColor
        obj.data=""
        setGroupsData([...groupsData, obj])
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
                {groupsData.map((groupName) => (
                    <p key={groupName.name} style={{ color: groupName.color}}>{groupName.name}</p>
                ))} 
            </div>
            <div className={styles.addIcon} onClick={()=>{setOpenAddScreen(true)}}>
                <img src={addIcon} alt="add"/>
            </div>
            {openAddScreen && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <h2>Create New Group</h2>
                        <div className={styles.groupName}>
                            <p>Group Name</p>
                            <input
                                type="text"
                                placeholder="Group Name"
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                            />
                        </div>
                        <div className={styles.groupName}>
                            <p>Choose Color</p>
                            <div className={styles.colorOptions}>
                                {colors.map((color) => (
                                    <label key={color} className={styles.colorLabel}>
                                        <input
                                            type="radio"
                                            name="color"
                                            value={color}
                                            checked={selectedColor === color}
                                            onChange={(e) => setSelectedColor(e.target.value)}
                                        />
                                        <span
                                            className={styles.colorSwatch}
                                            style={{ backgroundColor: color }}
                                        ></span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button onClick={onSaveClick}>Create</button>
                        <button onClick={onCancelClick}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GroupsSide;