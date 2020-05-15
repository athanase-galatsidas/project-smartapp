import React from 'react';
import { Text, View, Image } from 'react-native';

import ImgButtonSmall from './ImgButtonSmall';

import styles from '../styles/styles';
import colors from '../styles/colors';

const BottomTab = (props) => {
	return (
		<View style={styles.bottomTab}>
			<ImgButtonSmall
				onPress={props.onPress0}
				source={require('../assets/icons/home.png')}
				color={props.active == 0 ? colors.alpha : null}
				round={props.active == 0 ? 100 : null}
			/>
			<ImgButtonSmall
				onPress={props.onPress1}
				source={require('../assets/icons/search.png')}
				color={props.active == 1 ? colors.alpha : null}
				round={props.active == 1 ? 100 : null}
			/>
			<ImgButtonSmall
				onPress={props.onPress2}
				source={require('../assets/icons/subs.png')}
				color={props.active == 2 ? colors.alpha : null}
				round={props.active == 2 ? 100 : null}
			/>
			<ImgButtonSmall
				onPress={props.onPress3}
				source={require('../assets/icons/profile.png')}
				color={props.active == 3 ? colors.alpha : null}
				round={props.active == 3 ? 100 : null}
			/>
		</View>
	);
};

export default BottomTab;
