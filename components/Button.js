import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles/styles';

const Button = (props) => {
	return (
		<TouchableOpacity
			style={[styles.input, styles.submit]}
			onPress={props.onPress}
		>
			<Text style={styles.submitText}>{props.text}</Text>
		</TouchableOpacity>
	);
};

export default Button;
