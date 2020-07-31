import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {connect} from "react-redux";
import { 
	NavigationContainer, 
	DefaultTheme as NavigationDefaultTheme,
	DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
	DefaultTheme as PaperDefaultTheme,
	DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import RootStackScreen from './screens/ScreenIncludes/ScreenRootStack';
import ScreenMainTab from './screens/ScreenIncludes/ScreenMainTab';
import {DrawerContent} from './screens/ScreenIncludes/DrawerContent';

// Các Màn Hình
// import ScreenHome from './screens/ScreenHome/ScreenHome';
import ScreenProfile from './screens/ScreenProfile/ScreenProfile';
import ScreenSetting from './screens/ScreenSetting/ScreenSetting/';
// END
const Drawer = createDrawerNavigator();
const Main = (props) => {
	const [user, setUser] = useState(null);
	useEffect(()=>{
		async function getStorageData() {
			try {
				const jsonValue = await AsyncStorage.getItem('userData');
				if(jsonValue){
					setUser(JSON.parse(jsonValue));
				}
			} catch(error) {
				throw new Error("Something's wrong with AsyncStorage in Main!");
			}
		}
		getStorageData();
	}, []);

	return (
		<NavigationContainer>
			{console.log(user)}
			{
				user?
				(
					<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
						<Drawer.Screen name="HomeDrawer" component={ScreenMainTab} />
						<Drawer.Screen name="ScreenSetting" component={ScreenSetting} />
						<Drawer.Screen name="ScreenProfile" component={ScreenProfile} />
					</Drawer.Navigator>
				):(
					<RootStackScreen/>
				)
			}
		</NavigationContainer>
	);
}
const mapStateToProps = (state)=>({
	currentUser: state.user
});
export default connect(mapStateToProps)(Main);