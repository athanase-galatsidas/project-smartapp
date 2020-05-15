import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';

import colors from './colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark1
	},
	horizontal: {
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center'
	},
	center: {
		flex: 1,
		justifyContent: 'center'
	},
	box: {
		borderColor: colors.light0,
		borderWidth: 1,
		margin: 16,
		padding: 16,
		borderRadius: 4
	},
	statusBar: {
		backgroundColor: colors.dark0,
		height: StatusBar.currentHeight
	},
	text: {
		color: colors.light0
	},

	header: {
		height: 64,
		padding: 16,
		backgroundColor: colors.dark2
	},
	headerText: {
		color: colors.light0,
		fontSize: 24,
		textAlign: 'center'
	},

	title: {
		fontSize: 24,
		textAlign: 'center',
		color: colors.light0,
		marginTop: 64
	},
	subtitle: {
		fontSize: 20,
		textAlign: 'center',
		color: colors.light0
	},

	inputGroup: {
		marginLeft: 17,
		marginRight: 17,
		marginTop: 32,
		marginBottom: 32
	},
	label: {
		marginLeft: 16,
		paddingLeft: 4,
		paddingRight: 4,
		top: 10,
		zIndex: 1,
		alignSelf: 'flex-start',
		backgroundColor: colors.dark1,
		fontSize: 16,
		color: colors.light0
	},
	input: {
		fontSize: 16,
		borderColor: colors.light0,
		borderWidth: 1,
		color: colors.light0,
		padding: 8,
		borderRadius: 4,
		marginBottom: 16
	},
	submit: {
		marginTop: 16,
		backgroundColor: colors.light0
	},
	submitText: {
		fontSize: 20,
		color: colors.dark0,
		textAlign: 'center'
	},
	submitImage: {
		width: 64,
		height: 64
	},
	cancel: {
		marginTop: 0
	},
	cancelText: {
		fontSize: 20,
		color: colors.light0,
		textAlign: 'center'
	},

	bottomTab: {
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: colors.dark3,
		width: screenWidth
	}
});

export default styles;
