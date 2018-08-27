import React,{ Component } from 'react';
import { StyleSheet, View,TextInput, TouchableOpacity,Text} from 'react-native';

export default class Login extends Components{
    render(){
        return(
            <View style={StyleSheet.container}>
            <TextInput
              placeholder="username or email"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
            />
            <TextInput
              placeholder="password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainter}>
               <Text style={styles.buttonText}>
                   Login
               </Text>
            </TouchableOpacity>
            </View>
        );
    }
}
const styles =StyleSheet.create({
    container:{
        padding:20
    },
    input: {
        height:40,
        backgroundColor:'rgba('255,255,255,0.7');
        marginBottom: 20
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainter: {
        backgroundColor: '#2980b9'
    }
 });