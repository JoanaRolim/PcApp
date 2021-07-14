import React from 'react'
import { Feather} from '@expo/vector-icons';
import {View, Image, Text, ScrollView, TouchableOpacity, ImageBackground} from 'react-native'

import styles from './styles';

import fundoImg from '../../assets/image.png';

export default function Vacinas({navigation}){
    return(
        <ScrollView style = {styles.container} >
            <ImageBackground source = {fundoImg} style = {styles.backgroundImage} />
            <TouchableOpacity
                style={ styles.navigation }
                onPress={() => navigation.toggleDrawer()}
            >
                <Feather name = "align-justify" size = {25} color = "#000000" />
            </TouchableOpacity>

            <View style = {styles.header}>
                <Text style = {styles.headerText}>
                    Vacina
                </Text>
            </View>
        </ScrollView>
    );
}