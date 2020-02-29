import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginButton from './components/button';
import LoginInput from './components/input'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginInput
        placeholder='email'
        onChangeText={()=> {
          console.log('changeme')
        }}
        keyboardType="email-address"
      />
      <LoginInput
        secureTextEntry={true}
        placeholder='password'
        onChangeText={()=> {
          console.log('changeme')
        }}
      />
      <LoginButton onPress={this.onPressLoginButton}>
        <Text >Login</Text>
      </LoginButton>
    </View>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
