import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Router from 'next/router';
import Spinner from '../components/UI/Spinner/Spinner';

import '../styles/FriendForm.css';


class FriendForm extends Component {
    constructor(props) {
        super(props)
        this.nameInput = React.createRef();
        this.ageInput = React.createRef();
        this.emailInput = React.createRef();
    }

    addFriendHandler = (e) => {
        e.preventDefault();
        if (this.nameInput.current.value === "" || this.ageInput.current.value === "" || this.emailInput.current.value === "") {
            return;
        }
        const newFriend = {
            name: this.nameInput.current.value,
            age: this.ageInput.current.value,
            email: this.emailInput.current.value
        }
        this.nameInput.current.value = ""
        this.ageInput.current.value = ""
        this.emailInput.current.value = ""
        this.props.onAddFriend(newFriend);
        Router.replace('/')
    }
    updateFriendHandler = (e) => {
        e.preventDefault();
        const fullUpdate = {
            name: this.nameInput.current.value,
            age: this.ageInput.current.value,
            email: this.emailInput.current.value
        }
        let trimmedUpdate = {};
        Object.keys(fullUpdate).forEach(key => {
            if (fullUpdate[key] !== '') {
                trimmedUpdate[key] = fullUpdate[key];
            }
        })
        this.nameInput.current.value = ""
        this.ageInput.current.value = ""
        this.emailInput.current.value = ""
        this.props.onUpdateFriend(this.props.updateId, trimmedUpdate);
        Router.replace('/')
    }

    render() {
        const isupdateIdSet = this.props.updateId !== null;
        let formBody = (
            <React.Fragment>
                <div className="Row-1">
                    <div className="Col-1-Of-2">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" ref={this.nameInput} />
                    </div>
                    <div className="Col-2-Of-2"> 
                        <label htmlFor="age">Age</label>
                        <input id="age" type="number" ref={this.ageInput} />
                    </div>
                </div>
                <div className="Row-2">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" ref={this.emailInput} />
                </div>
                {!isupdateIdSet ? <button className="AddFriendButton">Submit</button> : <button className="UpdateFriendButton">Update</button>}
            </React.Fragment>
        )
        if (this.props.updating || this.props.saving) {
            formBody = <Spinner/>;
        }
        return (
            <form onSubmit={isupdateIdSet ? this.updateFriendHandler : this.addFriendHandler} className="AddFriendForm" autoComplete="off">
                {formBody}
            </form>
        )
    }
}

const mapStatetoProps = state => {
    return {
        updating: state.update.updatingFriend,
        saving: state.saving.savingFriends,
        updateId: state.idToUpdate
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onUpdateFriend: (id, updates) => dispatch(actions.updateFriend(id, updates)),
        onAddFriend: (newFriend) => dispatch(actions.addFriend(newFriend))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FriendForm);