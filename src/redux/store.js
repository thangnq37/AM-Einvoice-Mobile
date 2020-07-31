import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer  } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export const store = createStore(rootReducer, devToolsEnhancer(applyMiddleware(ReduxThunk)));

