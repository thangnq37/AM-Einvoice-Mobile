import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import RootStackScreen from './screens/ScreenIncludes/ScreenRootStack';
import ScreenMainTab from './screens/ScreenIncludes/ScreenMainTab';
import DrawerContent from './screens/ScreenIncludes/DrawerContent';

// Các Màn Hình
// import ScreenHome from './screens/ScreenHome/ScreenHome';
import ScreenProfile from './screens/ScreenProfile/ScreenProfile';
import ScreenSetting from './screens/ScreenSetting/ScreenSetting';
import ScreenBillManagement from './screens/ScreenBillManagement/ScreenBillManagement';
// END
const Drawer = createDrawerNavigator();
const Main = (props) => {
    // const [userInfo, setUserInfo] = useState(null);
    // useEffect(() => {
    //     async function getData() {
    //         const data = await AsyncStorage.getItem('userData');
    //         if (data) {
    //             setUserInfo(data);
    //         }
    //     }
    //     getData();
    // }, [userInfo]);
    return (
        <NavigationContainer>
            {props.userToken ? (
                <Drawer.Navigator
                    drawerContent={(props) => <DrawerContent {...props} />}>
                    <Drawer.Screen name="HomeDrawer" component={ScreenMainTab} />
                    <Drawer.Screen name="ScreenBillManagement" component={ScreenBillManagement} />
                    <Drawer.Screen name="ScreenSetting" component={ScreenSetting} />
                    <Drawer.Screen name="ScreenProfile" component={ScreenProfile} />
                </Drawer.Navigator>
            ) : (
                    <RootStackScreen />
                )}
        </NavigationContainer>
    );
};
function mapStateToProps(state) {
    return {
        userToken: state.user.accessToken
    }
}
export default connect(mapStateToProps, null)(Main);
