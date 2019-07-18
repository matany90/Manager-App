import React, {Component} from 'react';
import {Linking} from 'react-native';
import {Card,Button,CardSection,Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import {employeeUpdate,employeeSave,employeeDelete} from '../actions';
import Communications from 'react-native-communications';


class EmployeeEdit extends Component{
    state ={showModal: false}

    componentWillMount()
    {
        const {name,phone,shift}=this.props.employee;
        this.props.employeeUpdate({prop: 'name', value: name})
        this.props.employeeUpdate({prop: 'phone', value: phone})
        this.props.employeeUpdate({prop: 'shift', value: shift})
    }

    onButtonPress()
    {
        const {name,phone,shift}=this.props;
        this.props.employeeSave({name,phone,shift,uid: this.props.employee.uid});
    }
    onTextPress()
    {
        const {phone,shift,name}=this.props;

        Communications.text(phone,`hi ${name}, Your next shift is on ${shift}` )
    }
    onWhatsAppPress()
    {
        const {phone,shift,name}=this.props;
        Linking.openURL(`whatsapp://send?text=${`Hi ${name}, Your next shift is on ${shift}`}&phone=${'+972'+phone}`);
    }

    onAccept()
    {
        const {uid} =this.props.employee
        this.props.employeeDelete({uid});
    }
    onDecline()
    {
            this.setState({showModal: false});
    }


    render()
    {
        return (
        <Card>
          
        <EmployeeForm />
            <CardSection>
                <Button textButton='Update'
                onPress={this.onButtonPress.bind(this)}
                
                />
             </CardSection>
                <CardSection>
                    <Button
                    textButton='Text Schedule'
                    onPress={this.onTextPress.bind(this)}
                    />
                
            </CardSection>  
            <CardSection>
                    <Button
                    textButton='WhatsApp Schedule'
                    onPress={this.onWhatsAppPress.bind(this)}
                    />
                
            </CardSection> 

            <CardSection>
                    <Button
                    textButton='Fire Employee'
                    onPress={()=> (this.setState({showModal: true}))}
                    />
            </CardSection> 

                <Confirm
                visible={this.state.showModal}
                textInModal='Are you sure you want to delete this?'
                onAccept = {this.onAccept.bind(this)}
                onDecline = {this.onDecline.bind(this)}
                >
                    
                 </Confirm>   
        </Card>         
        );   
    }
}

const mapStateToProps = (state) => {

    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift
    }

}
export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);
