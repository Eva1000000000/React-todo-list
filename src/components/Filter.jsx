import React, {Component} from "react";


class Filter extends Component{
    buttons = [
        {name: 'All', label: 'All'},
        {name: 'Completed', label: 'Completed'},
        {name: 'Unfulfilled', label: 'Unfulfilled'}

    ]
    render(){
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name,label})=>{
            const isActive = filter === name;
            const style = isActive ? 'active' : '';
            return(
                <button
                key='{name}'
                onClick={()=>onFilterChange(name)}
                 className={`todo__filter-button ${style}`}>{label}</button>


            )
        })
        return(
            <div className="todo__filter-panel">
                {buttons}
            </div>
        )
    }
}
export default Filter