import axios from '../lib/utilities/axios-friends';


export const actionTypes = {
    FETCHING_FRIENDS: "FETCHING_FRINEDS",
    FETCH_SUCCEEDED: "FETCH_SUCCEEDED",
    FETCH_FAILED: "FETCH_FAILED",
    DELETING_FRIEND: "DELETING_FRIEND",
    DELETE_FAILED: "DELETE_FAILED",
    DELETE_SUCCEEDED: "DELETE_SUCCEEDED",
    ADDING_FRIEND: "ADDING_FRIEND",
    ADD_SUCCEEDED: "ADD_SUCCEEDED",
    ADD_FAILED: "ADD_FAILED",
    UPDATING_FRIEND: "UPDATING_FRIEND",
    UPDATE_SUCCEEDED: "UPDATE_SUCCEEDED",
    UPDATE_FAILED: "UPDATE_FAILED"
}
// INITIALIZE FRIENDS
const fetchingFriends = () => {
    return {
        type: actionTypes.FETCHING_FRIENDS
    }
}
const fetchSucceeded = (friends) => {
    return {
        type: actionTypes.FETCH_SUCCEEDED,
        friends: friends
    }
}
const fetchFailed = () => {
    return {
        type: actionTypes.FETCH_FAILED
    }
}
export const initFriends = () => dispatch => {
    dispatch(fetchingFriends());
    axios.get('').then(res => {
        dispatch(fetchSucceeded(res.data))
    }).catch(err => {
        console.error(err)
        dispatch(fetchFailed())
    })
}
// DELETE A FRIEND WITH ID = id
const deletingFriend = () => {
    return {
        type: actionTypes.DELETING_FRIEND
    }
}
const deleteFriendSucceeded = (newFriends) => {
    return {
        type: actionTypes.DELETE_SUCCEEDED,
        friends: newFriends
    }
}
const deleteFriendFailed = () => {
    return {
        type: actionTypes.DELETE_FAILED
    }
}
export const deleteFriend = (id) => dispatch => {
    dispatch(deletingFriend())
    axios.delete(`/${id}`).then(res => {
        dispatch(deleteFriendSucceeded(res.data))
    }).catch(err => {
        console.error(err);
        dispatch(deleteFriendFailed())
    })
}
// ADD A FRIEND 
const addingFriend = () => {
    return {
        type: actionTypes.ADDING_FRIEND
    }
}
const addSucceeded = (newFriends) => {
    return {
        type: actionTypes.ADD_SUCCEEDED,
        friends: newFriends
    }
}
const addFailed = () => {
    return {
        type: actionTypes.ADD_FAILED
    }
}
export const addFriend = (newFriend) => dispatch => {
    dispatch(addingFriend())
    axios.post('', newFriend).then(res => {
        dispatch(addSucceeded(res.data))
    }).catch(err => {
        console.error(err)
        dispatch(addFailed())
    })
}
// UPDATE A FRIEND
const updatingFriend = () => {
    return {
        type: actionTypes.UPDATING_FRIEND
    }
}
const updateSucceeded = (updatedFriends) => {
    return {
        type: actionTypes.UPDATE_SUCCEEDED,
        friends: updatedFriends
    }
}
const updateFailed = () => {
    return {
        type: actionTypes.UPDATE_FAILED
    }
}
export const updateFriend = (id, updates) => dispatch => {
    dispatch(updatingFriend())
    axios.put(`/${id}`, updates).then(res => {
        dispatch(updateSucceeded(res.data))
    }).catch(err => {
        console.error(err)
        dispatch(updateFailed())
    })
}