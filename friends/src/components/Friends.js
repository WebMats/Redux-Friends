import React from 'react';

import './Friends.css';

const friends = (props) => (
    <div className="FriendsContainer">
        <h1>Friends</h1>
        {props.friends.map(friend => <p key={friend.id}>{friend.name}<span onClick={() => props.delete(friend.id)} className="delete__button">x</span></p>)}
    </div>
)

export default friends;