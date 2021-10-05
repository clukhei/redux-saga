import React from "react";
import { connect } from "react-redux";
import img from "../loading_spinner.gif";

let Loading = ({ loading }) => {
    console.log('loading state', loading)
	return loading ? (
		<div style={{ textAlign: "center" }}>
			<img src={img} alt="loading" />
			<h1>LOADING</h1>
		</div>
	) : null;
};
const mapStateToProps = (state) => ({ loading: state.loading });
Loading = connect(mapStateToProps, null)(Loading);
export default Loading;

// import newsReducer, { key } from '../reducers/newsReducer'
// import { actionWatcher } from '../sagas';
// import { useSelector, useDispatch } from 'react-redux'
// import { useInjectReducer, useInjectSaga } from 'redux-injectors'

// const Loading = () => {
// 	useInjectReducer({ key , reducer: newsReducer})
// 	useInjectSaga({key, saga: actionWatcher})

// 	const loading = useSelector(state => state.root.loading)
// 		return loading ? (
// 		<div style={{ textAlign: "center" }}>
// 			<img src={img} alt="loading" />
// 			<h1>LOADING</h1>
// 		</div>
// 	) : null;

// }

// export default Loading