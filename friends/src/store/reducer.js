import { actionTypes } from './actions';



const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    delete: {
        deletingFriend: false,
        friendDeleted: false
    },
    saving: {
        savingFriends: false,
        friendsSaved: false
    },
    update: {
        updatingFriend: false,
        friendUpdated: false,
    },
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCHING_FRIENDS: 
            return {
                ...state,
                fetchingFriends: true,
                error: null
            }
        case actionTypes.FETCH_SUCCEEDED: 
            return {
                ...state,
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.friends
            }
        case actionTypes.FETCH_FAILED:
            return {
                ...state,
                fetchingFriends: false,
                friendsFetched: false,
                error: 'Failed to fetch Friends.'
            }
        case actionTypes.DELETING_FRIEND:
            return {
                ...state,
                delete: { deletingFriend: true, friendDeleted: false},
                error: null
            }
        case actionTypes.DELETE_SUCCEEDED:
            return {
                ...state,
                friends: action.friends,
                delete: {deletingFriend: false, friendDeleted: true},
                error: null
            }
        case actionTypes.DELETE_FAILED:
            return {
                ...state,
                delete: {deletingFriend: false, friendDeleted: false},
                error: "Could not delete friend."
            }
        default:
            return state;
    }
}