import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttomStyle, textStyle } = styles;
   return (<TouchableOpacity style={buttomStyle} onPress={props.onPress}>  
        <Text style={textStyle}>{props.textButton}</Text> 
    </TouchableOpacity>    
    );
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#077aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10 
    },
    buttomStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    }
};

export  {Button} ;
