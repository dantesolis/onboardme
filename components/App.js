// @format
// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Card,
  CustomButton,
  Input,
  CustomText
} from './common/index';

type Props = {};

export default class App extends Component<Props> {

  render() {

    const { container } = styles;
    return (
      <View style={container}>
        <Card>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <CustomButton
            isaccesible="I'm ok for the color blind and shit"
            buttonText="Press me"
          />
        </Card>

        <Card>
          <CustomText title="I'm a text" />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
