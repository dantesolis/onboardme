// @format
// @flow

import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


type CustomButtonProps = {
  buttonText: string;
  onHandlePress: () => void;
  isaccesible?: string;
}

type ButtonState = {
  text: string;
}

class CustomButton extends Component<CustomButtonProps, {}> {
  // state = { text: '' };

  onHandlePress = () => {

    console.log(`Hey there I was pressed from here: ${this}`);

    return Alert.alert('I was pressed');
    // return this.setState({ text: !this.state.text })
  }

  render() {
    const {
      buttonText,
      onHandlePress,
      isaccesible
    } = this.props;

    const { buttonContainer, buttonStyles, textStyle } = styles;

    return (
      <View style={buttonContainer}>
        <TouchableOpacity
          style={buttonStyles}
          onPress={onHandlePress}
          accessibilityLabel={isaccesible}
        >
          <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 200,
    height: 100,
    padding: 12,
    borderWidth: 3
  },
  buttonStyle: {
    padding: 12,
    alignItems: 'center',
    fontSize: 14,
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: 'red'
  }
});

export { CustomButton };