import React from "react";
import styles from "./MessageItem.module.css"

function MessageItem({ messageData }) {
    const dateObj = new Date(messageData.timeStamp);
    const year = dateObj.getFullYear();
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const time = `${formattedHours}:${formattedMinutes} ${ampm}`;
    const formattedDate = `${day} ${months[month]} ${year}, ${time}`;

    return (
        <div className={styles.messageContainer}>
            <div>{messageData?.message}</div>
            <div className={styles.messageTime}>
                {formattedDate}
            </div>
        </div>
    );
}

export default MessageItem;
