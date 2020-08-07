import React from 'react'; // Remember to import React
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/es/integration/react";
import { name as appname } from './app.json';
import Main from './src/Main';
import { store, persistor } from "./src/redux/store";
const RNRedux = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Main />
        </PersistGate>
    </Provider>

);

AppRegistry.registerComponent(appname, () => RNRedux);