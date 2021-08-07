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
  const [open, setOpen] = useState(false)  
  const [value, setValue] = useState(null)

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
            <View style={styles.input}>
                <Feather name="user" size={21} color="black" />
                <TextInput style={{flex: 1,  marginLeft: 5}} keyboardType="email-address" />
            </View>
          </View>

          <View style={styles.containeremail}>
            <Text style={styles.email}>Email</Text>
            <View style={styles.input}>
                <Feather  name="mail" size={21} color="black" />
                <TextInput style={{flex: 1,  marginLeft: 5}}  keyboardType="email-address" />
            </View>
          </View>

          <View style={styles.containersenha}>
            <Text style={styles.senha}>Senha</Text>
            <View style={styles.inputArea} keyboardType="password">
                <View style={styles.input}>
                    <Feather name="lock" size={21} color="black" />
                    <TextInput style={{flex: 1,  marginRight: 5,marginLeft: 5}} value={input} onChange={texto => setInput(texto)} secureTextEntry={hidePass} />
                    <TouchableOpacity onPress={() => sethidePass(!hidePass)}>
                    {hidePass ? <Feather name="eye" size={21} color="black" /> : <Feather name="eye-off" size={21} color="black" />}
                    </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.containertipo}>
            <Text style={styles.tipo}>Tipo de Usuário</Text>
            <DropDownPicker
              value = {value}
              setValue = {setValue}
              open = {open}
              setOpen = {setOpen}
              items={[
                { label: "Usuário", value: "item1" },
                { label: "Dono de Clínica", value: "item2" }
              ]}
              style={styles.selector}
              placeholder="Selecione"
              containerStyle={{ height: 30, borderRadius: 5 }}
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
