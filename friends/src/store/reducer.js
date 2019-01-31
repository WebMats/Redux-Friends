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
                error: 'Failed to fetch Friends, PepeHands'
            }
        default:
            return state;
    }
}