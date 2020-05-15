import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from '../styles/styles';
import card from '../styles/card';

const SearchItem = (props) => {
	return (
		<View style={[card.container, { paddingBottom: 8 }]}>
			<View style={styles.horizontal}>
				<Image
					source={require('../assets/icon.png')}
					style={card.icon}
				/>
				<Text style={card.title}>{props.item.title}</Text>
			</View>
		</View>
	);
};

export default SearchItem;
