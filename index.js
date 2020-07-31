import React from 'react'; // Remember to import React
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'; 

import {name as appname} from './app.json';
import Main from './src/Main';
import { store } from "./src/redux/store";

const RNRedux = () => (
    <Provider store={ store }>
        <Main/>
    </Provider>
);

AppRegistry.registerComponent (appname, () => RNRedux);