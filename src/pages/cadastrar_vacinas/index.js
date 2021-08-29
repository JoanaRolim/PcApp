import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

import styles from './styles';

export default function CadastarVacinas({navigation}){
    return(
        <ScrollView style = {styles.container} >
            <View style = {styles.descricao}>

                <View style = {styles.detalhes}>
                    
                    <View>
                        <Text style = {styles.vacina}>Vacina: </Text>
                        <Text style = {styles.data}>Data: </Text>
                        <Text style = {styles.local}>Local: </Text>
                    </View>

                </View>
            </View>
            <TouchableOpacity style={styles.containerbutton}   onPress = { () => {navigation.navigate("Vacinas")}}>
            <Text style={styles.button} >Salvar</Text>
            <Feather style={styles.chevron} name="chevron-right" size={40} color="#FFFF" />
          </TouchableOpacity>

        </ScrollView>
    );
}