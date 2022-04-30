import React, {Component} from "react";
import Delete from '../svg/icons8-delete.svg'

export default class Task extends Component{
render(){
    const {label, onDelite, onToggleDone, done} = this.props;
    let classNames = 'todo__li-items-';
    if(done){
        classNames += 'done'
    }
    return(
        <span className={classNames}>
            <span onClick={onToggleDone} className="todo__item">{label}</span>
            <img src={Delete} alt={'Delete'}classNames = 'todo__item-delete' onClick={onDelite}/>
        </span>
    )
}
}