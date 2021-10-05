import React from "react";
import { connect } from "react-redux";

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

let NewsItem = ({ article }) => {
    console.log("check article", article)
	return article ? (
		<article style={articleStyle}>
			<div>
				<h1>{article.anime}</h1>
				<h4>{article.quote}</h4>
			</div>
		</article>
	) : <>nothing</>;
};

const mapStateToProps = (state) => ({
	article: state.news,
});

NewsItem = connect(mapStateToProps, null)(NewsItem);

export default NewsItem;


// let NewsItem = ({ article }) => {
// 	useInjectReducer({ key , reducer: newsReducer})
// 	useInjectSaga({key, saga: actionWatcher})

// 	const news = useSelector(state => state.root.news)
//     console.log("check article", news)
// 	return news ? (
// 		<article style={articleStyle}>
// 			<div>
// 				<h1>{news.anime}</h1>
// 				<h4>{news.quote}</h4>
// 			</div>
// 		</article>
// 	) : <>nothing</>;
// };

// export default NewsItem;
