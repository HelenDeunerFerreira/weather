import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Registro(props) {
    // const data = props.dados;
    // console.log('PROPS QUE VAI PARA REGISTRO:', props)
    // console.log('PROPS.DATA QUE VAI PARA REGISTRO:', props.data)
    const [resumo, setResumo] = useState("Não Informado");
    const [tempmax, setTempmax] = useState("Não Informado");

    useLayoutEffect(() => {
        if (props.dados) setTempmax(props.dados.temp_max)
        if (props.dados) setResumo(props.dados.resumo)
    }, [props]);

    return (
        <View>
            <View>
                <Text>tempmax:</Text>
                <Text>{tempmax}</Text>
            </View>

            <View>
                <Text>resumo:</Text>
                <Text>{resumo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5,
    }
});
