import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/styles';
import buttons from '../styles/buttons';

const ImgButtonSmall = (props) => {
	return (
		<TouchableOpacity
			style={[
				buttons.square,
				styles.horizontal,
				{ backgroundColor: props.color, borderRadius: props.round }
			]}
			onPress={props.onPress}
		>
			<Image source={props.source} style={buttons.imageMed} />
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

export default ImgButtonSmall;
