import React, {Component} from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

class Aula03 extends Component {
    render(){
        return(
            <View style={ styles.container}>
                <View style={ styles.conteudo }>

                    <Image 
                        style={ styles.logo }
                        source={ require('../images/Logo_Bola_PNG.png')}
                    />
                   <Text style={styles.label}>Nome:</Text>
                   <TextInput 
                       style={ styles.input}
                   />
                    <TextInput 
                       style={ styles.input}
                   />
                </View>
            </View>
        )
    }
}

export default Aula03;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
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

    label: {
        color: 'white'
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
});