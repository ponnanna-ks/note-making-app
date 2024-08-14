import React, { useContext, useRef, useState } from "react";
import styles from "./Messages.module.css"
import { AppContext } from "../context/AppContext";
import emptyPic from "../assets/empty_image.png"
import { AiFillLock, AiOutlineSend, AiOutlineArrowLeft } from "react-icons/ai";
import { getInitials } from "../utils/utils";
import MessageItem from "../components/MessageItem";

function Messages({setView}) {
    const {selectedGroup, setSelectedGroup, groupsData, setGroupsData} = useContext(AppContext)
    const [textAreaData, setTextAreaData] = useState("")
    const textAreaRef = useRef(null)

    function handleSaveClick() {
        if(textAreaData){
            const updatedGroups = groupsData.map(group => {
                if (group.name === selectedGroup.name) {
                    setSelectedGroup({ ...group, 
                        data: [...group.data, {message:textAreaData, timeStamp: Date.now()}]
                    })
                    return { ...group, 
                            data: [...group.data, {message:textAreaData, timeStamp: Date.now()}]
                        };
                }
                return group;
            });
            setGroupsData(updatedGroups);
            setTextAreaData("")
            textAreaRef.current.textContent = "";
        }
    }

    function handleInput(e) {
        setTextAreaData(e.target.textContent);
    }

    function handleKeyDown (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSaveClick(); 
        }
    };

    function handleBackClick() {
        setSelectedGroup({});
        setView('group')
    }

  return (
    <div className={styles.messageContainer}>
      {Object.keys(selectedGroup).length === 0 ? (
        <div className={styles.emptyParent}>
          <img src={emptyPic} alt={"Empty"} />
          <div className={styles.emptyText}>
            <h1>Pocket Notes</h1>
            <p>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
          <div className={styles.emptyTextLast}>
            <AiFillLock />
            <p>end-to-end encrypted</p>
          </div>
        </div>
      ) : (
        <div className={styles.messageParent}>
          <div className={styles.nameIconItem}>
          <div className={styles.backButton} onClick={handleBackClick}>
            <AiOutlineArrowLeft />
          </div>
            <div className={styles.circleIcon} style={{ backgroundColor: selectedGroup.color }}>
              <p className={styles.initials}>{getInitials(selectedGroup.name)}</p>
            </div>
            <p style={{ color: "white" }}>{selectedGroup.name}</p>
          </div>
          <div className={styles.messageList}>
            {selectedGroup["data"]?.map((item, index) => (
              <MessageItem key={index} messageData={item} />
            ))}
          </div>
          <div className={styles.textAreaDiv}>
            <span
              contentEditable="true"
              onInput={handleInput}
              onKeyDown={handleKeyDown}
              ref={textAreaRef}
              className={styles.textAreaSpan}
            ></span>
            <div className={styles.sendIcon}>
              <AiOutlineSend onClick={handleSaveClick} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages