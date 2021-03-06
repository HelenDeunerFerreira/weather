import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Container } from './style'

import { getCitys } from '../../services/PrevisaoTempo';
import Registro from '../../components/Registro/Registro';


export default function Previsao(props) {

    const [cidade, setCidade] = useState({})

    useLayoutEffect(() => {
        let cidade = props.route.params.cidade
        let dia = "25/04/2022"
        let turno = ["manha", "tarde", "noite"]

        getCitys(cidade)
            .then(dados => {
                setCidade(dados[cidade][dia][turno[0]])
            })

            .catch(erro => console.log(erro))
    }, [])


    return (
        <Container>
            <Registro
                dados={cidade}
            />

            <StatusBar style="auto" />
        </Container>
    );
}
