// @format
// @flow

import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';


type Props = {
  username: string;
  password: string;
  placeholder: string;
}

export default class Input extends Component<Props> {
  state = { text: '' };

  render() {
    const { textInputStyle } = styles;
    const { placeholder, ...rest } = this.props;

    return (
      <TextInput
        style={textInputStyle}
        onChangeText={text => this.setState({ text: this.state.text })}
        value={this.state.text}
        placeholder={placeholder}
        {...rest}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: 14,
    color: 'black'
  }
});
