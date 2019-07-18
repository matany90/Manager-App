import { EMAIL_CHANGED , PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,SPINER } from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const emailChange = (text) => {
return {
    type: EMAIL_CHANGED,
    payload: text
}

}

export const passwordChange = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
    
    }


export const loginUser = ({email, password}) => {

    return (dispatch) => {
        dispatch({type: SPINER});
firebase.auth().signInWithEmailAndPassword(email,password)    
    .then(user => successLogin(user,dispatch))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user => successLogin(user,dispatch))
            .catch(() => loginUserFail(dispatch));
    })    
    
    
 }

}

const successLogin= (user,dispatch) => 
{
        dispatch({type: LOGIN_USER_SUCCESS, payload: user});
        Actions.mainFlow();
}

const loginUserFail = (dispatch) => {

dispatch({type: LOGIN_USER_FAIL})
}