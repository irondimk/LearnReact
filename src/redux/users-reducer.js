import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';
const SETCOUNT = 'SET_COUNT';
const SETCURRENTPAGE = 'SET_CURRENT_PAGE';
const TOGGLEPRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isPreloaderShow: false,
    isFollowingProcess: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            let newState = {
                ...state, users:
                    state.users.map((elem) => {
                        if (elem.id == action.userid) {
                            elem.followed = !elem.followed;
                            return (elem);
                        }
                        return (elem);
                    })
            }
            return newState;
        }

        case UNFOLLOW: {
            let newState = {
                ...state, users:
                    state.users.map((elem) => {
                        if (elem.id == action.userid) {
                            elem.followed = !elem.followed;
                            return (elem);
                        }
                        return (elem);
                    })
            }
            return newState;
        }
        case SETUSERS: {
            let newState = { ...state, users: action.users }
            return newState;
        }
        case SETCOUNT: {
            let newState = { ...state, totalCount: action.count }
            return newState;
        }
        case SETCURRENTPAGE: {
            let newState = { ...state, currentPage: action.currentPage }
            return newState;
        }
        case TOGGLEPRELOADER: {
            let newState = { ...state, isPreloaderShow: action.isPreloaderShow }
            return newState;
        }
        case TOGGLE_IS_FOLLOWING_PROCESS: {
            let newState = { ...state, isFollowingProcess: action.isFollowingProcess }
            return newState;
        }
        default: return state;
    }

}

export const toggleIsFollowingProcessAC = (value) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROCESS,
        isFollowingProcess: value
    }
}

export const togglePreloaderAC = (value) => {
    return {
        type: TOGGLEPRELOADER,
        isPreloaderShow: value
    }
}

export const setCurrentPageAC = (value) => {
    return {
        type: SETCURRENTPAGE,
        currentPage: value
    }
}

export const setCountUsersAC = (value) => {
    return {
        type: SETCOUNT,
        count: value
    }
}

export const followAC = (id) => {
    return {
        userid: id,
        type: FOLLOW
    }
}

export const unfollowAC = (id) => {
    return {
        userid: id,
        type: UNFOLLOW
    }
}


export const setUsersAC = (users) => {
    return {
        users: users,
        type: SETUSERS
    }
}


export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(togglePreloaderAC(true));
        userAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(togglePreloaderAC(false));
            dispatch(setUsersAC(response.items));
            dispatch(setCountUsersAC(response.totalCount));
        });
    }
}

export const follow = (id) => {
    debugger;
    return (dispatch) => {
        dispatch(toggleIsFollowingProcessAC(true));
        userAPI.follow(id).then(response => {
            if(response.resultCode == 0){
                dispatch(followAC(id));
            }
            dispatch(toggleIsFollowingProcessAC(false));
        });
    }
}

export const unfollow = (id) => {
    debugger;
    return (dispatch) => {
        dispatch(toggleIsFollowingProcessAC(true));
        userAPI.unfollow(id).then(response => {
            if(response.resultCode == 0){
                dispatch(unfollowAC(id));
            }
            dispatch(toggleIsFollowingProcessAC(false));
        });
    }
}

export default usersReducer;