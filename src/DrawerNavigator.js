import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Feather, Octicons } from "@expo/vector-icons"
import { createStackNavigator } from "@react-navigation/stack"  
import { TouchableOpacity } from "react-native"
import { StackActions } from "@react-navigation/routers"

const { Navigator, Screen } = createDrawerNavigator()
const Stack = createStackNavigator()

import Perfil_pets from "./pages/perfil_pets"
import Vacinas from "./pages/vacinas"
import Clinicas from "./pages/clinica"
import Consultas from "./pages/consulta"
import Pets from "./pages/pets"
import Perfil_clinicas from "./pages/perfil_clinicas"
import Profissionais from "./pages/profissionais"
import Servicos from "./pages/servicos"
import CadastrarVacinas from "./pages/cadastrar_vacinas"
import CadastrarServicos from "./pages/cadastrar_servicos"
import CadastrarProfissionais from "./pages/cadastrar_profissionais"
import Avaliacoes from "./pages/avaliacoes"
import CadastrarAvaliacoes from "./pages/cadastrar_avaliacoes"
import DescricaoServicos from "./pages/descricao_servicos"

function Perfil_navigator(){
    return(
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name="Perfil_pets" 
            options={{ 
            title: "Perfil",
            headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={27} color="#ffffffff" />
            </TouchableOpacity>
          )}} component={Perfil_pets} />

            <Stack.Screen
             name="Clinicas_perfil"
             options={{
               title: "Clinicas",
               headerRight: () => (
                 <TouchableOpacity style={{ paddingRight: 20 }}>
                   <Feather name="plus-circle" size={27} color="#ffffffff" />
                 </TouchableOpacity>
               )
             }}
             component={Perfil_clinicas}>

            </Stack.Screen>

            <Stack.Screen
              name="Pets"
              options={{
                title: "Pets",
                headerRight: () => (
                  <TouchableOpacity style={{ paddingRight: 20 }}>
                    <Feather name="settings" size={24} color="#ffffffff" />
                  </TouchableOpacity>
                )
              }}
              component={Pets} />
              
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

      <Screen name = "Perfil"  component= {Perfil_navigator}></Screen>

     <Screen
        name="Vacinas"
        options={{
          title: "Vacinas",
          headerRight: ({CadastrarVacinas}) => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={27} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Vacinas}
      />

  <Screen
        name="Consultas"
        options={{
          title: "Histórico"
        }}
        component={Consultas}
      />

  <Screen
        name="Clinicas"
        options={{
          title: "Clínica",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="settings" size={25} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Clinicas}
      />

    <Screen
        name="Profissionais"
        options={{
          title: "Profissionais",
        }}
        component={Profissionais}
      />

    <Screen
        name="Servicos"
        options={{
          title: "Serviços",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={27} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Servicos}
      />

    <Screen
        name="CadastrarVacinas"
        options={{
          title: "Cadastrar"
        }}
        component={CadastrarVacinas}
      />

    <Screen
        name="CadastrarServicos"
        options={{
          title: "Cadastrar"
        }}
        component={CadastrarServicos}
      />

      <Screen
        name="CadastrarProfissionais"
        options={{
          title: "Cadastrar"
        }}
        component={CadastrarProfissionais}
      />

      <Screen
        name="Avaliacoes"
        options={{
          title: "Avaliações",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="plus-circle" size={27} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={Avaliacoes}
      />

    <Screen
        name="CadastrarAvaliacoes"
        options={{
          title: "Cadastrar",
        }}
        component={CadastrarAvaliacoes}
      />


    <Screen
        name="DescricaoServicos"
        options={{
          title: "Serviço",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Feather name="settings" size={27} color="#ffffffff" />
            </TouchableOpacity>
          )
        }}
        component={DescricaoServicos}
      />



    </Navigator>
  )
}
