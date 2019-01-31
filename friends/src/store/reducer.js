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
        case actionTypes.UPDATING_FRIEND:
            return {
                ...state,
                update: {updatingFriend: true, friendUpdated: false},
                error: null
            }            
        case actionTypes.UPDATE_SUCCEEDED:
            return {
                ...state,
                friends: action.friends,
                update: {updatingFriend: false, friendUpdated: true},
                error: null
            }            
        case actionTypes.UPDATE_FAILED:
            return {
                ...state,
                update: {updatingFriend: false, friendUpdated: false},
                error: "Could not update friend."
            }            
        case actionTypes.ADDING_FRIEND:
            return {
                ...state,
                saving: {savingFriends: true, friendsSaved: false},
                error: null
            }            
        case actionTypes.ADD_SUCCEEDED:
            return {
                ...state,
                friends: action.friends,
                saving: {savingFriends: false, friendsSaved: true},
                error: null
            }      
        case actionTypes.ADD_FAILED:
            return {
                ...state,
                saving: {savingFriends: false, friendsSaved: false},
                error: "Could not add friend."
            }   
        default:
            return state;
    }
}