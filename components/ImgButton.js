import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/styles';
import buttons from '../styles/buttons';

const ImgButton = (props) => {
	return (
		<TouchableOpacity
			style={[
				buttons.base,
				buttons.submit,
				styles.horizontal,
				{ backgroundColor: props.color, borderColor: props.color }
			]}
			onPress={props.onPress}
		>
			<Image source={props.source} style={buttons.image} />
			{props.text ? (
				<Text
					style={[
						buttons.textBase,
						{ marginLeft: 24, fontWeight: 'bold' }
					]}
				>
					{props.text}
				</Text>
			) : null}
		</TouchableOpacity>
	);
};

export default ImgButton;
