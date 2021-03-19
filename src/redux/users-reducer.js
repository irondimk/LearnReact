import { userAPI } from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SETUSERS = 'users/SET_USERS';
const SETCOUNT = 'users/SET_COUNT';
const SETCURRENTPAGE = 'users/SET_CURRENT_PAGE';
const TOGGLEPRELOADER = 'users/TOGGLE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROCESS = 'users/TOGGLE_IS_FOLLOWING_PROCESS';

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
    return async (dispatch) => {
        dispatch(togglePreloaderAC(true));
        let response = await userAPI.getUsers(currentPage, pageSize)
        dispatch(togglePreloaderAC(false));
        dispatch(setUsersAC(response.items));
        dispatch(setCountUsersAC(response.totalCount));
    }
}


const followUnfollowLogic = async (dispatch, id, typeFunctionParent) => {
    dispatch(toggleIsFollowingProcessAC(true));
    let response;
    if (typeFunctionParent == "follow") {
        response = await userAPI.follow(id)
    }
    else {
        response = await userAPI.unfollow(id)
    }
    if (response.resultCode == 0) {
        dispatch(followAC(id));
    }
    dispatch(toggleIsFollowingProcessAC(false));
}

export const follow = (id) => {
    return async (dispatch) => {
        followUnfollowLogic(dispatch, id, "follow");
    }
}

export const unfollow = (id) => {
    return async (dispatch) => {
        followUnfollowLogic(dispatch, id, "unfollow");
    }
}

export default usersReducer;