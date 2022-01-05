import {
    SET_NEWS_LIST,
    SET_SELECTED_NEWS,
} from '../types/newsTypes'


const initialState = {
    newsList: [],
    selectedNews: {},
}

export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_NEWS_LIST:
            return {
                ...state,
                newsList: payload,
            };
        case SET_SELECTED_NEWS:
            return {
                ...state,
                selectedNews: payload,
            };
        default:
            return state;
    }
}

export default newsReducer;