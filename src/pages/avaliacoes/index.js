import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";

import styles from "./styles";

export default function Avaliacoes({ navigation }) {
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress = {()=>{navigation.navigate("CadastrarAvaliacoes", {teste:null} )}} style={{ paddingRight: 20 }}>
                  <Feather name="plus-circle" size={27} color="#ffffffff" />
                </TouchableOpacity>
              )
        })
    },[navigation])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.descricao}>
                <View style={styles.detalhes}>
                        <View>
                            <Text style={styles.nome}>
                                Camila Marques Rodriguez
                            </Text>
                            <Text style={styles.avaliacao}>
                                Atendimento impecável, cuidaram muito bem dos
                                meus bichinhos!
                            </Text>
                        </View>

                        <FontAwesome name="star" size={15} color="black">
                            <Text style={styles.nota}>10</Text>
                        </FontAwesome>
                </View>

                <View style={styles.detalhes}>
                        <View>
                            <Text style={styles.nome}>Joana Pacheco Rolim</Text>
                            <Text style={styles.avaliacao}>
                                Deixaram a desejar, cheguei antes do horário
                                marcado e ainda atrasaram meu atendimento.
                            </Text>
                        </View>

                        <FontAwesome name="star" size={15} color="black">
                            <Text style={styles.nota}>5</Text>
                        </FontAwesome>
                </View>

                <View style={styles.detalhes}>
                        <View>
                            <Text style={styles.nome}>Ana Paula Merencia</Text>
                            <Text style={styles.avaliacao}>
                                Ótimo atendimento, porém na hora de pagar
                                cobraram um valor diferente do estipulado no
                                aplicativo.
                            </Text>
                        </View>

                        <FontAwesome name="star" size={15} color="black">
                            <Text style={styles.nota}>8</Text>
                        </FontAwesome>
                </View>
            </View>
        </ScrollView>
    );
}
