import React, { useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Registro(props) {

    const data = props.dados
    const [manha, setManha] = useState("Não Informado")
    const [resumo, setResumo] = useState("Não Informado")
    const [tempmax, setTempmax] = useState("Não Informado")
    const [tempmin, setTempmin] = useState("Não Informado")
    const [icone, setIcone] = useState(null)

    useLayoutEffect(() => {

        if (data.name.title)
            setManha(`${data.name.title} ${data.name.first} ${data.name.last}`)
        if (data.resumo)
            setResumo(data.resumo)
        if (data.cell)
            setTempmax(data.cell)
        if (data.picture)
            setIcone(data.picture.thumbnail)

    }, [])


    return (

        <TouchableOpacity
            onPress={() => props.navigation.navigate("Dados", props.dados)}
        >
            <View style={styles.container}>
                <View style={styles.linha}>
                    <View style={styles.icone}>
                        <Image
                            style={styles.imagem}
                            source={{
                                uri: icone
                            }}
                        />
                    </View>
                    <View style={styles.dados}>

                        <View style={styles.coluna}><Text>manha:</Text></View>
                        <View style={styles.valor}>
                            <Text style={{
                                fontWeight: "bold",
                                color: data.name ? "black" : "red"
                            }}>{manha}</Text>
                        </View>
                        <View style={styles.coluna} ><Text>tempmax:</Text></View>
                        <View style={styles.valor}>
                            <Text style={{
                                color: data.cell ? "black" : "red"
                            }}>{tempmax}</Text></View>
                        <View style={styles.coluna} ><Text>E-mail:</Text></View>
                        <View style={styles.valor}>
                            <Text style={{
                                color: data.resumo ? "black" : "red"
                            }}>{resumo}</Text></View>

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5

    }, linha: {
        flexDirection: "row"
    }, coluna: {
        flex: 1
    }, valor: {
        flex: 4
    }, icone: {
        flex: 1
    }, dados: {
        flex: 4
    }, imagem: {
        width: 50,
        height: 50,
    },
});