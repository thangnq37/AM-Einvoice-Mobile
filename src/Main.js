// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
import React from 'react';
import configureStore from './redux/store';
import {Provider} from "react-redux";
import ScreenAuth from './screens/ScreenAuth/ScreenAuth';
const store = configureStore();
const Main = () => {
	return (
		<Provider store={store}>
			<ScreenAuth/>
		</Provider>
	);
}
export default Main;