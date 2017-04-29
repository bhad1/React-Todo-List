import React, {Component} from 'react';
import logo from './logo.svg';
import TodoList from './TodoList';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import './App.css';
import _ from 'lodash';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {items: [], text: '', isCompleted: false};
    }

    render() {
        return (
            <div className="container">

                <TodoList
                    items={this.state.items}
                    saveText={this.saveText.bind(this)}
                    {/*// deleteItem={this.deleteItem.bind(this)}*/}
                />

                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} placeholder="What do I need to do?"/>
                    <button className="btn col-md-3 pull-right">{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now(),
            isCompleted: false
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: '',
            isCompleted: false
        }));
    }

    saveText(oldText, newText){
        const foundTodo = _.find(this.state.items, item => item.text === oldText);
        foundTodo.text = newText;
        this.setState({state: this.state.text});
    }
}

export default App;
