import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View
} from 'react-native';


const Button = ({ text }) => (
    <View style={special ? styles.specialContainer : styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
);
export default Button;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EBECED',
        flex: 1,
        margin: 1,
        justifyContent: 'center',
        alignItem: "center"
    },
    specialContainer:{
        backgroundColor: '#EBECED',
        flex: 2,
        margin: 1,
        justifyContent: 'center',
        alignItem: "center"
    },  
    text:{
        fontSize: 36,
        color:'#000'
    }

});