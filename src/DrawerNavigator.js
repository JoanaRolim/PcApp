import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Feather, Octicons } from "@expo/vector-icons"
import { createStackNavigator } from "@react-navigation/stack"  

const { Navigator, Screen } = createDrawerNavigator()
const Stack = createStackNavigator()

import Perfil_pets from "./pages/perfil_pets"
import Vacinas from "./pages/vacinas"
import Clinicas from "./pages/clinica"
import Consultas from "./pages/consulta"
import Pets from "./pages/pets"
import Perfil_clinicas from "./pages/perfil_clinicas"

import { TouchableOpacity } from "react-native"
import { StackActions } from "@react-navigation/routers"

function Perfil_navigator(){
    return(
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name="Perfil_pets" 
            options={{ 
            title: "Perfil",
            headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={22} color="#ffffffff" />
            </TouchableOpacity>
          )}} component={Perfil_pets} />

            <Stack.Screen
             name="Clinicas_perfil"
             options={{
               title: "Perfil/Clinicas",
               headerRight: () => (
                 <TouchableOpacity style={{ paddingRight: 20 }}>
                   <Feather name="plus-circle" size={22} color="#ffffffff" />
                 </TouchableOpacity>
               )
             }}
             component={Perfil_clinicas}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default function DrawerNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#086281"
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
          fontStyle: "normal",
          fontSize: 24,
          lineHeight: 30,
          color: "white"
        }
      }}
    >

      <Screen name = "Perfil" options = {{title: "Perfil", }} component= {Perfil_navigator}></Screen>

      <Screen name="Vacinas"
        options={{
          title: "Vacinas",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={22} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Vacinas}
      />

      <Screen
        name="Clinicas"
        options={{
          title: "Clínicas",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={22} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Clinicas}
      />

      <Screen
        name="Consultas"
        options={{
          title: "Consultas",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={22} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Consultas}
      />

      <Screen
        name="Pets"
        options={{
          title: "Pets",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Octicons name="gear" size={22} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Pets}
      />

    </Navigator>
  )
}
