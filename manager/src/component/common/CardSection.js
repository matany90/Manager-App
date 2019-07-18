import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (

    <View style={[styles.containerStyle,props.style]}>
    {props.children}
    </View>
);  

const styles = {
    containerStyle: {
        borderBottomWidth: 2,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export {CardSection};
