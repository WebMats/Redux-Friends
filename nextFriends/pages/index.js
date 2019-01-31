import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Spinner from '../components/UI/Spinner/Spinner';
import Friends from '../components/Friends';
// import FriendForm from './components/FriendForm';
import * as actions from '../store/actions';
import '../styles/App.css';

class App extends Component {
  state = {
    idToUpdate: null
  }

  componentDidMount() {
    this.props.onInitFriends()
  }

  updateStateHandler = (id) => {
    this.setState(prevState => {
      if (prevState.idToUpdate === id) {
        return {idToUpdate: null}
      }
      return {idToUpdate: id}
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.friends.length > 0 ?  <Friends toggleUpdate={this.updateStateHandler} updateID={this.state.idToUpdate} delete={this.props.onDelete} friends={this.props.friends} />:<Spinner />}
        {/* <FriendForm resetId={() => {this.setState({idToUpdate: null})}} updateId={this.state.idToUpdate} /> */}
        <Link href='add-friend'><a>Add Friend</a></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInitFriends: () => dispatch(actions.initFriends()),
    onDelete: (id) => dispatch(actions.deleteFriend(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);