import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { View, TextInput, Text, ScrollView, Button, Image, TouchableOpacity } from "react-native"

import NumberPlease from "react-native-number-please"

import icone from "../../assets/camera.png"

import styles from "./styles"

export default function Infos({ navigation }) {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Cadastro</Text>
        </View>

        <View style={styles.descricao}>
            <View style={styles.detalhes}>

                <View>
                    <Text style={styles.containerinput}>Nome do Pet:</Text>
                    <TextInput style={styles.input} keyboardType="text" />

                    <Text style={styles.containerinput}>Idade do Pet:</Text>
                    <TextInput style={styles.input} keyboardType="numeric" />

                    <Text style={styles.containerinput}>Peso do Pet:</Text>
                    <TextInput style={styles.input} keyboardType="numeric" />

                    <Text style={styles.containerinput}>Alergias do Pet:</Text>
                    <TextInput style={styles.input} keyboardType="text" />

                    <Text style={styles.containerinput}>Altura do Pet:</Text>
                    <TextInput style={styles.input} keyboardType="numeric" />

                    <Text style={styles.containerinput}>O Pet tem castração:</Text>
                    <TextInput style={styles.input} keyboardType="text" />
                    
                    <Text style={styles.containerinput}>Dono do Pet:</Text>
                    <TextInput style={styles.input} keyboardType="text" />
                </View>

                <View style={styles.containericon}>
                    <Text style={styles.containerinput}>Insira uma foto do seu Pet:</Text>
                    <TouchableOpacity style={styles.icon} onPress={() => {}}>
                        <Feather name="plus-circle" size={20} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.containerfoto}>
            <Image source={icone} style={styles.foto} />
        </View>

        <View style={styles.containerbutton}>
            <Button
            style={styles.button}
            title="Avançar"
            color="#ffffff"
            onPress={() => {
                navigation.navigate("Drawer")
            }}
            />
        </View>
    </ScrollView>
  )
}
