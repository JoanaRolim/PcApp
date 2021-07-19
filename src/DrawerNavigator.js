import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Feather } from "@expo/vector-icons"

const { Navigator, Screen } = createDrawerNavigator()

import Perfil from "./pages/perfil"
import Vacinas from "./pages/vacinas"
import Clinicas from "./pages/clinica"
import Consultas from "./pages/consulta"

import { TouchableOpacity } from "react-native"

export default function DrawerNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#0F3E53"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Screen name="Perfil" options={{ title: "Perfil" }} component={Perfil} />
      <Screen
        name="Vacinas"
        options={{
          title: "Vacinas",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={20} color="#ffffffff" />
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
              <Feather name="plus-circle" size={20} color="#ffffffff" />
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
              <Feather name="plus-circle" size={20} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Consultas}
      />
    </Navigator>
  )
}
