import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  headerText: string
}
const Header = (props: Props) => { 

  const { textStyle, viewStyle } = styles;
  const { headerText } = props;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 2,
    position: 'relative',
    paddingTop: 15,
    backgroundColor: '#E6E600',
    shadowColor: '#F3F3F3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
};

export { Header };