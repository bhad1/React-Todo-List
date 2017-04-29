import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import './TodoList.css';
import TodoListButtons from './TodoListButtons';

class TodoListRow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      taskIsComplete: false
    }
  }

    toggleCompletedTask(){
      if(this.state.taskIsComplete === false){
        this.state.taskIsComplete = true
      } else
    }

    render() {
        return (
          <div className="row ">
              <div className="card-block col-md-9">
                  {item.text}
              </div>
              <TodoListButtons />
              <div className="col-md-1 vertical-center x-button-div">
                  <button type="button" className="close btn" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          </div>
        );
    }
}

export default TodoListRow;
