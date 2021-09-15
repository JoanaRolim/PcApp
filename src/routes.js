import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

// import DrawerNavigator from "./DrawerNavigator";
import Login from "./pages/login/index";
import Cadastro from "./pages/cadastro/index";
import Infos from "./pages/infos/index";
import DrawerNavigator from "./DrawerNavigator";

import Perfil_pets from "./pages/perfil_pets";
import Vacinas from "./pages/vacinas";
import ClinicasInfo from "./pages/clinica_info";
import Consultas from "./pages/consulta";
import Pets from "./pages/pets";
import Perfil_clinicas from "./pages/perfil_clinicas";
import Profissionais from "./pages/profissionais";
import Servicos from "./pages/servicos";
import CadastrarVacinas from "./pages/cadastrar_vacinas";
import CadastrarServicos from "./pages/cadastrar_servicos";
import CadastrarProfissionais from "./pages/cadastrar_profissionais";
import Avaliacoes from "./pages/avaliacoes";
import CadastrarAvaliacoes from "./pages/cadastrar_avaliacoes";
import DescricaoServicos from "./pages/descricao_servicos";
import Clinicas from "./pages/clininas";

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "#086281",
                    },
                    headerTintColor: "white",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontStyle: "normal",
                        fontSize: 24,
                        lineHeight: 30,
                        color: "white",
                    },
                }}
            >
                <Screen
                    name="Login"
                    options={{ headerShown: false }}
                    component={Login}
                />
                <Screen
                    name="Cadastro"
                    options={{ headerShown: false }}
                    component={Cadastro}
                />
                <Screen
                    name="Infos"
                    options={{ headerShown: false }}
                    component={Infos}
                />
                <Screen
                    name="Drawer"
                    options={{ headerShown: false }}
                    component={DrawerNavigator}
                />

                <Screen
                    name="ClinicasInfo"
                    options={{
                        title: "Clínica Info",
                    }}
                    component={ClinicasInfo}
                />

                <Screen
                    name="Profissionais"
                    options={{
                        title: "Profissionais",
                    }}
                    component={Profissionais}
                />

                <Screen
                    name="CadastrarVacinas"
                    options={{
                        title: "Cadastrar Vacinas",
                    }}
                    component={CadastrarVacinas}
                />

                <Screen
                    name="CadastrarServicos"
                    options={{
                        title: "Cadastrar Serviços",
                    }}
                    component={CadastrarServicos}
                />

                <Screen
                    name="CadastrarProfissionais"
                    options={{
                        title: "Cadastrar Profissionais",
                    }}
                    component={CadastrarProfissionais}
                />

                <Screen
                    name="Avaliacoes"
                    options={{
                        title: "Avaliações",
                    }}
                    component={Avaliacoes}
                />

                <Screen
                    name="CadastrarAvaliacoes"
                    options={{
                        title: "Cadastrar Avalições",
                    }}
                    component={CadastrarAvaliacoes}
                />

                <Screen
                    name="DescricaoServicos"
                    options={{
                        title: "Serviço",
                    }}
                    component={DescricaoServicos}
                />

                <Screen
                    name="Servicos"
                    options={{
                        title: "Serviços",
                    }}
                    component={Servicos}
                />

                <Screen
                    name="Clinicas_perfil"
                    options={{
                        title: "Clinicas",
                    }}
                    component={Perfil_clinicas}
                ></Screen>

                <Screen
                    name="Pets"
                    options={{
                        title: "Pets",
                    }}
                    component={Pets}
                />

                <Screen
                    name="Vacinas"
                    options={{
                        title: "Vacinas",
                    }}
                    component={Vacinas}
                />

                <Screen
                    name="Consultas"
                    options={{
                        title: "Histórico",
                    }}
                    component={Consultas}
                />
            </Navigator>
        </NavigationContainer>
    );
}
