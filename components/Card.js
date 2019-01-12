// @format
// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactChildren;
}

const Card = (props: Props) => {

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
    alignContent: 'center',
    width: 250,
    height: 250,
    margin: 'auto',
    borderColor: 'red',
    borderRadius: 10,
    borderWidth: 3
  },
});


export default Card;

