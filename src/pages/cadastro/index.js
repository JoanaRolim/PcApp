import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { View, Image, Text, TextInput, TouchableOpacity, Button, Picker } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import DropDownPicker from "react-native-dropdown-picker"
import styles from "./styles"
import background from "../../assets/icon.png"

export default function Cadastro({ navigation }) {
  const [input, setInput] = useState("")
  const [hidePass, sethidePass] = useState(true)
  const usersType = ["Usuário", "Dono de Clínica"]

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
            <Text style={styles.email}>Nome</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
            <Feather style={styles.user} name="user" size={21} color="black" />
          </View>

          <View style={styles.containeremail}>
            <Text style={styles.email}>Email</Text>
            <TextInput style={styles.input} keyboardType="email-address" />
            <Feather style={styles.mail} name="mail" size={21} color="black" />
          </View>

          <View style={styles.containersenha}>
            <Text style={styles.senha}>Senha</Text>
            <View style={styles.inputArea} keyboardType="password">
              <TextInput style={styles.input} value={input} onChange={texto => setInput(texto)} secureTextEntry={hidePass} />
              <TouchableOpacity style={styles.icon} onPress={() => sethidePass(!hidePass)}>
                {hidePass ? <Feather name="eye" size={21} color="black" /> : <Feather name="eye-off" size={21} color="black" />}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containeremail}>
            <Text style={styles.email}>Tipo de Usuário</Text>
            <DropDownPicker
              items={[
                { label: "Item 1", value: "item1" },
                { label: "Item 2", value: "item2" }
              ]}
              style={styles.selector}
              placeholder="Selecione"
              containerStyle={{ height: 30, borderRadius: 5, width: 330 }}
              color="#DEF0F6"
              onChangeItem={item => console.log(item.label, item.value)}
            />
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
