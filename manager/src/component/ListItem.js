import {View, Text, TouchableWithoutFeedback } from 'react-native';
import React , {Component} from 'react';
import {Card,CardSection} from './common';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component{
    

    render() 
    {
        return(
            <TouchableWithoutFeedback onPress={() => (Actions.employeeEdit({employee: this.props.employee}))}>
            <View>
            <CardSection>
            <Text style={styles.titleStyle}>{this.props.employee.name}</Text>

            </CardSection>
            </View>
            </TouchableWithoutFeedback>
        );
          
    }

}


const styles = {

    titleStyle: {

        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;
