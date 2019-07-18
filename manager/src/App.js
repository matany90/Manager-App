import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component{
componentWillMount ()
{
    const config = {
        apiKey: "AIzaSyDLNHD_yofEDUk7Mz9KdzDN29SB8jr4nU8",
        authDomain: "manager-119de.firebaseapp.com",
        databaseURL: "https://manager-119de.firebaseio.com",
        projectId: "manager-119de",
        storageBucket: "manager-119de.appspot.com",
        messagingSenderId: "816844791336"
      };
      firebase.initializeApp(config);
}
    render()
    {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Router />
        </Provider>
        );        
    }
}

export default App;
