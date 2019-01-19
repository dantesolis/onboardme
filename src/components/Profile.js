// [TODO] : to finish fleshing everything out
// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

type Props = {
  Card: React$Element<typeof Card>,
  onEmailChange: (event: SyntheticEvent<any>) => void,
  onPasswordChange: (event: SyntheticEvent<any>) => void,
  onButtonPress: (event: SyntheticEvent<any>) => void,
  email: string,
  password: string,
  emailChanged: (text: string) => void;
  passwordChanged: (text: string) => void;
  loginUser: (email: string, password: string) => void;
}


type State = {
  // [TODO]: finish fleshing everything out
  username: string,
  password: string
}

class LoginForm extends React.Component<LoginFormProps, {}> {

  onUsernameChange(text: string) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text: string) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { username, password } = this.props;

    this.props.loginUser({ username, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  renderError(): React.Node {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render(): React.Node {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            placeholder="username"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}

export default LoginForm;