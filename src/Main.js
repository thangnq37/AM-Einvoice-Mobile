// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import configureStore from './redux/store';
import {Provider} from "react-redux";
import { 
	DefaultTheme as PaperDefaultTheme,
	DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import RootStackScreen from './screens/ScreenIncludes/ScreenRootStack';
import ScreenMainTab from './screens/ScreenIncludes/ScreenMainTab';
import { DrawerContent } from './screens/ScreenIncludes/DrawerContent';

// Các Màng Hình
// import ScreenHome from './screens/ScreenHome/ScreenHome';
import ScreenProfile from './screens/ScreenProfile/ScreenProfile';
import ScreenSetting from './screens/ScreenSetting/ScreenSetting/';
// END
const Drawer = createDrawerNavigator();
const store = configureStore();
const Main = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				{/* Nếu Đã Đăng Nhập  */}
				<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
						<Drawer.Screen name="HomeDrawer" component={ScreenMainTab} />
						<Drawer.Screen name="ScreenSetting" component={ScreenSetting} />
						<Drawer.Screen name="ScreenProfile" component={ScreenProfile} />
				</Drawer.Navigator>
				{/* Nếu Chưa Đăng Nhập  */}
     			{/* <RootStackScreen/> */}
    		</NavigationContainer>
		</Provider>
	);
}
export default Main;