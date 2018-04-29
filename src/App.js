import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyADS3O-8X-3qos1p9Zo8bqCElieAxQtlpA',
      authDomain: 'auth-react-demo-d9cc1.firebaseapp.com',
      databaseURL: 'https://auth-react-demo-d9cc1.firebaseio.com',
      projectId: 'auth-react-demo-d9cc1',
      storageBucket: 'auth-react-demo-d9cc1.appspot.com',
      messagingSenderId: '146348446162'
    });
  }
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>App</Text>
      </View>
    );
  }
}

export default App;
