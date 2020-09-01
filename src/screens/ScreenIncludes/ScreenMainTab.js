import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

// //////////////////////////////////////////////////////////////////////////////////////////
import ScreenHome from './../../screens/ScreenHome/ScreenHome';
import ScreenProfile from './../../screens/ScreenProfile/ScreenProfile';
import ScreenSetting from './../../screens/ScreenSetting/ScreenSetting';
import ScreenNotification from './../../screens/ScreenNotification/ScreenNotification';
// //////////////////////////////////////////////////////////////////////////////////////////
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();
const NotificationStack = createStackNavigator();
// //////////////////////////////////////////////////////////////////////////////////////////
const ScreenMainTab = () => (
    <Tab.Navigator initialRouteName="Home"  activeColor="#fff">
        <Tab.Screen name="ScreenHome"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Trang chủ',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
                tabBarLabel: 'Thông báo',
                tabBarColor: '#9f0616',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        {/* <Tab.Screen
            name="Profiles"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Hồ sơ',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person-circle-outline" color={color} size={26} />
                ),
            }}
        /> */}
        <Tab.Screen
            name="Settings"
            component={SettingsStackScreen}
            options={{
                tabBarLabel: 'Cài Đặt',
                tabBarColor: '#0b0937',
                tabBarIcon: ({ color }) => (
                    <Icon name="cog-sharp" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);
export default ScreenMainTab;
const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={ScreenHome} options={{
            title: 'Trang Chủ',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </HomeStack.Navigator>
);
const NotificationStackScreen = ({ navigation }) => (
    <NotificationStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#9f0616',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
    <NotificationStack.Screen name="Home" component={ScreenNotification} options={{
            title: 'Thông báo',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#9f0616" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
    }}/>
    </NotificationStack.Navigator>
);
const ProfileStackScreen = ({ navigation }) => (
        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
        <ProfileStack.Screen name="Profile" component={ScreenProfile} options={{
            title: 'Hồ sơ',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </ProfileStack.Navigator>
);
const SettingsStackScreen = ({ navigation }) => (
    <SettingStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#0b0937',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
    <SettingStack.Screen name="Profile" component={ScreenSetting} options={{
        title: 'Cài đặt',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#0b0937" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
    }} />
    </SettingStack.Navigator>
);



