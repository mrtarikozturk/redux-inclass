import {
    SET_NEWS_LIST,
    SET_SELECTED_NEWS,
} from '../types/newsTypes';

export const setNewsListAction = (newsList) => ({ type: SET_NEWS_LIST, payload: newsList });

export const setSelectedNewsAction = (news) => ({ type: SET_SELECTED_NEWS, payload: news });