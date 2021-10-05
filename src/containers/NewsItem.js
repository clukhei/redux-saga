import React from "react";

import newsReducer, { key } from '../reducers/newsReducer'
import { actionWatcher } from '../sagas';
import { useSelector, useDispatch } from 'react-redux'
import { useInjectReducer, useInjectSaga } from 'redux-injectors'

let NewsItem = () => {
	useInjectReducer({ key , reducer: newsReducer})
	useInjectSaga({key, saga: actionWatcher})

	const news = useSelector(state => state.root.news)
    console.log("check article", news)
	return news ? (
		<article style={articleStyle}>
			<div>
				<h1>{news.anime}</h1>
				<h4>{news.quote}</h4>
			</div>
		</article>
	) : <>nothing</>;
};

export default NewsItem;


const imgStyle = {
	hight: "auto",
	width: "80%",
	border: "4px solid RebeccaPurple ",
	borderRadius: "5%",
};
const articleStyle = {
	width: "50%",
	margin: "0 auto",
	color: "olive",
};