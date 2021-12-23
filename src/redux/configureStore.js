import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducer from './coronaData/coronaData';

const store = createStore(covidReducer, applyMiddleware(thunk, logger));

export default store;
