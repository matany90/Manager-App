import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Card, CardSection, Input, Button, Spiner } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component{

    onButtonPress()
    {
        const { email, password} = this.props;
        this.props.loginUser({email,password})
    }
    renderError()
    {
        if(this.props.error)
        {
            return (
                <View style={{backgroundColor: 'white'}}>
                <Text style={styles.errorTextStyle}>
                {this.props.error}
                </Text>
                </View>
            );
        }
    }

    renderSpinerOrButton()
    {
        if(this.props.loading)
            {
                return (<Spiner />);
            }
            else 
            {
               return  <Button 
                onPress={this.onButtonPress.bind(this)}
                textButton= 'Log in' />
            }
    }


    render()
    {
        return (
            <Card>
                <CardSection>
                    <Input
                    
                    textInput=":Email "
                    textHolder="email@gmail.com"
                    secureTextEntry={false}
                    onChangeText={text => (this.props.emailChange(text))}
                    value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                <Input
                    textInput=":Password "
                    textHolder="password"
                    secureTextEntry={true}
                    onChangeText={text => (this.props.passwordChange(text))}
                    value={this.props.password}
                    />
                </CardSection>
                
                {this.renderError()}
             
                <CardSection>

                {this.renderSpinerOrButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {

    return ({ email: state.auth.email, password: state.auth.password, error: state.auth.error, loading: state.auth.loading});
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }

}


export default connect(mapStateToProps,actions)(LoginForm);
