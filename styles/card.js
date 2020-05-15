import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';

import colors from './colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const card = StyleSheet.create({
	container: {
		backgroundColor: colors.dark2,
		padding: 8,
		paddingBottom: 0,
		margin: 16,
		marginBottom: 0,
		borderRadius: 4
	},
	title: {
		fontSize: 18,
		paddingBottom: 8,
		paddingTop: 8,
		color: colors.light0
	},
	footer: {
		backgroundColor: colors.dark4,
		marginLeft: -8,
		marginRight: -8,
		marginTop: 8,
		padding: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4
	},
	group: {
		fontSize: 16,
		color: colors.light1
	},
	author: {
		fontSize: 12,
		color: colors.light2
	},
	icon: {
		width: 32,
		height: 32,
		marginLeft: 4,
		marginRight: 4
	}
});

export default card;
