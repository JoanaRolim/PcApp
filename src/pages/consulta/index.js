import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './styles';

export default function Consultas({navigation}){
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.clinica}>Clínica: Pequenos Amigos</Text>
                        <Text style = {styles.profissional}>Profissional: Alice Rodrigues Moratti </Text>
                        <Text style = {styles.data}>Data: 07/02/2020</Text>
                        <Text style = {styles.servico}>Serviço: Vacina</Text>
                    </View>

                </View>


                <View style = {styles.detalhes}>
                    
                <View>
                        <Text style = {styles.clinica}>Clínica: Pequenos Amigos</Text>
                        <Text style = {styles.profissional}>Profissional: Alice Rodrigues Moratti </Text>
                        <Text style = {styles.data}>Data: 07/02/2020</Text>
                        <Text style = {styles.servico}>Serviço: Vacina</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}