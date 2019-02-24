import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View
} from 'react-native';

import Button from './Button'

/*
const buttons =[
    ['MC','MR','MS','M+','M-'],
    ['DEL','CE','C','+-','√'],
    [7,8,9,'/','%'],
    [4,5,6,'*','1/x'],
    [1,2,3, '-'],
    [0,'.','+','=']
];
*/
export default class App extends Component{

    render(){ 
        return(
            <View style={StyleSheet.container}>
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>0</Text>

                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.row}>
                        <Button text="MC"></Button>
                        <Button text="MR"></Button>
                        <Button text="MS"></Button>
                        <Button text="M+"></Button>
                        <Button text="M-"></Button>
                    </View>
                    <View style={styles.row}>
                        <Button text="DEL"></Button>
                        <Button text="CE"></Button>
                        <Button text="C"></Button>
                        <Button text="+-"></Button>
                        <Button text="√"></Button>
                    </View>
                    <View style={styles.row}>
                        <Button text="7"></Button>
                        <Button text="8"></Button>
                        <Button text="9"></Button>
                        <Button text="/"></Button>
                        <Button text="%"></Button>
                    </View>
                    <View style={styles.row}>
                        <Button text="4"></Button>
                        <Button text="5"></Button>
                        <Button text="6"></Button>
                        <Button text="*"></Button>
                        <Button text="1/x"></Button>
                    </View>
                    <View style={styles.row}>
                        <Button text="1"></Button>
                        <Button text="2"></Button>
                        <Button text="3"></Button>
                        <Button text="-"></Button>
                        <Button text="%"></Button>
                    </View>
                    <View style={styles.row}>
                        <Button text="0" special></Button>
                        <Button text="."></Button>
                        <Button text="+"></Button>
                        <Button text="="></Button>
                   
                    </View>
                </View>

            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAF4FD'
    },
    resultContainer: {
        flex: 8,
        backgroundColor: '#D5E5F2'
        
    },
    resultText: {
        color: 'black',
        fontSize: 80,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'right'
    },
    row:{
      flex:1,
      flexDirection: row,
      backgroundColor: '#EBECED'

    }
});