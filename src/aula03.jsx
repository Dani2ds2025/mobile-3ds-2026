import React, {Component} from "react";
import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";

class Aula03 extends Component {
    render(){
        return(
            <View style={ styles.container}>
                <View style={ styles.conteudo}>
                    <Image 
                        source={ require('../images/Logo_Bola_PNG.png')}
                        style={ styles.logo}
                    />
                   <Text style={styles.label}>Usuário:</Text>
                   <TextInput 
                       style={ styles.input}
                    />
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput 
                       style={ styles.input}
                   />

                   <Button 
                      style={ styles.botao }
                      title="Entrar"
                      color="green"
                      />

                </View>
            </View>
        );
    }
}
 
export default Aula03;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        border: 1,
        borderColor: "red"
    },

    conteudo: {
        borderColor: 'red',
        borderWidth: 1,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 100,
        height: 100,
    },

    textoCampo: {
        color: 'white'
    },

    label: {
        color: 'white',
        flex: 1,
    },

    input: {
        height: 40,
        margin: 20,
        width: 300,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },

    botao: {
        backgroundColor: 'green',
        color: 'black',
        padding: 20,
        borderRadius: 5
    }

});