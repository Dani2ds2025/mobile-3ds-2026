import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView, TextInput } from "react-native-web";

class Aula03 extends Component {
    render(){
        return(
           <View style={ styles.container}
              <TextInput 
                style={ styles.input }
              />
              <TextInput 
                style={ styles.input }
              />
           </SafeAreaView>
        );
    }
}

export default Aula03;

const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },

    input: (
        height: 40,
        margin: 20,
        width: 250
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5
    )
})