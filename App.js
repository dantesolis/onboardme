// @format
// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './components/Card';
import Input from './components/Input';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Input placeholder="username" />
          <Input placeholder="password" />
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
