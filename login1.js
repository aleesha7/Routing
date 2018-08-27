import React,{ Component } from 'react';
import { StyleSheet, View, Image ,Text} from 'react-native';
import LoginForm from './Loginfrom';

export default class Login extends Components{
    render(){
        return(
            <View style={StyleSheet.container}>
                <View style={StyleSheet.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('C:\Users\HP\Desktop\chat.jpg')}
                    /> 
                    <Text style={styles.title}> An app made for github using React Native</Text>
                </View>
                <View style={styles.formContainer}>
                    <Loginform />
                </View>
            </View>
        );
    }
}
const styles =StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'blue'
    },
    logoContainer:{
        alignItems: 'centre',
        flexGrow: 1,
        justifyContent: 'centre'
    },
    logo:{
        width:100,
        height: 100,

    },
    title: {
        color:'#FFF'
        marginTop:10,
        width: 140,
        textAlign: 'center'
        opacity:0.9
    }
})