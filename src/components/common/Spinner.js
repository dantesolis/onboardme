// @flow
import * as React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';

type Props = {
  size?: string
}

const Spinner = (props) => {

  const { spinnerStyles } = styles;
  const { size = 'large' } = props;
  
  return ( 
    <View style={spinnerStyles}>
      <ActivityIndicator size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };