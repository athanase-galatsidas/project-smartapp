import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles/styles';
import buttons from '../styles/buttons';

const LinkButton = (props) => {
	return (
		<TouchableOpacity style={styles.cancel} onPress={props.onPress}>
			<Text style={styles.cancelText}>{props.text}</Text>
		</TouchableOpacity>
	);
};

export default LinkButton;
