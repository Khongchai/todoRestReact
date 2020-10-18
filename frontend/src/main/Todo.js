import React from "react";
import * as callAPI from '../fetchJS/fetch';

class TodoList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      todoList: [],
      activeItem: {
        id: null,
        title:  '',
        completed: false
      },
      editing: false,
      taskInvisibleRef: {}
    }
  };

  componentWillMount()
  {
    this.fetchTasks();
  }

  fetchTasks = () =>
  {
    callAPI.getData()
    .then(data=>{
      this.setState({todoList: data})
    }).catch(err => console.log(err))
  }
  beginEdit = (task, e) =>
  {
    e.stopPropagation();
    this.setState({
      activeItem:task,
      editing: true
    })
  }
  handleChange = (event) =>
  {
    this.setState({activeItem: {...this.state.activeItem, title:event.target.value}})
  }
  handleSubmit = (e) => 
  {
    e.preventDefault()
    callAPI.saveData(this.state.activeItem, this.state.editing)
    .then(data=>
      {
        this.setState((state) => ({
          activeItem: {
            id: null,
            title:  '',
            completed: false
          },
          todoList: state.editing == false? [data, ...state.todoList]: data,
          editing: false
        }))
      })
  }

  addStrikeThrough = (task, e) =>
  {
    e.stopPropagation();
    task.completed = !task.completed;
    this.setState({
      editing: true
    }, () => {
      callAPI.saveData(task, this.state.editing)
      .then(data=>
        {
          this.setState(() => ({
            todoList: data,
            editing: false
          }))  
        });
    })
  }

  deleteTask = (task, e) =>
  {
    e.stopPropagation();
    callAPI.deleteTask(task.id)
    .then(data => {
      //if the task being edited is deleted, also clear out the field.
      this.setState((state) => ({
        todoList: data,
        activeItem: state.activeItem.id !== task.id? state.activeItem: {
          id: null,
          title:  '',
          completed: false
        },
        editing: state.activeItem.id !== task.id? state.editing: false
      }));
    })
  }
  render(){
    var self = this;
    return(
          <div className="container">
            <div id="task-container">
              <div id="form-wrapper">
                <form id="form" onSubmit={this.handleSubmit} >
                  <div className="flex-wrapper">
                    <div style={{flex: 6}}>
                      <input onChange={this.handleChange} required value={this.state.activeItem["title"]} className="form-control" id="title" type="text"name="title" placeholder="Enter Task"/>
                    </div>
                    <div style={{flex: 1}}>
                      <input id="submit" className="btn btn-warning" type="submit" name="Add" />
                    </div>
                  </div>
                </form> 
              </div>
              <div id="list-wrapper">
                {this.state.todoList.map((task, index) => {
                  var title = task.completed? <span><strike>{task.title}</strike></span>: <span>{task.title}</span>;
                  return (
                    <div key={index} onClick={(e) => {self.addStrikeThrough(task, e)}} className="task-wrapper flex-wrapper">
                      <div style={{flex: 7}}>
                         {title}
                      </div>

                      <div style={{flex: 1}}>
                         <button onClick={(e) => {self.beginEdit(task, e)}} className="btn btn-sm btn-outline-info">Edit</button>
                      </div>

                      <div style={{flex: 1}}>
                      <button className="btn btn-sm btn-outline-danger delete" onClick={(e) => {self.deleteTask(task, e)}}>-</button>
                      </div>
                      
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
    )
  }

}

export default TodoList;