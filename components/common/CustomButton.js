// @format
// @flow

import React, { Component } from 'react'
import { View, Button } from 'react-native'

type ButtonProps = {
  buttonText: string;
  onHandlePress: () => void;
}

const onHandlePress = () => {
  return 'Hello'
}

const CustomButton = ({ buttonText, onHandlePress }) => (

  <View>
    <Button
      onPress={onHandlePress}
    >
      {buttonText}
    </Button>
  </View>
)

export default { CustomButton };