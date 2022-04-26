import React, { useState, useLayoutEffect } from "react";
import { Container, Imagem, Row, Subtitle, Conteudo } from './style'

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
        <Container>
            <Imagem
                source={{
                    uri: icone,
                }}
            />

            <Row>
                <Subtitle>Cidade: </Subtitle>
                <Conteudo>{cidade}</Conteudo>
            </Row>

            <Row>
                <Subtitle>Temperatura máxima: </Subtitle>
                <Conteudo>{tempmax}°C</Conteudo>
            </Row>

            <Row>
                <Subtitle>Temperatura mínima: </Subtitle>
                <Conteudo>{tempmin}°C</Conteudo>
            </Row>

            <Row>
                <Subtitle>Resumo do dia: </Subtitle>
                <Conteudo>{resumo}</Conteudo>
            </Row>
        </Container>
    );
}