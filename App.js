import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as SecureStore from 'expo-secure-store';

import styles from './styles/styles';

import Feed from './screens/Feed';
import Comunities from './screens/Comunities';
import Profile from './screens/Profile';
import Auth from './screens/Auth';
import Search from './screens/Search';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const redditDB = SQLite.openDatabase('redditDB');

export default function App() {
	useEffect(() => {
		redditDB.transaction((tx) => {
			// database reset
			//tx.executeSql('DELETE FROM posts');
			//tx.executeSql('DROP TABLE posts');

			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS posts (id integer primary key autoincrement, title text, url text, subreddit text, score integer, over_18 integer, spoiler integer, author text, permalink text, post_type text, is_video integer, num_comments integer, thumbnail text)'
			);
		});
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator headerMode={'none'}>
				<Stack.Screen name="Auth" component={Auth} />
				<Stack.Screen name="Feed" component={Feed} />
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="Comunities" component={Comunities} />
				<Stack.Screen name="Profile" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
