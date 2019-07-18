import React, {Component} from 'react';
import {View,Text,Picker} from 'react-native';
import {CardSection,Card,Input}from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class EmployeeForm extends Component{


    render ()
    {
        return (
        <Card>
            <CardSection>
                <Input
                textInput='Name:'
                textHolder='Jane'
                value={this.props.name}
                secureTextEntry={false}
                onChangeText={(text) => {this.props.employeeUpdate({prop: 'name',value: text})}}
                />
                
            </CardSection>

            <CardSection>
            <Input
                textInput='Phone:'
                textHolder='555-555'
                value={this.props.phone}
                secureTextEntry={false}
                onChangeText={(text) => {this.props.employeeUpdate({prop: 'phone',value: text})}}
                />
            </CardSection>

            <CardSection >
                <Text style={{fontSize: 18,paddingLeft: 20,flex:1}}>Shift:</Text> 
                
           <Picker
                style={{flex:2}}
                onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}
                selectedValue={this.props.shift}
                >
                    <Picker.Item label="Sunday" value="Sunday" />
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                </Picker>
                

            </CardSection>

        </Card>  
        );
    }
}

const mapStateToProps = (state) => {

    return ({
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift
    });
}

export default connect(mapStateToProps,actions)(EmployeeForm);
