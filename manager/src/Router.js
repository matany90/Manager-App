import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';


const RouterComponent = () => {

    return (
        <Router>
         <Scene key="root" hideNavBar>
            <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" titleStyle={{alignSelf: 'center'}} initial /> 
         </Scene> 
             <Scene key="mainFlow">
                <Scene 
                key="employeeList" 
                component={EmployeeList} 
                title="Employees" 
                titleStyle={{alignSelf: 'center'}}
                rightTitle="Add"
                onRight={ () => {Actions.createEmployee()}}
                initial
                /> 
                <Scene
                key="createEmployee"
                component={EmployeeCreate}
                title="Employee Create"
                />
               <Scene
                key="employeeEdit"
                component={EmployeeEdit}
                title="Edit Employee"
                />
            </Scene>    
                
        </Scene>
        </Router>
    );
}

export default RouterComponent;
