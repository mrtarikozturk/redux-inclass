import {
    SET_USER_LIST,
    SET_SELECTED_USER
} from '../types/userTypes'

const initialState = {
    userList: [],
    selectedUser: {},
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_LIST:
            return {
                ...state,
                userList: payload,
            };
        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: payload,
            };
        default:
            return state;
    }
}

export default userReducer;