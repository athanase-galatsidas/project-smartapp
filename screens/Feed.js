import React, { useState } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';

import styles from '../styles/styles';

import StatusBar from '../components/StatusBar';
import FeedItem from '../components/FeedItem';

const Feed = () => {
	const [items] = useState([
		{ id: '0', title: 'Post 1' },
		{ id: '1', title: 'Post 2' },
		{ id: '2', title: 'Post 3' },
		{ id: '3', title: 'Post 3' },
		{ id: '4', title: 'Post 3' },
		{ id: '5', title: 'Post 3' },
		{ id: '6', title: 'Post 56' },
		{
			id: '7',
			title:
				'This post will have a longer title to test if it looks good on multiple lines!'
		},
		{ id: '8', title: 'Post 89' },
		{ id: '9', title: 'Post 44' },
		{ id: '10', title: 'Post 444' },
		{ id: '11', title: 'Post 41' },
		{ id: '12', title: 'Post 42' },
		{ id: '13', title: 'Post 43' }
	]);

	return (
		<View style={styles.container}>
			<StatusBar />
			<FlatList
				data={items}
				renderItem={({ item }) => <FeedItem item={item} />}
			/>
		</View>
	);
};

export default Feed;
