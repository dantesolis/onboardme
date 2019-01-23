// [TODO]: flesh it out
// [TODO]: Fix errors

// @flow
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import LoginForm from "./components/LoginForm";
import { Button, Card, CardSection } from './components/common';


type Props = {};

const App = () => {

  const { mainView } = styles;

    return (
      // LoginForm to be imported here
    <View style={mainView}>
      <Card>
        <CardSection>
          <Text>Username</Text>
          {/* / input username/ */}
        </CardSection>

        <CardSection>
          <Text>Password</Text>
          {/* / input password / */}
        </CardSection>


        <CardSection>
        <Text>Button</Text>
          {/* / button / */}
        </CardSection>
      </Card>
    </View>
  )
};


const styles = StyleSheet.create({
  mainView: {
    borderColor: 'red'
  }
}) 
export default App;