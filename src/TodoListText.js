import React, {Component} from 'react';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import './TodoListText.css';


class TodoListText extends React.Component {
    constructor(props) {
        super(props);

    }

    renderTextSection(){

    }

    render() {
        return (
            <div  className="card-block col-md-9">
                {this.props.itemText}
            </div>
        );
    }

    // toggleCompletedTask(){
    //     this.props.items[0].isCompleted= true
    //     console.log(this.props.items[0].isCompleted)
    //     // console.log(index);
    // }
}

export default TodoListText;
