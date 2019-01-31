import React from 'react';

const friends = (props) => (
    <div>
        {props.friends.map(friend => <p key={friend.id}>{friend.name}</p>)}
    </div>
)

export default friends;