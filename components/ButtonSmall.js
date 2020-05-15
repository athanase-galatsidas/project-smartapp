import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/styles';
import buttons from '../styles/buttons';

const ButtonSmall = (props) => {
	return (
		<TouchableOpacity
			style={[buttons.small, styles.horizontal]}
			onPress={props.onPress}
		>
			<Image source={props.source} style={buttons.imageSmall} />
			<Text style={[buttons.textSmall, { marginLeft: 8 }]}>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

export default ButtonSmall;
