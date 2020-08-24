import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
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
import FormOfInvoices from "./screens/ScreenFormOfInvoices/ScreenFormOfInvoices";
import AsyncStorage from '@react-native-community/async-storage';

import { logout } from "./redux/actions/userAction";
// END
const Drawer = createDrawerNavigator();
const Main = (props) => {
    React.useEffect(() => {
        //Check if token is still useable
        const authenticate = async () => {
            const asyncData = await AsyncStorage.getItem("userData");
            const transformedData = JSON.parse(asyncData);
            const { expirationTimer } = transformedData;
            const date = new Date().getTime();
            if (expirationTimer <= parseInt(date)) {
                props.logoutAction();
            }
        }
        authenticate();
    }, []);
    return (
        <NavigationContainer>
            {props.userToken ? (
                <Drawer.Navigator
                    drawerContent={(props) => <DrawerContent {...props} />}>
                    <Drawer.Screen name="HomeDrawer" component={ScreenMainTab} />
                    <Drawer.Screen name="FormOfInvoicesScreen" component={FormOfInvoices} />
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
function mapDispatchToProps(dispatch) {
    return {
        logoutAction: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
