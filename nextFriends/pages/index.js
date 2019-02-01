import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Spinner from '../components/UI/Spinner/Spinner';
import Friends from '../components/Friends';
import Router from 'next/router';
import * as actions from '../store/actions';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.onInitFriends()
  }

  updateStateHandler = (id) => {
    
  }

  render() {
    return (
      <div className="App">
        {this.props.friends.length > 0 ?  <Friends toggleUpdate={this.props.onUpdateId} updateID={this.props.idToUpdate} delete={this.props.onDelete} friends={this.props.friends} />:<Spinner />}
        {/* <FriendForm resetId={() => {this.setState({idToUpdate: null})}} updateId={this.state.idToUpdate} /> */}
        <Link href='add-friend'><button className="NavButton" onClick={() => {Router.push('/add-friend')}}>Add Friend</button></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    idToUpdate: state.idToUpdate
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInitFriends: () => dispatch(actions.initFriends()),
    onDelete: (id) => dispatch(actions.deleteFriend(id)),
    onUpdateId: (id) => dispatch(actions.updateId(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);