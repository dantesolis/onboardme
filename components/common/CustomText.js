// @flow
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type TextProps = {
  title: string;
  styles: object;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14
  }
})

const CustomText = ({ title }) => (
  <Text style={{ fontSize: 14 }}>{title}</Text>
)

export { CustomText };