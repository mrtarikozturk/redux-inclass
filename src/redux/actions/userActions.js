import {
    SET_USER_LIST,
    SET_SELECTED_USER
} from '../types'

export const setUserListAction = (userList) => ({ type: SET_USER_LIST, payload: userList });

export const setSelectedUserAction = (user) => ({ type: SET_SELECTED_USER, payload: user });
