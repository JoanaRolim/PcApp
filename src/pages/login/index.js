import React, { useState } from "react"
import { View, Image, Text, TextInput, TouchableOpacity, Button } from "react-native"
import styles from "./styles"
import background from "../../assets/icon.png"
import { Feather } from "@expo/vector-icons"
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [input, setInput] = useState("")
  const [hidePass, sethidePass] = useState(true)

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
    async function handleSubmit() {
      try {
         
      const response = await api.post('auth/login', { email, password });
      if (response.data) {
        await AsyncStorage.setItem('id', response.data.id);
        await AsyncStorage.setItem('role', response.data.role);
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('name', response.data.name)

       navigation.navigate("Drawer");
      } else {
        console.log('Usuário/Senha incorreto.');
      }
      } catch (e) {
        console.log(e);
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={background} style={styles.fundo} />
      </View>

      <View style={styles.fundocor}>
        <View style={styles.containermsg}>
          <Text style={styles.mensagem}>Login</Text>
        </View>

        <View>
          <View style={styles.containeremailsenha}>
            <View style={styles.containeremail}>
              <Text style={styles.email}>Email</Text>
              <View style={styles.input} >
                  <Feather name="mail" size={21} color="black" />
                  <TextInput value={email} onChangeText={value => setEmail(value)} style = {{flex: 1, marginLeft: 5}} keyboardType="email-address" />
              </View>
            </View>

            <View style={styles.containersenha}>
              <Text style={styles.senha}>Senha</Text>

              <View style={styles.input} keyboardType="password">
                  <Feather name="lock" size={21} color="black" />
                  <TextInput value={password} onChangeText={value => setPassword(value)} style = {{flex: 1, marginRight: 5, marginLeft: 5}} secureTextEntry={hidePass} />
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
               handleSubmit()
              }}
              type="submit"
            />
          </View>
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
