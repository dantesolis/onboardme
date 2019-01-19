// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

type CardProps = {
  children: React.ReactChildren;
}

const Card = (props: CardProps) => {

    const { children } = props;
    const { cardStyle } = styles;

    return (
      <View style={cardStyle}>
        {children}
      </View>
    )
  }  


const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
});


export { Card };