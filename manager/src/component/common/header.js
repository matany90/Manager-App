import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
<View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}
    </Text>
</View>);


const styles = {
textStyle: {
    fontSize: 20,
    fontWeight: '600'


    },
viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',

}    

};

export {Header};
