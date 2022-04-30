 import React, { Component} from "react";
 import AddTodo from "./components/AddTodo";
 import Filter from "./components/Filter";
 import Element from "./components/Element";


class App extends Component {
  idForItems = 100;
  state = {
    dataTodo :[
          this.createTodoItem("Add to the input new tasks"),
          this.createTodoItem("Click on the task if it is completed"),

  ],
  filter: 'All'
  }

  createTodoItem(label){
    return{
      label,
      important: false,
      done: false,
      id: this.idForItems++
    }
  }
  deliteItem = id =>{
    this.setState(({dataTodo})=>{
      const idx = dataTodo.findIndex((el)=> el.id ===id);
      dataTodo.splice(idx, 1);
      const newArr = [
        ...dataTodo.slice(0,idx),
        ...dataTodo.slice(idx+1),

      ]
      return{
        dataTodo: newArr
      };
    })
  }

  addItem = (text) =>{
    const newItem = this.createTodoItem(text);
    this.setState(({dataTodo})=>{
      const newArr = [
        ...dataTodo,
        newItem

      ];
      return{
        dataTodo: newArr
      };
    })
  }

 
  onFilterChange = (filter) =>{
    this.setState({filter});
  }

  filter(items, filter){
    switch(filter){
      case'All':
        return items;
        case'Completed':
        return items.filter((item)=>item.done);
        case'Unfulfilled':
        return items.filter((item)=>!item.done);
        default:
          return items;
    }
  }
  toggleProperty(arr, id, propName){
    const idx = arr.findIndex((el)=>el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]

    };
    return[
      ...arr.slice(0,idx),
      newItem,
      ...arr.slice(idx+1),
    ]
  }
  onToggleDone = (id) =>{
    this.setState(({dataTodo})=>{
      return{
        dataTodo: this.toggleProperty(dataTodo, id, 'done')
      }
    })
  }
  render(){
    const {dataTodo,  filter} = this.state;
     const visibleItems = this.filter(dataTodo, filter);
  return (
    <div className='todo container'>
      <div className="todo__wrapper">
      <div className='todo__header'>
        <h1 className='todo__title'>React Todo List</h1>
      </div>
      <div className='todo__add-item'>
        <AddTodo onItemAdded={this.addItem}/>
      </div>
      <div className='todo__list'>
        <div className="todo__filter">
          <Filter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>
        <div className="todo__tasks">
        <Element todos={visibleItems} onDelite={this.deliteItem}
        onToggleDone={this.onToggleDone}
        /> 
        </div>
      </div>
      </div>

    </div>
  );
  }
}

export default App;
