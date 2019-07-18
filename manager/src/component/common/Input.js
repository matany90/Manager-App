import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = (props) => {

return (
    <View style={styles.containerStyle}>
    <Text style={styles.textStyle}>{props.textInput}</Text>
    <TextInput 
    secureTextEntry={props.secureTextEntry}
    placeholder={props.textHolder}
    autoCorrect={false}
    value={props.value}
    onChangeText={props.onChangeText}
    style={styles.inputStyle}
    />
    </View>

);
};


const styles ={

    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        fontStyle: 'italic'
    },

    textStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };
