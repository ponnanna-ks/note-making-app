import React from "react";
import styles from "./Groups.module.css"
import PocketNotes from "../components/AddGroup";

function Groups(){
    return(
        <div className="groups">    
            <div className="header">
                <p className="header-text">Pocket Notes</p>
            </div>
            <div className="group-list">
                <p> Names</p>

            </div>
        </div>
    )
}

export default Groups;