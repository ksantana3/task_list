import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import AppFooter from './AppFooter';

class App extends Component {

  constructor() {
    super();
    this.state ={
      item: "",
      Todo_List: [
        {name: "mow carpet", completed: false},
        {name: "change blinker fluid", completed: false},
        {name: "flip mirror", completed: true},
        {name: "stare at wall", completed: false}
      ],View_List: [
        {name: "mow carpet", completed: false},
        {name: "change blinker fluid", completed: false},
        {name: "flip mirror", completed: true},
        {name: "stare at wall", completed: false}
      ],
      Prev_View : "view_All"
    }
  }

  addToList = (itemName) => {
    let item = {name: itemName, completed: false};
    this.setState({
      Todo_List: [...this.state.Todo_List, item],
      View_List: [...this.state.Todo_List, item]
    });
  }

  update = (i) => {
    let t = [...this.state.View_List];
    t[i].completed = !t[i].completed;
    this.setState({View_List: t});
    this.changeView(...this.state.Prev_View);
  }
  componentDidMount(){
    this.changeView('viewAll')
  }
  
  changeView = (event) => {

    let temp_list = [...this.state.Todo_List];
    temp_list = temp_list.sort((a,b) => a.completed - b.completed);
    function View_Set(event){
      switch(event) {
        case 'viewAll':
          return temp_list;
        case 'completed':
          return temp_list = temp_list.filter(u=>u.completed);
        case 'uncompleted':
          return temp_list = temp_list.filter(u=>!u.completed);
        default:
          return temp_list;

      }
    }
    
    View_Set(event)
    this.setState({
      View_List: temp_list,
      Prev_View: [event]
    });
}

  render() {

    return (
      <div className="row d-flex justify-content-center main">
      <div>
        <div className="d-flex justify-content-center">
          <h1> Todo List </h1>
          </div>
          <hr />
        <TaskForm addToList={this.addToList}
        changeView={this.changeView} />
        <hr />
        <div className="btn-group" role="group" aria-label="View Selection">
          <button type="button" className="btn btn-secondary" active = "True" onClick = {this.changeView.bind(this, "viewAll")}>View All</button>
          <button type="button" className="btn btn-secondary" onClick = {this.changeView.bind(this, "completed")}>View Completed</button>
          <button type="button" className="btn btn-secondary" onClick = {this.changeView.bind(this, "uncompleted")}>View Uncompleted</button>
        </div>
        <div>
          <TaskList 
            items={this.state.View_List} 
            completed={this.update}
            view = {this.state.view}
          />
        </div>
        </div>
        <div className = "footer">
          <AppFooter 
          />
        </div>
      </div>
        
    );
  }
}

export default App;
