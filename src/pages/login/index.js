import React, { useState } from "react"
import { View, Image, Text, TextInput, TouchableOpacity, Button } from "react-native"
import styles from "./styles"
import background from "../../assets/icon.png"
import { Feather } from "@expo/vector-icons"

export default function Login({ navigation }) {
  const [input, setInput] = useState("")
  const [hidePass, sethidePass] = useState(true)


  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={background} style={styles.fundo} />
      </View>

      <View style={styles.fundocor}>
        <View style={styles.containermsg}>
          <Text style={styles.mensagem}>Login</Text>
        </View>

        <View style={styles.containeremailsenha}>
          <View style={styles.containeremail}>
            <Text style={styles.email}>Email</Text>
            <View style={styles.input} >
                <Feather name="mail" size={21} color="black" />
                <TextInput style = {{flex: 1, marginLeft: 5}} keyboardType="email-address" />
            </View>
          </View>

          <View style={styles.containersenha}>
            <Text style={styles.senha}>Senha</Text>

            <View style={styles.input} keyboardType="password">
                <TextInput style = {{flex: 1, marginRight: 5}} value={input} onChange={texto => setInput(texto)} secureTextEntry={hidePass} />
                <TouchableOpacity style={styles.icon} onPress={() => sethidePass(!hidePass)}>
                    {hidePass ? <Feather name="eye" size={21} color="black" /> : <Feather name="eye-off" size={21} color="black" />}
                </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.containerbutton}>
          <Button
            title="Entrar"
            size="50"
            color="white"
            onPress={() => {
              navigation.navigate("Drawer")
            }}
          />
        </View>

        <View style={styles.containercadastro}>
          <TouchableOpacity
            style={styles.cadastro}
            onPress={() => {
              navigation.navigate("Cadastro")
            }}
          >
            <Text style={styles.cadastrotext}>Não tem uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
