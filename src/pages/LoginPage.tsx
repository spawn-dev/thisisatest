import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginInput from "../components/input"
import LoginButton from "../components/button"

interface Props { }

interface State {
    email?: string;
    password?: string;
}
export class Login extends React.Component<Props, State> {

    public render(): JSX.Element {
        return (
            <View style={styles.container}>
                <LoginInput
                    placeholder='email'
                    onChangeText={() => {
                        console.log('changeme')
                    }}
                    keyboardType="email-address"
                />
                <LoginInput
                    secureTextEntry={true}
                    placeholder='password'
                    onChangeText={() => {
                        console.log('changeme')
                    }}
                />
                <LoginButton onPress={() => { console.log('replaceme') }}>
                    <Text >Login</Text>
                </LoginButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

