import React, { useState, useLayoutEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { getCitys } from '../services/PrevisaoTempo';
import Registro from '../components/Registro';

export default function Previsao({ navigation }) {

    const [cidade, setCidade] = useState([])
    const [info, SetInfo] = useState({})

    useLayoutEffect(() => {

        getCitys(6)
            .then(dados => setCidade(dados))
            .catch(erro => console.log(erro))

    }, [])

    return (
        <View style={styles.container}>
            <Text>Essa é a tela de previsão</Text>

            <FlatList
                data={cidade}
                renderItem={({ item }) =>
                    <Registro
                        dados={item}
                        navigation={navigation}
                    />
                }
                keyExtractor={item => item.resumo}

            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});