// @format
// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Input, /* CustomButton */ } from './common/index';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Input placeholder="username" />
          <Input placeholder="password" />
          {/* <CustomButton /> */}
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
