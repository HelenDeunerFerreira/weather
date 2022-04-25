import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Opções do Menu:</Text>

            <View style={styles.viewbuttons}>
                <Button
                    title="Carazinho"
                    onPress={() => navigation.navigate('Carazinho', { cidade: "4304705" })}
                />
                <Button title='Sobre a dev' onPress={() => navigation.navigate('Sobre')} />
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