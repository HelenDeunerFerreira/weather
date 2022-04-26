import { StatusBar } from 'expo-status-bar';
import { Container, Imagem, Texto, TextPerfil } from './style'

export default function Sobre() {
    return (
        <Container>
            <Imagem source={require('../../../assets/foto-helen.jpg')} />

            <Texto>Olá, me chamo Helen e estou cursando Ciência da Computação na IMED. Meu aniversário é 5 de fevereiro e tenho 19 anos. Moro em Passo Fundo/RS com a minha família.</Texto>

            <TextPerfil>Perfil no LinkedIn: Helen Deuner Ferreira</TextPerfil>
            <TextPerfil>Perfil no GitHub: HelenDeunerferreira</TextPerfil>

            <StatusBar style="auto" />
        </Container>
    );
}