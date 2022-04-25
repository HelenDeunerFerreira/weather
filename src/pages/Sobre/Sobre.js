import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Sobre({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../../../assets/foto-helen.jpg')} />
            <Text style={styles.texto}>Olá, me chamo Helen e estou cursando Ciência da Computação na IMED. Meu aniversário é 5 de fevereiro e tenho 19 anos. Moro em Passo Fundo/RS com a minha família.</Text>
            <Text style={styles.perfil}>Perfil no LinkedIn: Helen Deuner Ferreira</Text>
            <Text style={styles.perfil}>Perfil no GitHub: HelenDeunerferreira</Text>
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
    texto: {
        textAlign: 'justify',
        fontSize: 20,
        margin: 15,
    },
    perfil: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imagem: {
        height: 200,
        width: 200
    }
});