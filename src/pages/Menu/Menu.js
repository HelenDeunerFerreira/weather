import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Opções do Menu:</Text>

            <View>

                <Button
                    title="Carazinho"
                    onPress={() => navigation.navigate('Previsao', { cidade: "4304705" })}
                />

                <Button
                    title="Erechim"
                    onPress={() => navigation.navigate('Previsao', { cidade: "4307005" })}
                />

                <Button
                    title="Marau"
                    onPress={() => navigation.navigate('Previsao', { cidade: "4311809" })}
                />

                <Button
                    title="Passo Fundo"
                    onPress={() => navigation.navigate('Previsao', { cidade: "4314100" })}
                />

                <Button
                    title="Soledade"
                    onPress={() => navigation.navigate('Previsao', { cidade: "4320800" })}
                />

                {/* <Button title='Sobre a dev' onPress={() => navigation.navigate('Sobre')} /> */}
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    viewbuttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30
    },
    titulo: {
        fontSize: 25,
        fontStyle: 'italic',
        textAlign: 'center'
    }
});