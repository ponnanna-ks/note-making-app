import React from "react"

function MessageItem({messageData}){
    return(
        <div>
            <div>{messageData}</div>
            <div>_______________</div>
        </div>
    )
}

export default MessageItem