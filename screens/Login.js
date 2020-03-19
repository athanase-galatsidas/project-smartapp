import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from '../styles/styles';

import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';

const Login = () => {
	return (
		<View style={styles.container}>
			<StatusBar />
			<Header title="Login" />
			<Text style={styles.title}>Log in using Reddit</Text>
			<View style={styles.inputGroup}>
				<Text style={styles.label}>Username</Text>
				<TextInput style={styles.input}></TextInput>
				<Text style={styles.label}>Password</Text>
				<TextInput
					secureTextEntry={true}
					style={styles.input}
				></TextInput>
				<Button
					text="Login"
					onPress={() => {
						alert('submit button');
					}}
				/>
				<LinkButton
					text="skip"
					onPress={() => {
						alert('skip button');
					}}
				/>
			</View>
			<Text style={[{ textAlign: 'center', marginTop: 32 }, styles.text]}>
				Don't have an account? Sign up via reddit.com
			</Text>
			<Text style={[{ textAlign: 'center', marginTop: 32 }, styles.text]}>
				Forgot Password?
			</Text>
		</View>
	);
};

export default Login;
