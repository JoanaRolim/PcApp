import React from "react";
import { Feather } from "@expo/vector-icons";
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";

import styles from "./styles";

export default function Clinicas({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.descricao}>
                <View style={styles.detalhes}>
                    <View>
                        <Text style={styles.nome}>4 Patas</Text>
                        <Text style={styles.local}>
                            Av. República Argentina, 54 - Vila Militar, Foz do
                            Iguaçu - PR
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.icone}
                        onPress={() => {
                            navigation.navigate("Servicos", { teste: "teste" });
                        }}
                    >
                        <Feather
                            name="more-vertical"
                            size={24}
                            color="#000000"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.detalhes}>
                    <View>
                        <Text style={styles.nome}>Dogs and Cats</Text>
                        <Text style={styles.local}>
                            Rua Xavier da Silva, 1670 - Centro, Foz do Iguaçu -
                            PR
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.icone}
                        onPress={() => {
                            navigation.navigate("Servicos", { teste: "teste" });
                        }}
                    >
                        <Feather
                            name="more-vertical"
                            size={24}
                            color="#000000"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
