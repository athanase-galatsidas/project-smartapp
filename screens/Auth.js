import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { AuthSession } from 'expo';

import styles from '../styles/styles';

import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';

const CLIENT_ID = 'wLXGIHOihoabTQ';
const URI = 'https://www.reddit.com';

const handlePressAsync = async () => {
	//let redirectUrl = AuthSession.getRedirectUrl();
	let result = await AuthSession.startAsync({
		authUrl: `https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=token&state=RANDOM_STRING&redirect_uri=${URI}&scope=identity%20edit%20flair%20history%20modconfig%20modflair%20modlog%20modposts%20modwiki%20mysubreddits%20privatemessages%20read%20report%20save%20submit%20subscribe%20vote%20wikiedit%20wikiread`
	});
	this.setState({ result });
};

const Auth = () => {
	return (
		<View style={styles.container}>
			<StatusBar />
			<Text style={styles.title}>Log in using Reddit</Text>
			<View style={styles.inputGroup}>
				<Button
					text="Login"
					onPress={() => {
						handlePressAsync();
					}}
				/>
				<LinkButton
					text="skip"
					onPress={() => {
						alert('skip button');
					}}
				/>
			</View>
		</View>
	);
};

export default Auth;
