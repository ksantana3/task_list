import React, { Component } from 'react';
import './App.css';

class TaskList extends Component {
  // eslint-disable-next-line
  constructor(props){
    super(props);
    
}

gotIt = (i) => {
    this.props.completed(i);
}
render() {
    return (
<>
  
  <table className = "table table-striped">
    <thead>
      <tr>
        <th>Status</th>
        <th>Tasks</th>
      </tr>
    </thead>
    <tbody>
      {
        this.props.items.map( (item, i) =>
        <tr key={i}>
          <td onChange={this.gotIt.bind(this, i)}>
            {
              item.completed ?
              <>
                
                <button className = "btn btn-success" onClick={this.gotIt.bind(this, i)}><del>Completed</del></button>
                
              </> :
              <>
                
                <button className = "btn btn-danger" onClick={this.gotIt.bind(this, i)}>Not Completed</button>
                
              </>
            }
          </td>
          <td>{item.name} </td>
        </tr>
        )
      }
    </tbody>
  </table>


</>
    )
}

}

export default TaskList;