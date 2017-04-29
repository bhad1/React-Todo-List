import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import './TodoList.css';
import TodoListButtons from './TodoListButtons';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <h3>React Todo List</h3>
                {this.props.items.map(item => (
                    <div onClick={this.toggleCompletedTask.bind(this)} className="card" key={item.id}>
                        <div className="row  ">
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
                    </div>
                ))}
            </div>
        );
    }

    toggleCompletedTask(){
      this.props.items[0].isCompleted= true
      console.log(this.props.items[0].isCompleted)
      // console.log(index);
    }
}

export default TodoList;
