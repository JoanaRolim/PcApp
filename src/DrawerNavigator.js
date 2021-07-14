import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer'

const { Navigator, Screen } = createDrawerNavigator();

import Perfil from './pages/perfil';
import Vacinas from './pages/vacinas';

export default function DrawerNavigator(){
    return (
      <Navigator screenOptions = {{headerShown: false}}>
          <Screen name = "Perfil" component= {Perfil} />
          <Screen name = "Vacinas" component= {Vacinas} />
      </Navigator>
    );
}