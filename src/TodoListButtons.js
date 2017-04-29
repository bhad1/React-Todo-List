import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import './TodoListButtons.css';

class TodoListButtons extends React.Component {
    constructor(props){
      super(props);

      //set default editing state to false which shows edit button by default instead of save
      this.state = {
        isEditing: false
      }
    }

    //handle the edit and save buttons. If isEditing boolean is true than show Save if not then show default Edit
    renderButtonSection(){
      if (this.state.isEditing){
        return (
          <button onClick={this.onSaveClick.bind(this)} className="btn">Save</button>
        );
      }

      return (
        <button onClick={this.onEditClick.bind(this)} className="btn">Edit</button>
      );
    }

    render() {
        return (
          <div className="col-md-2 edit-button-div">
              {this.renderButtonSection()}
          </div>
        );
    }
    onEditClick(){
      this.setState({
        isEditing: true
      });
    }

    onSaveClick(){
      this.setState({
        isEditing: false
      })
    }
}

export default TodoListButtons;
