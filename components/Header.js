import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/styles';

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{props.title}</Text>
		</View>
	);
};

export default Header;
