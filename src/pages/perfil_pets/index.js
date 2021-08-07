import React from 'react';
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';

import icone from '../../assets/icon.jpg';

import styles from './styles';


export default function Perfil({navigation}){
    return(
        <ScrollView  style = {styles.container} >
            
            <View style = {styles.nome_usuario} >
                <Text style = {styles.text_nome_usuario} >Lady Gaga</Text>
            </View>

            <View style = {styles.menu} >
                <TouchableOpacity>
                    <Text style = {styles.text_menu} >Pets</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = { () => {navigation.navigate("Clinicas_perfil")} } >
                    <Text style = {styles.text_menu} >Clinicas</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.pets}>
                <View style = {styles.pets_text} >
                    <Text style = {styles.text_nome} >
                        Pepita
                    </Text>
                    <Text style = {styles.text_idade}>
                        5 anos
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Pets")} } >
                        <View style = {styles.icone} >
                            <Feather name="list" size={21} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.pets}>
                <View style = {styles.pets_text} >
                    <Text style = {styles.text_nome} >
                        Pepita
                    </Text>
                    <Text style = {styles.text_idade}>
                        5 anos
                    </Text>
                </View>
                <View style = {styles.list}>
                    <TouchableOpacity onPress = { () => {navigation.navigate("Pets")} }>
                        <View style = {styles.icone} >
                            <Feather name="list" size={21} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}