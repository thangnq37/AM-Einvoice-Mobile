import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
import ScreenBillInfoEInvoice from './screens/ScreenBillInfoEInvoice/ScreenBillInfoEInvoice';
import FormOfInvoices from './screens/ScreenFormOfInvoices/ScreenFormOfInvoices';
// Import L-A
import ReleaseEInvoices from './screens/ScreenBillReleaseEInvoices/ScreenBillReleaseEInvoices';
import ScreenUpdate from './screens/ScreenBillReleaseEInvoices/includes/ScreenUpdate';
import ScreenAdd from './screens/ScreenBillReleaseEInvoices/includes/ScreenAdd';
// End Import L-A
import AsyncStorage from '@react-native-community/async-storage';

import {logout} from './redux/actions/userAction';
// END
const Drawer = createDrawerNavigator();
const Main = (props) => {
  React.useEffect(() => {
    //Check if token is still useable
    const authenticate = async () => {
      const asyncData = await AsyncStorage.getItem('userData');
      const transformedData = JSON.parse(asyncData);
      const {expirationTimer} = transformedData;
      const date = new Date().getTime();
      if (expirationTimer <= parseInt(date)) {
        props.logoutAction();
      }
    };
    authenticate();
  }, []);
  return (
    <NavigationContainer>
      {props.userToken ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={ScreenMainTab} />
          {/* 069 QUOCTHAI BILL RELEASE SCREEN*/}
          <Drawer.Screen
            name="ReleaseEInvoicesScreen"
            component={ReleaseEInvoices}
          />
          <Drawer.Screen
            name="UpdateReleaseEInvoicesScreen"
            component={ScreenUpdate}
          />
          <Drawer.Screen
            name="AddReleaseEInvoicesScreen"
            component={ScreenAdd}
          />
          {/* 069 */}
          <Drawer.Screen
            name="ScreenBillInfoEInvoice"
            component={ScreenBillInfoEInvoice}
          />
          <Drawer.Screen
            name="FormOfInvoicesScreen"
            component={FormOfInvoices}
          />
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
    userToken: state.user.accessToken,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    logoutAction: () => dispatch(logout()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
