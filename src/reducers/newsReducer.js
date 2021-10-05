
const initialState = {
    loading: false, 
    news: {}
}
const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_NEWS': 
            return {...state, loading: true };
        case 'NEWS_RECEIVED': 
        console.log("news_received action", action)
            return {...state, news: action.json, loading: false }
        default: 
            return state; 
    }
}

export const key = 'root'

export default newsReducer;