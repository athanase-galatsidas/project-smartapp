import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, Dimensions } from 'react-native';
import { AuthSession } from 'expo';
import * as SecureStore from 'expo-secure-store';
import * as WebBrowser from 'expo-web-browser';

import styles from '../styles/styles';
import buttons from '../styles/buttons';

import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import Button from '../components/Button';
import ImgButton from '../components/ImgButton';
import LinkButton from '../components/LinkButton';
import Loading from '../components/Loading';

const CLIENT_ID = 'wLXGIHOihoabTQ';
let isLoading = false;

const Auth = ({ navigation }) => {
	let [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		checkLogin();
	}, []);

	const handleAuthAsync = async () => {
		let redirectUrl = AuthSession.getRedirectUrl();
		console.log(`redirecting to ${redirectUrl}`);

		let result = await AuthSession.startAsync({
			authUrl: `https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=token&state=RANDOM_STRING&redirect_uri=${redirectUrl}&scope=identity%20edit%20flair%20history%20modconfig%20modflair%20modlog%20modposts%20modwiki%20mysubreddits%20privatemessages%20read%20report%20save%20submit%20subscribe%20vote%20wikiedit%20wikiread`
		})
			.then(async (response) => {
				console.log('response from server');

				// error checking
				if (
					response.errorCode != undefined ||
					response.params.error != undefined
				) {
					// todo: handle error
					console.log('error');
					return;
				}

				console.log(response.params.access_token);
				console.log(typeof response.params.access_token);

				// save token to SecureStorage
				const token = await SecureStore.setItemAsync(
					'token',
					response.params.access_token
				).catch((error) => {
					console.error(error);
				});

				navigation.navigate('Feed');
			})
			.catch((error) => {
				console.error('something went wrong');
				console.error(error);
			});
	};

	const checkLogin = async () => {
		const token = await SecureStore.getItemAsync('token').catch((err) =>
			console.error(err)
		);
		console.log(token);
		if (token) {
			setIsLoggedIn(true);
			navigation.navigate('Feed');
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar />
			<Image
				source={require('../assets/background.png')}
				style={{
					opacity: 0.3,
					width: Math.round(Dimensions.get('window').width),
					height: 240,
					position: 'absolute'
				}}
			/>
			<Text style={styles.title}>Welcome!</Text>
			<View style={[styles.inputGroup, styles.center]}>
				<ImgButton
					source={require('../assets/reddit/logo_alt.png')}
					text="Login with Reddit"
					color="#FF3F18"
					onPress={() => {
						handleAuthAsync();
					}}
				/>
				<Button
					text="Sign up"
					onPress={() => {
						WebBrowser.openBrowserAsync('https://www.reddit.com/');
					}}
				/>
				<LinkButton
					text="skip"
					onPress={() => {
						navigation.navigate('Feed');
					}}
				/>
			</View>
		</View>
	);
};

export default Auth;
