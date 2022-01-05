import axios from 'axios';
import { setLoadingFalseAction, setLoadingTrueAction } from '../actions/appActions';
import { setNewsListAction } from '../actions/newsActions';

export const getNewsThunk = () => async (dispatch, getState) => {
    try {
        dispatch(setLoadingTrueAction());
        const response = await axios.get('https://bing-news-search1.p.rapidapi.com/news', {
            params: { safeSearch: 'Off', textFormat: 'Raw' },
            headers: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': '349f5e0b59mshef6cfbb2b4a459bp1648abjsn6f46abe5aae1'
            }
        });
        dispatch(setNewsListAction(response.data.value));
        console.log(response.data.value)

    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setLoadingFalseAction());
    }
}