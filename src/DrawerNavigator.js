import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer'

const { Navigator, Screen } = createDrawerNavigator();

import Perfil from './pages/perfil';
import Vacinas from './pages/vacinas';

export default function DrawerNavigator(){
    return (
      <Navigator screenOptions = {{headerShown: true, headerStyle: {
        backgroundColor: '#0F3E53',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },}}>
          <Screen name = "Perfil" options={{
          title: 'Perfil',
          
        }} component= {Perfil} />
          <Screen name = "Vacinas" options={{
          title: 'Vacinas',
          
        }} component= {Vacinas} />
      </Navigator>
    );
}