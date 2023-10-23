import React, { useState, useEffect } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../Pages/SplashScreen';
import HomeScreen from '../Pages/Home/HomeScreen';
import LoginScreen from '../Pages/Login/LoginScreen';
import Tournment from '../Pages/Tournment/Tournment';
import SignUp from '../Pages/Login/SignUp';
import { Svg, Path, Circle, Rect, Polyline } from 'react-native-svg';
import Search from '../Pages/Search/Search';
import Chats from '../Pages/Chats/Chats';
import Profile from '../Pages/Profile/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                height: 83,
            }
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={() => ({
                tabBarLabel: "", // Hide the tab screen name
                headerShown: false,
                tabBarIcon: () => (

                    <Svg viewBox="0 0 24 24" width="24" height="24" stroke={useIsFocused() ? "#8667F2" : "#8C8098"} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                        <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#FFF"></Path>
                        <Polyline points="9 22 9 12 15 12 15 22"></Polyline>
                    </Svg>
                ),
            })}
        />


        <Tab.Screen
            name="Chats"
            component={Chats}
            options={() => ({
                tabBarLabel: "", // Hide the tab screen name
                headerShown: false,
                tabBarIcon: () => (

                    <Svg viewBox="0 0 24 24" width="24" height="24" stroke={useIsFocused() ? "#8667F2" : "#8C8098"} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                        <Path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></Path>
                    </Svg>
                ),
            })}
        />

        <Tab.Screen
            name="Search"
            component={Search}
            options={() => ({
                tabBarLabel: "", // Hide the tab screen name
                headerShown: false,
                tabBarIcon: () => (

                    <Svg viewBox="0 0 24 24" width="24" height="24" stroke={useIsFocused() ? "#8667F2" : "#8C8098"} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                        <Path d="M11.7501 19C16.1684 19 19.7501 15.4183 19.7501 11C19.7501 6.58172 16.1684 3 11.7501 3C7.33183 3 3.75011 6.58172 3.75011 11C3.75011 15.4183 7.33183 19 11.7501 19Z" />
                        <Path d="M21.7501 20.9999L17.4001 16.6499" stroke="#8C8198" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>
                ),
            })}
        />

        <Tab.Screen
            name="Tournment"
            component={Tournment}
            options={() => ({
                tabBarLabel: "", // Hide the tab screen name
                headerShown: false,
                tabBarIcon: () => (

                    <Svg viewBox="0 0 24 24" width="24" height="24" stroke={useIsFocused() ? "#8667F2" : "#8C8098"} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                        <Circle cx="12" cy="8" r="7"></Circle>
                        <Polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></Polyline>
                    </Svg>
                ),
            })}
        />

        <Tab.Screen
            name="Profile"
            component={Profile}
            options={() => ({
                tabBarLabel: "", // Hide the tab screen name
                headerShown: false,
                tabBarIcon: () => (

                    <Svg viewBox="0 0 24 24" width="24" height="24" stroke={useIsFocused() ? "#8667F2" : "#8C8098"} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
                        <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></Path>
                        <Circle cx="12" cy="7" r="4"></Circle>
                    </Svg>
                ),
            })}
        />

        {/* Add more screens as needed */}
    </Tab.Navigator>
);

const AppNavigation = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Simulate some loading time for the splash screen
        const timeout = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timeout);
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={showSplash ? 'Splash' : 'Login'}>
                {showSplash && <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />}
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeTabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
