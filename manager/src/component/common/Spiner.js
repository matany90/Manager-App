import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spiner = (props) => {
return (
    <View style={styles.spinerStyle}>
        <ActivityIndicator size={props.size || 'large'} />
    </View>    
);

}

const styles ={
    spinerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    
    }
}

export { Spiner };