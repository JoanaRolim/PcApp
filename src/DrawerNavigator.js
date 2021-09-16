import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Navigator, Screen } = createDrawerNavigator();

import Perfil_pets from "./pages/perfil_pets";
import Clinicas from "./pages/clininas";
import CadastrarClinica from "./pages/cadastrar_clinica";

export default function DrawerNavigator() {
    return (
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
            <Screen name="Perfil" component={Perfil_pets} />
            <Screen name="Clínicas" component={Clinicas} />
        </Navigator>
    );
}
