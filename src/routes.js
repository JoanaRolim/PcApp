import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator();

import DrawerNavigator from './DrawerNavigator';
import Login from './pages/login/index';

export default function Routes(){
    return (
        <NavigationContainer>

            <Navigator screenOptions = {{headerShown: false}}>
                <Screen name = "Login" component= {Login} />
                <Screen name = "Drawer" component= {DrawerNavigator} />
            </Navigator>

        </NavigationContainer>

    );
}