import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as SecureStore from 'expo-secure-store';

import styles from '../styles/styles';
import colors from '../styles/colors';

import StatusBar from '../components/StatusBar';
import SearchItem from '../components/SearchItem';
import Loading from '../components/Loading';
import BottomTab from '../components/BottomTab';
import Header from '../components/Header';

const redditDB = SQLite.openDatabase('redditDB');

const Comunities = ({ navigation }) => {
	let [items, setItems] = useState([]);
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
			const subs = await fetch(
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

			if (subs && subs.error != 401) {
				let results = [];
				let index = 0;
				subs.data.children.forEach((child) => {
					console.log(child.data.url);
					console.log(child.data.title);

					results.push({
						id: index.toString(),
						title: child.data.url
					});
					index++;

					setItems(results);
				});
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
			setIsLoggedIn(false);
			setIsLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar />
			<Header title={'Your Communities'} />
			{isLoading ? (
				<Loading />
			) : !isLoggedIn ? (
				<View
					style={[
						styles.box,
						{
							borderColor: colors.light2,
							justifyContent: 'center',
							alignContent: 'center',
							alignItems: 'center'
						}
					]}
				>
					<Image
						source={require('../assets/icons/subs.png')}
						style={{
							opacity: 0.3,
							width: 96,
							height: 96,
							marginBottom: 32
						}}
					/>
					<Text
						style={{
							color: colors.light2,
							textAlign: 'center',
							fontSize: 16
						}}
					>
						You do not have any communities
					</Text>
				</View>
			) : (
				<FlatList
					data={items}
					renderItem={({ item }) => <SearchItem item={item} />}
				/>
			)}
			<BottomTab
				active={2}
				onPress0={() => {
					navigation.navigate('Feed');
				}}
				onPress1={() => {
					navigation.navigate('Search');
				}}
				onPress3={() => {
					navigation.navigate('Profile');
				}}
			/>
		</View>
	);
};

export default Comunities;
