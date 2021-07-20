import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { View, Image, Text, TextInput, TouchableOpacity, Button } from "react-native"
import styles from "./styles"
import background from "../../assets/image3.png"

export default function Cadastro({ navigation }) {
  const [input, setInput] = useState("")
  const [hidePass, sethidePass] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={background} style={styles.fundo} />
      </View>

      <View style={styles.fundocor}>
        <View style={styles.containermsg}>
          <Text style={styles.mensagem}>Cadastro</Text>
        </View>

        <View style={styles.containeremailsenha}>
          <View style={styles.containeremail}>
            <Text style={styles.email}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
          </View>

                <View style = {styles.containerbutton}>
                    <Button
                        title="Avançar"
                        color="#000000"
                        onPress={() => {
                            navigation.navigate('Infos')
                            }}
                    />
                </View>
          <View style={styles.containersenha}>
            <Text style={styles.senha}>Senha</Text>

            <View style={styles.inputArea} keyboardType="password">
              <TextInput style={styles.input} value={input} onChange={texto => setInput(texto)} secureTextEntry={hidePass} />
              <TouchableOpacity style={styles.icon} onPress={() => sethidePass(!hidePass)}>
                {hidePass ? <Feather name="eye" size={20} color="#ffffffff" /> : <Feather name="eye-off" size={20} color="#ffffffff" />}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.containerbutton}>
          <Button
            title="Avançar"
            color="#000000"
            onPress={() => {
              navigation.navigate("Infos")
            }}
          />
        </View>
      </View>
    </View>
  )
}
