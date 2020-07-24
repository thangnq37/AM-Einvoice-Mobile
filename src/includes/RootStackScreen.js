import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './../screens/Auth/AuthScreen';
const RootStack = createStackNavigator();
const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="AuthScreen" component={AuthScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;