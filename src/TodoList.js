import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import './TodoList.css';
import TodoListButtons from './TodoListButtons';
import TodoListText from './TodoListText';
import TodoListRow from "./TodoListRow";
import _ from 'lodash';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    renderItems() {
        const props = _.omit(this.props, 'items');

        return _.map(this.props.items, (item, index) => <TodoListRow key={index} itemText={item.text} saveText={this.props.saveText.bind(this)} deleteItem={this.props.deleteItem.bind(this)} toggleCompletedItem={this.props.toggleCompletedItem.bind(this)} {...item} {...props} />);
    }


    render() {
        return (
            <div>
                <h3>React Todo List</h3>
                {this.renderItems()}
            </div>
        );
    }

}

export default TodoList;
