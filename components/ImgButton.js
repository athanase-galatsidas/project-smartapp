import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/styles';

const ImgButton = (props) => {
	return (
		<TouchableOpacity
			style={[
				styles.input,
				styles.submit,
				styles.horizontal,
				{ backgroundColor: '#FF3F18', borderColor: '#FF3F18' }
			]}
			onPress={props.onPress}
		>
			<Image source={props.source} style={styles.submitImage} />
			<Text
				style={[
					styles.submitText,
					{ marginLeft: 24, color: '#ffffff', fontWeight: 'bold' }
				]}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

export default ImgButton;
