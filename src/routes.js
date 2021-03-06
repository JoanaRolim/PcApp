import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

// import DrawerNavigator from "./DrawerNavigator";
import Login from "./pages/login/index";
import Cadastro from "./pages/cadastro/index";
import Infos from "./pages/cadastrar_pet";
import DrawerNavigator from "./DrawerNavigator";


import Perfil_pets from "./pages/perfil_pets";
import Vacinas from "./pages/vacinas";
import ClinicasInfo from "./pages/clinica_info";
import Consultas from "./pages/consulta";
import Pets from "./pages/pets";
import Perfil_clinicas from "./pages/perfil_clinicas";
import Profissionais from "./pages/profissionais";
import Servicos from "./pages/servicos";
import CadastrarClinica from "./pages/cadastrar_clinica";
import CadastrarVacinas from "./pages/cadastrar_vacinas";
import CadastrarServicos from "./pages/cadastrar_servicos";
import CadastrarProfissionais from "./pages/cadastrar_profissionais";
import Avaliacoes from "./pages/avaliacoes";
import CadastrarAvaliacoes from "./pages/cadastrar_avaliacoes";
import CadastrarAgendamento from "./pages/cadastrar_agendamentos";
import DescricaoServicos from "./pages/descricao_servicos";
import Clinicas from "./pages/clinicas";
import EditarClinica from "./pages/editar_clinica";
import EditarPet from "./pages/editar_pet";
import EditarProfissional from "./pages/editar_profissional";
import EditarServico from "./pages/editar_servico";
import EditarVacina from "./pages/editar_vacina";

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
                        title: "Informa????es da Cl??nica",
                    }}
                    component={ClinicasInfo}
                />

                <Screen
                    name="EditarClinica"
                    options={{
                        title: "Editar Cl??nica",
                    }}
                    component={EditarClinica}
                />

                <Screen
                    name="Profissionais"
                    options={{
                        title: "Profissionais",
                    }}
                    component={Profissionais}
                />

                <Screen
                    name="EditarProfissional"
                    options={{
                        title: "Editar Profissional",
                    }}
                    component={EditarProfissional}
                />

                <Screen
                    name="CadastrarVacinas"
                    options={{
                        title: "Cadastrar Vacina",
                    }}
                    component={CadastrarVacinas}
                />

                <Screen
                    name="CadastrarServicos"
                    options={{
                        title: "Cadastrar Servi??o",
                    }}
                    component={CadastrarServicos}
                />

                <Screen
                    name="CadastrarProfissionais"
                    options={{
                        title: "Cadastrar Profissional",
                    }}
                    component={CadastrarProfissionais}
                />

                <Screen
                    name="Avaliacoes"
                    options={{
                        title: "Avalia????es",
                    }}
                    component={Avaliacoes}
                />

                <Screen
                    name="CadastrarAvaliacoes"
                    options={{
                        title: "Cadastrar Avalia????o",
                    }}
                    component={CadastrarAvaliacoes}
                />

                <Screen
                    name="DescricaoServicos"
                    options={{
                        title: "Servi??o",
                    }}
                    component={DescricaoServicos}
                />

            <Screen
                    name="EditarServico"
                    options={{
                        title: "Editar Servi??o",
                    }}
                    component={EditarServico}
                />

            <Screen
                    name="CadastrarAgendamento"
                    options={{
                        title: "Agendar Servi??o",
                    }}
                    component={CadastrarAgendamento}
                />


                <Screen
                    name="Servicos"
                    options={{
                        title: "Servi??os",
                    }}
                    component={Servicos}
                />

                <Screen
                    name="Clinicas_perfil"
                    options={{
                        title: "Cl??nicas",
                    }}
                    component={Perfil_clinicas}
                ></Screen>


                <Screen
                    name="CadastrarClinica"
                    options={{
                        title: "Cadastrar Cl??nica",
                    }}
                    component={CadastrarClinica}
                ></Screen>

                <Screen
                    name="Pets"
                    options={{
                        title: "Pets",
                    }}
                    component={Pets}
                />
                  <Screen
                    name="EditarPet"
                    options={{
                        title: "Informa????es do Pet",
                    }}
                    component={EditarPet}
                />

                <Screen
                    name="Vacinas"
                    options={{
                        title: "Vacinas",
                    }}
                    component={Vacinas}
                />

                <Screen
                    name="EditarVacina"
                    options={{
                        title: "Editar Vacina",
                    }}
                    component={EditarVacina}
                />


                <Screen
                    name="Consultas"
                    options={{
                        title: "Agendamentos",
                    }}
                    component={Consultas}
                />
            </Navigator>
        </NavigationContainer>
    );
}
