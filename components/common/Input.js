// @format
// @flow

import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

type Props = {
  username?: string;
  password?: string;
  placeholder: string;
}

type State = {
  text: string;
}

class Input extends Component<Props, State> {

  state = { text: '' };

  render() {
    const { textInputStyle } = styles;
    const { password, placeholder, username } = this.props;

    return (
      <View>
        <TextInput
          style={textInputStyle}
          onChangeText={text => this.setState({ text })}
          onFocus={() => { return `I'm focusing` }}
          value={this.state.text}
          placeholder={placeholder}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: 14,
    color: 'black'
  }
});

export { Input };
