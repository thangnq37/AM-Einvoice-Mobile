import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenAuth from './../../screens/ScreenAuth/ScreenAuth';
const RootStack = createStackNavigator();
const ScreenRootStack = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="ScreenAuth" component={ScreenAuth}/>
    </RootStack.Navigator>
);
export default ScreenRootStack;