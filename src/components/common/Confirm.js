// @flow

import * as React from 'react-native';
import { Modal, Text, View } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

type ConfirmProps = {
  children?: string,
  onAccept: (event: SyntheticEvent<any>) => void,
  onDecline: (event: SyntheticEvent<any>) => void,
  visible?: boolean,
};

const Confirm = (props: ConfirmProps) => {

  const { children, onAccept, onDecline, visible } = props;
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      visible
      transparent={true}
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  }
}

export { Confirm };