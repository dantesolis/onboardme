// @flow 
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  children: React.ChildrenArray<any>,
  onPress: SyntheticEvent<*>,
  accessibilityLabel?: boolean
}

const Button = (props: ButtonProps): React.Node => {

  const { buttonStyle, textStyle } = styles;
  const { children, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      accessibilityLabel={isaccesible}>
      <Text style={textStyle}>
        { children }
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create( {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5, 
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF' // iOs Blue
  },
  textStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600'
  }
});

export { Button };