import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      item: "",
      todoList: [
        {name: "mow carpet", completed: false},
        {name: "change blinker fluid", completed: false},
        {name: "flip mirror", completed: true},
        {name: "stare at wall", completed: false}
      ]
    }
  }
  addToList = (e) =>{
    e.preventDefault();
    if(this.state.item.length < 1)
      return
    let item = {name: this.state.item, completed: false};
    this.setState({
      todoList: [...this.state.todoList, item],
      item: ""
    });
  }

  itemUpdate = (e) => {
    this.setState({item: e.target.value});
    
  }
  changeView(event) {
    // let clickStatus = event.target.value
    // this.setState({
    //     completedFilter: clickStatus === 'completed' ? true : false
    // })
    console.log(event)
}
  
  gotIt = (i) => {
    let items = [...this.state.todoList];
    items[i].completed = !items[i].completed;
    this.setState({todoList: items});
  }

  render() {
    return (
      <div>
        <div className = "jumbotron">
          <h1> Todo List </h1>
        </div>
        <form onSubmit = {this.addToList}>
          <div className = "form-group">
            <label>Todo List</label>
            <input
              className = "form-control"
              type = "text"
              name = "item"
              value = {this.state.item}
              onChange = {this.itemUpdate}
            />
          </div>
          <input type = "submit" className="btn btn-primary" />
        </form>
        <br /><hr /><br />
        <div className="btn-group" role="group" aria-label="View Selection">
          <button type="button" className="btn btn-secondary active" onClick = {this.changeView.bind(this, "viewAll")}>View All</button>
          <button type="button" className="btn btn-secondary" onClick = {this.changeView.bind(this, "completed")}>View Completed</button>
          <button type="button" className="btn btn-secondary" onClick = {this.changeView.bind(this, "uncompleted")}>View Uncompleted</button>
        </div>
        <table className = "table table-striped">
          <thead>
            <tr>
              <th>Status</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todoList.map( (item, i) =>
              <tr key={i}>
                <td onChange={this.gotIt.bind(this, i)}>
                  {
                    item.completed ?
                    <>
                      <input type = "checkbox" defaultChecked /> &nbsp;
                      <span className = "badge badge-success">Completed</span>
                    </> :
                    <>
                      <input type="checkbox" /> &nbsp;
                      <span className = "badge badge-danger">Not Complete</span>
                    </>
                  }
                </td>
                <td>{item.name} | {item.completed.toString()}</td>
              </tr>
              )
            }
          </tbody>
        </table>
        <table className = "table table-striped">
          <thead>
            <tr>
              <th>Status</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todoList.map( (item, i) =>
              <tr key={i}>
                <td onChange={this.gotIt.bind(this, i)}>
                  {
                    item.completed ?
                    <>
                      <input type = "checkbox" defaultChecked /> &nbsp;
                      <span className = "badge badge-success">Completed</span>
                    </> :
                    <>
                      <input type="checkbox" /> &nbsp;
                      <span className = "badge badge-danger">Not Complete</span>
                    </>
                  }
                </td>
                <td>{item.name} | {item.completed.toString()} |</td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
