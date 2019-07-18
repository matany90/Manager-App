import React , {Component} from 'react';
import {View,Text} from 'react-native';
import {Picker} from 'react-native';
import {connect} from 'react-redux';
import {Card,CardSection,Input,Button} from './common';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component{

    onButtonPress()
    {
        const {name,phone,shift}=this.props
        this.props.employeeCreate({name,phone,shift})
    }


render()
{
    return(
        <Card>
        <EmployeeForm {...this.props} />
        
        <CardSection>
        <Button
        onPress={this.onButtonPress.bind(this)}
        textButton="Create"
        />
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



export default connect(mapStateToProps,actions)(EmployeeCreate);
