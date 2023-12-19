import React from "react";


const TaskList = (props) => {
    return(
        <div className="container border border-rounder border-success ">
           {props.list}
           
        </div>
    )
}

export default TaskList