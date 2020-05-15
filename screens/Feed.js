import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as SecureStore from 'expo-secure-store';

import styles from '../styles/styles';

import StatusBar from '../components/StatusBar';
import FeedItem from '../components/FeedItem';
import Loading from '../components/Loading';
import BottomTab from '../components/BottomTab';

const redditDB = SQLite.openDatabase('redditDB');

const Feed = ({ navigation }) => {
	let [items, setItems] = useState([]);
	let [isLoading, setIsLoading] = useState(true);
	let [loadError, setLoadError] = useState(false);

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
					getData('/r/all/');
				});

			if (subs && subs.error != 401) {
				// clear db
				redditDB.transaction((tx) => {
					tx.executeSql('DELETE FROM posts');
				});

				subs.data.children.forEach((child) => {
					console.log(child.data.url);
					console.log(child.data.title);

					getData(child.data.url);
				});
			} else {
				// remove expired token
				token = await SecureStore.setItemAsync('token', '').catch(
					(err) => {
						console.log(err);
					}
				);
				getData('/r/all/');
			}
		} else {
			getData('/r/all/');
		}
	};

	const getData = async (url) => {
		// get api data
		const response = await fetch(
			`https://www.reddit.com${url}hot.json?limit=25`
		)
			.then((r) => r.json())
			.catch((e) => console.log(e));

		if (response) {
			console.log(
				`retrieved ${response.data.children.length} posts from ${url}`
			);

			response.data.children.forEach((child) => {
				// write to db
				redditDB.transaction((tx) => {
					tx.executeSql(
						'INSERT INTO posts (id, title, url, subreddit, score, over_18, spoiler, author, permalink, post_type, is_video, num_comments, thumbnail) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
						[
							null,
							child.data.title,
							child.data.url,
							child.data.subreddit,
							child.data.score,
							child.data.over_18 ? 1 : 0,
							child.data.spoiler ? 1 : 0,
							child.data.author,
							`https://www.reddit.com/${child.data.permalink}`,
							child.data.post_hint,
							child.data.is_video ? 1 : 0,
							child.data.num_comments,
							child.data.thumbnail
						],
						(res) => {},
						(t, err) => {
							console.error(err);
						}
					);
				});
			});
		}
		showData();
	};

	const showData = () => {
		console.log('showing data');

		let dbItems = [];

		// read db
		redditDB.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM posts ORDER BY score DESC',
				[],
				(tr, res) => {
					// show results on screen
					res.rows._array.forEach((item) => {
						dbItems.push({
							id: item.id.toString(),
							title: item.title,
							url: item.url,
							score: item.score,
							num_comments: item.num_comments,
							thumbnail: item.thumbnail,
							post_type: item.post_type,
							subreddit: item.subreddit,
							author: item.author
						});
					});

					if (res.rows.length == 0) {
						setLoadError(true);
					}

					setItems(dbItems);
					setIsLoading(false);
				},
				(err) => {
					console.log(err);
					setIsLoading(false);
					setLoadError(true);
				}
			);
		});
	};

	return (
		<View style={styles.container}>
			<StatusBar />
			{isLoading ? (
				<Loading />
			) : loadError ? (
				<View style={[styles.box, { borderColor: '#f00' }]}>
					<Text style={{ color: '#f00', textAlign: 'center' }}>
						Could not fetch posts please verify your internet
						connection or check https://www.redditstatus.com/
					</Text>
				</View>
			) : (
				<FlatList
					data={items}
					renderItem={({ item }) => <FeedItem item={item} />}
				/>
			)}
			<BottomTab
				active={0}
				onPress1={() => {
					navigation.navigate('Search');
				}}
				onPress2={() => {
					navigation.navigate('Comunities');
				}}
				onPress3={() => {
					navigation.navigate('Profile');
				}}
			/>
		</View>
	);
};

export default Feed;
