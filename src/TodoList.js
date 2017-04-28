import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import './TodoList.css';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <h3>React Todo List</h3>
                {this.props.items.map(item => (
                    <div className="card" key={item.id}>
                        <div className="row">
                            <div className="card-block col-md-10">
                                {item.text}
                            </div>
                            <div className="col-md-1 edit-button-div">
                                <button className="btn">Edit</button>
                            </div>
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
}

export default TodoList;