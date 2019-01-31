import axios from '../axios-friends';

export const actionTypes = {
    FETCHING_FRIENDS: "FETCHING_FRINEDS",
    FETCH_SUCCEEDED: "FETCH_SUCCEEDED",
    FETCH_FAILED: "FETCH_FAILED",
    DELETING_FRIEND: "DELETING_FRIEND",
    DELETE_FAILED: "DELETE_FAILED",
    DELETE_SUCCEEDED: "DELETE_SUCCEEDED"
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
        console.log(err)
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
        console.log(err);
        dispatch(deleteFriendFailed())
    })
}