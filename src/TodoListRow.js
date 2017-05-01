import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import './TodoListRow.css';
import TodoListButtons from './TodoListButtons';

class TodoListRow extends React.Component {
    constructor(props) {
        super(props);

        //set default editing state to false which shows edit button by default instead of save
        this.state = {
            isEditing: false
        }
    }

    //handle isEditing state. Switches button from Edit to Save.
    renderButtonSection() {
        if (this.state.isEditing) {
            return (
                <button onClick={this.onSaveClick.bind(this)} className="btn">Save</button>

            );
        }

        return (
            <button onClick={this.onEditClick.bind(this)} className="btn">Edit</button>
        );
    }

    renderTextSection() {
        if (this.state.isEditing) {
            return (
                <form onSubmit={this.onSaveClick.bind(this)}>
                    <input type="text" defaultValue={this.props.itemText} ref="editInput"/>
                </form>

            );
        }
        else if (this.props.isCompleted && !this.state.isEditing){
            return(<div><span className="todoText completed">{this.props.itemText}</span></div>)
        }

        return (
            <div><span className="todoText notCompleted">{this.props.itemText}</span></div>
        );
    }



    render() {
        return (
            <div className="card">
                <div className="row">
                    <div onClick={this.toggleCompletedItem.bind(this, this.props.id)} className="card-block col-md-9">
                        {this.renderTextSection()}
                    </div>
                    <div className="col-md-2 edit-button-div">
                        {this.renderButtonSection()}
                    </div>
                    <div className="col-md-1 vertical-center x-button-div">
                        <button onClick={this.props.deleteItem.bind(this, this.props.id)} type="button" className="close btn" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>

        );
    }

    toggleCompletedItem(toggledItemId){
      if(this.state.isEditing === false){
        this.props.toggleCompletedItem(toggledItemId);
      }
    }

    //set to edit mode after clicking on edit button
    onEditClick() {
        this.setState({
            isEditing: true
        });
    }

    //save changes in edit mode and switch back to default mode
    onSaveClick(event) {
        event.preventDefault();
        const oldTextId = this.props.id;
        const newText = this.refs.editInput.value;
        this.props.saveText(oldTextId, newText);
        this.setState({isEditing: false});
    }

}

export default TodoListRow;
