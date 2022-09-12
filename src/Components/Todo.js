import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[
                {task:'check emails',id:1},
            {task:'complete articles',id:2},
            {task:'complete hw',id:3},
        ],
        currentTasks:''
        }
    }
    handleChange=(e)=> {
        // console.log(e.target.value)
        this.setState({
            currentTasks:e.target.value
        })

    }
    handelSubmit=()=>{
        this.setState({
            tasks: [...this.state.tasks,{task:this.state.currentTasks,id: this.state.tasks.length+1}],
            currentTasks:''
        })
    }
    handleDelete=(id)=>{
        let narr= this.state.tasks.filter((taskobj)=>{
            return taskobj.id != id
        })
        this.setState({
            tasks:[...narr]
        })
    }

  render() {
    // console.log("render")
    return (
      <>
      <input type="text" value={this.state.currentTasks} onChange={this.handleChange}/>
      <button onClick={this.handelSubmit}>Submit</button>
      <ul>
      {
        this.state.tasks.map((taskobj)=>(
         <li>   <div key={taskobj.id}>
                <p>{taskobj.task}</p>
                <button onClick={() => this.handleDelete(taskobj.id)}>Delete</button>
            </div>
            </li>
        ))
      }
      </ul>
      </>
    )
  }
}
