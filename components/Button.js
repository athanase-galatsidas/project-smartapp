import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles/styles';
import buttons from '../styles/buttons';

const Button = (props) => {
	return (
		<TouchableOpacity
			style={[buttons.base, buttons.submit]}
			onPress={props.onPress}
		>
			<Text style={[buttons.textBase, buttons.textSubmit]}>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
