import React from 'react';

import './Friends.css';

const friends = (props) => (
    <div className="FriendsContainer">
        <h1>Friends</h1>
        {props.friends.map(friend => {
            const isUpdateId = friend.id === props.updateID;
            return (<p key={friend.id}>
                        <span 
                            onClick={() => props.toggleUpdate(friend.id)} 
                            className={isUpdateId ? "CancelPickButton":"PickFriendToUpdateButton"}
                        >     
                            {isUpdateId ? "Cancel" : "Update"}
                        </span>
                        {friend.name}
                        <span onClick={() => props.delete(friend.id)} className="delete__button">x</span>
                    </p>)
        })}
    </div>
)

export default friends;