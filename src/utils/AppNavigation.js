import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../Pages/SplashScreen';
import HomeScreen from '../Pages/Home/HomeScreen';
import LoginScreen from '../Pages/Login/LoginScreen';
import Tournment from '../Pages/Tournment/Tournment';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Tournment" component={Tournment} options={{ headerShown: false }} />
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
                    name="Home"
                    component={HomeTabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
