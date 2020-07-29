// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {connect} from "react-redux";
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
	DefaultTheme as PaperDefaultTheme,
	DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import RootStackScreen from './screens/ScreenIncludes/ScreenRootStack';
import ScreenMainTab from './screens/ScreenIncludes/ScreenMainTab';
import { DrawerContent } from './screens/ScreenIncludes/DrawerContent';

// Các Màn Hình
// import ScreenHome from './screens/ScreenHome/ScreenHome';
import ScreenProfile from './screens/ScreenProfile/ScreenProfile';
import ScreenSetting from './screens/ScreenSetting/ScreenSetting/';
import { userTypes } from './redux/types/loginType';
// END
const Drawer = createDrawerNavigator();
const Main = (props) => {
	return (
		<NavigationContainer>
			{
				props.currentUser?
					(
						<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
							<Drawer.Screen name="HomeDrawer" component={ScreenMainTab} />
							<Drawer.Screen name="ScreenSetting" component={ScreenSetting} />
							<Drawer.Screen name="ScreenProfile" component={ScreenProfile} />
						</Drawer.Navigator>
					)
				:(
					<RootStackScreen/>
				)
			}
		</NavigationContainer>
	);
}
const mapStateToProps = (state)=>({
	currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Main);