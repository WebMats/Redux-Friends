import axios from '../axios-friends';

export const actionTypes = {
    FETCHING_FRIENDS: "FETCHING_FRINEDS",
    FETCH_SUCCEEDED: "FETCH_SUCCEEDED",
    FETCH_FAILED: "FETCH_FAILED",
}

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
 