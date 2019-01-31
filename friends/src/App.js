import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from './components/UI/Spinner';
import Friends from './components/Friends';
import * as actions from './store/actions'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onInitFriends()
  }
  render() {
    return (
      <div className="App">
        {this.props.friends.length > 0 ?  <Friends delete={this.props.onDelete} friends={this.props.friends} />:<Spinner />}
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
