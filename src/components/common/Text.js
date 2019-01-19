// @flow
import * as React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

type Props = {
  title: string
}

const styles = {
  textStyle: {
    fontSize: 14
  }
}

const CustomText = (props: Props) => (
  <NativeText style={{ fontSize: 14 }}>{text}</NativeText>
)

export { Text };