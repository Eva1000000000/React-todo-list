import React from "react";
import Task from "./Task";


const Element = ({todos, onDelite,onToggleImportant, onToggleDone}) => {
    const elements = todos.map((item)=>{
        const{id, ...itemProps} = item;
        return(
            <li key={item.id} classsName="todo__elements-li">
                <Task {...itemProps}
                onDelite = {()=>onDelite(id)}
                onToggleDone = {()=>onToggleDone(id)}
                onToggleImportant = {()=>onToggleImportant(id)}
                />
            </li>
        )
    })
    return (
        <ul className="todo__elements">
            {elements}
        </ul>
    )
}

export default Element