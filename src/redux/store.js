import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {rootReducer} from './reducers/rootReducer';

const middleWares = [logger, thunk];
const configStore = () => {
    return createStore(rootReducer);
};
export default configStore;