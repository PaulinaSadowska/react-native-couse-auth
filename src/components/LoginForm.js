import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ loading: true, error: '' });
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
          firebase.auth()
              .createUserWithEmailAndPassword(email, password)
              .then(this.onLoginSuccess.bind(this))
              .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
      this.setState({
        loading: false,
        email: '',
        password: '',
        error: ''
      });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication failed'
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
              placeholder='user@gmail.com'
              label='Email'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection >
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    padding: 8
  }
};

export default LoginForm;
