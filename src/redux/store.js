import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxThunk from 'redux-thunk';
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from './reducers/rootReducer';
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export const persistor = persistStore(store);
