// [TODO]: Fix
// // @flow

// import * as React from 'react';
// import {  StyleSheet, Text, TextInput, View } from 'react-native';

// type Props = {
//   label: string,
//   placeholder: string,
//   secureTextEntry?: boolean,
//   value: string,
//   username?: string,
//   password?: string,
//   onChangeText: React.SyntheticEvent<>,
//   onFocus: React.SyntheticEvent<>
// }

// type State = {
//   text: string;
// }

// const Input = (props: Props): React.Node => {

//     const { inputStyle, labelStyle, containerStyle } = styles;
//     const { label, password, placeholder, secureTextEnrtry, username, value, onChangeText, onFocus } = props;

//     return (
//       <View style={containerStyle}>
//       <Text style={labelStyle}>{label}</Text>
//         <TextInput
//           autoCorrect={false}
//           label={label}
//           placeholder={placeholder}
//           secureTextEntry={secureTextEnrtry}
//           style={inputStyle}
//           onChangeText={onChangeText}
//           onFocus={onFocus}
//           value={this.state.text}
//         />
//       </View>
//     )
//   }

// const styles = StyleSheet.create({
//   inputStyle: {
//     flex: 2,
//     borderWidth: 1,
//     borderColor: '#F5F5F5',
//     paddingRight: 5,
//     paddingLeft: 5,
//     fontSize: 18,
//     lineHeight: 23,
//     color: '#000000'
//   },
//   labelStyle: {
//     flex: 1,
//     fontSize: 18,
//     paddingLeft: 20
//   },
//   containerStyle: {
//     flex: 1,
//     flexDirection: 'row',
//     height: 40,
//     alignItems: 'center'
//   }
// });

// export { Input };
