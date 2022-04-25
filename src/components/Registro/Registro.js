import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Registro(props) {
    const [cidade, setCidade] = useState("Não Informado");
    const [resumo, setResumo] = useState("Não Informado");
    const [tempmax, setTempmax] = useState("Não Informado");
    const [tempmin, setTempmin] = useState("Não Informado");
    const [icone, setIcone] = useState("Sem imagem");

    useLayoutEffect(() => {
        if (props.dados) setCidade(props.dados.entidade);
        if (props.dados) setTempmax(props.dados.temp_max);
        if (props.dados) setTempmin(props.dados.temp_min);
        if (props.dados) setResumo(props.dados.resumo);
        if (props.dados) setIcone(props.dados.icone);
    }, [props]);

    return (
        <View>
            <View>
                <Text>Cidade:</Text>
                <Text>{cidade}</Text>
            </View>

            <Image
                style={styles.imagem}
                source={{
                    uri: icone,
                }}
            />

            <View>
                <Text>Temperatura máxima:</Text>
                <Text>{tempmax}</Text>
            </View>

            <View>
                <Text>Temperatura mínima:</Text>
                <Text>{tempmin}</Text>
            </View>

            <View>
                <Text>Resumo do dia:</Text>
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
    },
    imagem: {
        width: 50,
        height: 50,
    },
});
