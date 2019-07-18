import _ from 'lodash';
import {View, Text, FlatList } from 'react-native';
import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ListItem from './ListItem';

let employeesFetchedArr=[];

class EmployeeList extends Component {

  componentWillMount()
    {
        this.props.employeesFetch();
    }


    renderItem(employee)
    {
        return <ListItem employee={employee} />
    }

render()
{   
    console.log(this.props.employees);
    return (
        <FlatList
        data={this.props.employees}
        renderItem={employee => <ListItem employee={employee.item} />}
        keyExtractor={employee => employee.uid}
        />

    );
}

}

const mapStateToProps = state => {
const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { name, shift, uid }
});

return { employees };

}



export default connect(mapStateToProps,actions)(EmployeeList);
