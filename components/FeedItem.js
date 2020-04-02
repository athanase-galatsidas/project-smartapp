import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/styles';

const FeedItem = (props) => {
	return (
		<View style={styles.itemContainer}>
			<Text style={styles.itemTitle}>{props.item.title}</Text>
			<View style={styles.itemFooter}>
				<Text style={styles.itemFooterItem}>▲ 1.1k ▼</Text>
				<Text style={styles.itemFooterItem}>♠ 25</Text>
				<Text style={styles.itemFooterItem}>♦</Text>
			</View>
		</View>
	);
};

export default FeedItem;
