import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import rootSaga from './sagas';
import newsReducer from './reducers/newsReducer'
import { configureAppStore } from './app/store'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(newsReducer, applyMiddleware(sagaMiddleware, logger));
// const store = configureAppStore()

sagaMiddleware.run(rootSaga); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) { module.hot.accept(App); }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
