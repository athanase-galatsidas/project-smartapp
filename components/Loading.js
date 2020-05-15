import React, { useState } from 'react';
import { Text, Image, Animated, Easing } from 'react-native';

import styles from '../styles/styles';

const Loading = () => {
	const spinAnim = new Animated.Value(0);

	Animated.loop(
		Animated.timing(spinAnim, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear,
			useNativeDriver: true
		})
	).start();

	const spin = spinAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg']
	});

	return (
		<Animated.View
			style={{
				justifyContent: 'center',
				alignContent: 'center',
				alignItems: 'center'
			}}
		>
			<Animated.Image
				style={{ transform: [{ rotate: spin }] }}
				source={require('../assets/loading.png')}
			/>
		</Animated.View>
	);
};

export default Loading;
