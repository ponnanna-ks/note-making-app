import React, { useContext, useEffect, useState } from "react";
import styles from "./Groups.module.css"

import addIcon from "../assets/Add_icon.png"
import { AppContext } from "../context/AppContext";
function GroupsSide(){
    const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]; 
    let obj={"name":"","color":"", "data":""}

    const {groupsData, setGroupsData} = useContext(AppContext)
    const [openAddScreen, setOpenAddScreen] = useState(false)
    const [groupName, setGroupName] = useState("")
    const [selectedColor, setSelectedColor] = useState(colors[0]); 
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(groupName!==""){
            setError(false)
        }
    }, [groupName])

    function onSaveClick() {
        if(groupName !=="" && selectedColor !==""){      
            obj.name=groupName
            obj.color=selectedColor
            obj.data=""
            setGroupsData([...groupsData, obj])
            setOpenAddScreen(false)
            setGroupName("")
            setSelectedColor(colors[0])
            setError(false)
        }else{
            setError(true)
        }
    }

    function onCancelClick() {
        setOpenAddScreen(false)
        setGroupName("")
        setSelectedColor(colors[0])
        setError(false)
    }

    const getInitials = (name) => {
        const words = name.split(' ', 2);
        if (words.length > 1) {
          return words.map((word) => word[0].toUpperCase()).join('');
        }
        return name[0].toUpperCase();
    };

    return(
        <div className={styles.groups}>    
            <div className={styles.header}>
                <p className={styles.headerText}>Pocket Notes</p>
            </div>
            <div className={styles.groupList}>
                {groupsData.map((group) => (
                    <div key={group.name} className={styles.nameIconItem}>
                        <div className={styles.circleIcon} style={{ backgroundColor: group.color }}>
                            <p className={styles.initials}>{getInitials(group.name)}</p>
                        </div>
                        <p style={{ color: "black" }}>{group.name}</p>
                    </div>
                ))}
            </div>
            <div className={styles.addIcon} onClick={()=>{setOpenAddScreen(true)}}>
                <img src={addIcon} alt="add"/>
            </div>
            {openAddScreen && (
                <div className={styles.popupOverlay} onClick={()=>{onCancelClick()}}>
                    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                        <p className={styles.textStyle}>Create New Group</p>
                        <div className={styles.groupName}>
                            <p className={styles.textStyle} style={{marginTop: "15px"}}>Group Name</p>
                            <input
                                type="text"
                                placeholder="Enter group name"
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                            />
                        </div>
                        {error && (
                            <p style={{color: "red", width: "100%", fontSize:"10px"}}>Please enter group name</p>
                        )}
                        <div className={styles.groupName}>
                            <p className={styles.textStyle} style={{marginTop: "20px"}}>Choose Color</p>
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
                    </div>
                </div>
            )}
        </div>
    )
}

export default GroupsSide;