import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as SecureStore from 'expo-secure-store';

import styles from '../styles/styles';

import StatusBar from '../components/StatusBar';
import SearchItem from '../components/SearchItem';
import Loading from '../components/Loading';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';
import Button from '../components/Button';

const redditDB = SQLite.openDatabase('redditDB');

const Profile = ({ navigation }) => {
	let [isLoading, setIsLoading] = useState(true);
	let [isLoggedIn, setIsLoggedIn] = useState(true);

	useEffect(() => {
		checkLogin();
	}, []);

	const checkLogin = async () => {
		// get login token
		let token = await SecureStore.getItemAsync('token').catch((err) => {
			console.log(err);
		});
		console.log(token);

		if (token) {
			const profile = await fetch(
				'https://oauth.reddit.com/subreddits/mine.json',
				{
					method: 'GET',
					headers: {
						Authorization: `bearer ${token}`
					}
				}
			)
				.then((r) => r.json())
				.catch(async (e) => {
					// remove expired token
					token = await SecureStore.setItemAsync('token', '').catch(
						(err) => {
							console.log(err);
						}
					);
					setIsLoggedIn(false);
				});

			if (profile && profile.error != 401) {
				// get profile
				setIsLoading(false);
			} else {
				// remove expired token
				token = await SecureStore.setItemAsync('token', '').catch(
					(err) => {
						console.log(err);
					}
				);
				setIsLoggedIn(false);
			}
		} else {
			setIsLoading(false);
			setIsLoggedIn(false);
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar />
			<Header title={'Your Profile'} />
			{isLoading ? (
				<Loading />
			) : !isLoggedIn ? (
				<View style={[styles.container, styles.inputGroup]}>
					<Text style={styles.title}>You not are logged in</Text>
					<View style={styles.inputGroup}>
						<Button
							text={'Log in'}
							onPress={() => {
								navigation.navigate('Auth');
							}}
						></Button>
					</View>
				</View>
			) : (
				<View style={[styles.container, styles.inputGroup]}>
					<Text style={styles.title}>You are logged in</Text>
					<Button
						text={'Log out'}
						onPress={async () => {
							let token = await SecureStore.setItemAsync(
								'token',
								''
							);
							navigation.navigate('Auth');
						}}
					></Button>
				</View>
			)}
			<BottomTab
				active={3}
				onPress0={() => {
					navigation.navigate('Feed');
				}}
				onPress1={() => {
					navigation.navigate('Search');
				}}
				onPress2={() => {
					navigation.navigate('Comunities');
				}}
			/>
		</View>
	);
};

export default Profile;
