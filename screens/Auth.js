import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { AuthSession } from 'expo';
import * as SecureStore from 'expo-secure-store';

import styles from '../styles/styles';

import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';

const CLIENT_ID = 'wLXGIHOihoabTQ';

const handleAuthAsync = async () => {
	let redirectUrl = AuthSession.getRedirectUrl();
	console.log(`redirecting to ${redirectUrl}`);

	let result = await AuthSession.startAsync({
		authUrl: `https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=token&state=RANDOM_STRING&redirect_uri=${redirectUrl}&scope=identity%20edit%20flair%20history%20modconfig%20modflair%20modlog%20modposts%20modwiki%20mysubreddits%20privatemessages%20read%20report%20save%20submit%20subscribe%20vote%20wikiedit%20wikiread`
	})
		.then((response) => {
			console.log('response from server');
			console.log(response);

			// error checking
			if (
				response.errorCode == undefined ||
				response.params.error != undefined
			) {
				// todo: handle error
				return;
			}

			console.log(response.params.acces_token);
			console.log(typeof response.params.acces_token);

			// save token to SecureStorage
			SecureStore.setItemAsync(
				'token',
				response.params.acces_token
			).catch((error) => {
				console.error(error);
			});
		})
		.catch((error) => {
			console.error('something went wrong');
			console.error(error);
		});
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
						handleAuthAsync();
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
