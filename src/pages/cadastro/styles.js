import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F3E53"
    },
    background: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    fundo: {
        resizeMode: "cover",
        width: "100%",
        height: 300
    },
    fundocor: {
        padding: 20
    },
    containermsg: {
        margin: 20,
        alignItems: "center"
    },
    mensagem: {
        color: "#ffffff",
        fontSize: 30
    },
    containeremailsenha: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30
    },
    containeremail: {
        padding: 20
    },
    email: {
        paddingBottom: 10,
        color: "#ffffff",
        fontSize: 20
    },
    input: {
        backgroundColor: "#0E5676",
        borderRadius: 3,
        padding: 5,
        color: "#ffffff",
        width: "100%"
    },
    containersenha: {
        padding: 20
    },
    senha: {
        paddingBottom: 10,
        color: "#ffffff",
        fontSize: 20
    },
    containerbutton: {
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        padding: 10,
        backgroundColor: "#CDECF5",
        borderRadius: 20
    },
    inputArea: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center"
    },
    icon: {
        position: "absolute",
        top: 2,
        right: 5
    }
});
