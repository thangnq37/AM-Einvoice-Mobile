import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {rootReducer} from './reducers/rootReducer';

const middleWares = [logger, thunk];
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(...middleWares));
}
export default configureStore;
