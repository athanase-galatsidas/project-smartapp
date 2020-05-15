import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';

import colors from './colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const buttons = StyleSheet.create({
	base: {
		borderColor: colors.light0,
		borderWidth: 1,
		padding: 8,
		borderRadius: 100,
		marginBottom: 16,
		marginTop: 16
	},
	submit: {
		backgroundColor: colors.light0
	},

	textBase: {
		color: colors.light0,
		fontSize: 20,
		textAlign: 'center'
	},
	textSubmit: {
		color: colors.dark0
	},
	textSmall: {
		color: colors.light0,
		fontSize: 14
	},

	image: {
		width: 48,
		height: 48
	},
	imageMed: {
		width: 24,
		height: 24
	},
	imageSmall: {
		width: 14,
		height: 14
	},

	small: {
		height: 16
	},

	square: {
		padding: 8,
		marginBottom: 8,
		marginTop: 8
	}
});

export default buttons;
