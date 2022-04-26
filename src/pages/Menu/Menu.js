import { StatusBar } from 'expo-status-bar';
import { Container, Title, ButtonCidade, TextoButton, ButtonSobre } from './style'

export default function Menu({ navigation }) {
    return (
        <Container>
            <Title>MENU</Title>

            <ButtonCidade
                onPress={() => navigation.navigate('Previsao', { cidade: "4304705" })}
            >
                <TextoButton>Carazinho</TextoButton>
            </ButtonCidade>

            <ButtonCidade
                onPress={() => navigation.navigate('Previsao', { cidade: "4307005" })}
            >
                <TextoButton>Erechim</TextoButton>
            </ButtonCidade>

            <ButtonCidade
                onPress={() => navigation.navigate('Previsao', { cidade: "4311809" })}
            >
                <TextoButton>Marau</TextoButton>
            </ButtonCidade>

            <ButtonCidade
                onPress={() => navigation.navigate('Previsao', { cidade: "4314100" })}
            >
                <TextoButton>Passo Fundo</TextoButton>
            </ButtonCidade>

            <ButtonCidade
                onPress={() => navigation.navigate('Previsao', { cidade: "4320800" })}
            >
                <TextoButton>Soledade</TextoButton>
            </ButtonCidade>

            <ButtonSobre onPress={() => navigation.navigate('Sobre')} >
                <TextoButton>Sobre</TextoButton>
            </ButtonSobre>

            <StatusBar style="auto" />
        </Container>
    );
}