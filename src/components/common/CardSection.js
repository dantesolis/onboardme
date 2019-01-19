// @flow
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type CardSectionProps = {
  style?: StyleObj,
  children: React$Node,
}

const CardSection = (props: CardSectionProps): React.Node => {

  CardSection.defaultProps = {
    children: null,
  }

  const { containerStyle } = styles;
  const { children } = props;

  return (
    <View style={[containerStyle, props.style]}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
});

export { CardSection };