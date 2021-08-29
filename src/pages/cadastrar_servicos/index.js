import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './styles';

export default function Servicos({navigation}){
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.nome}>Nome do Serviço:</Text>
                        <Text style = {styles.profissional}>Profissionais Responsáveis: </Text>
                        <Text style = {styles.infos}>Informações Adicionais: </Text>
                        <Text style = {styles.indicacao}>Indicações: </Text>
                    </View>

                </View>

            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => {navigation.navigate("Servicos")}}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>

        </ScrollView>
    );
}