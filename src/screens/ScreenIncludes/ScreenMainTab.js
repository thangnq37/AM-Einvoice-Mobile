import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreenHome from './../../screens/ScreenHome/ScreenHome';
import ScreenProfile from './../../screens/ScreenProfile/ScreenProfile';
import ScreenSetting from './../../screens/ScreenSetting/ScreenSetting';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const ScreenMainTab = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="ScreenHome"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Cài Đặt',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default ScreenMainTab;
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
      <HomeStack.Screen name="ScreenHome" component={ScreenHome} options={{title:'Overview', headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
  }} />
  </HomeStack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
<ProfileStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen name="ScreenProfile" component={ScreenProfile} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ProfileStack.Navigator>
);
  