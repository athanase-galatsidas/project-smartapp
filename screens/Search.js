import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';

import styles from '../styles/styles';

import StatusBar from '../components/StatusBar';
import SearchItem from '../components/SearchItem';
import Loading from '../components/Loading';
import BottomTab from '../components/BottomTab';

const Search = ({ navigation }) => {
	let [items, setItems] = useState([]);

	const searchItem = async (query) => {
		const response = await fetch(
			`https://www.reddit.com/search.json?q=${query}&limit=10`
		)
			.then((r) => r.json())
			.catch(console.error);

		if (response.data.children && response.data.children.length > 1) {
			let searchItems = [];
			let index = 0;
			response.data.children.forEach((child) => {
				searchItems.push({
					id: index.toString(),
					title: child.data.subreddit
				});
				index++;
			});

			setItems(searchItems);
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar />
			<View style={styles.inputGroup}>
				<Text style={styles.label}>search</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => {
						searchItem(text);
					}}
				></TextInput>
			</View>
			<FlatList
				data={items}
				renderItem={({ item }) => <SearchItem item={item} />}
			/>
			<BottomTab
				active={1}
				onPress0={() => {
					navigation.navigate('Feed');
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

export default Search;
