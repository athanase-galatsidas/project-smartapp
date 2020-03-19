import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

//import colors from './colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212'
	},
	horizontal: {
		flexDirection: 'row'
	},
	statusBar: {
		backgroundColor: '#000000',
		height: StatusBar.currentHeight
	},
	text: {
		color: '#ffffff'
	},

	header: {
		height: 64,
		padding: 16,
		backgroundColor: '#333333'
	},
	headerText: {
		color: '#ffffff',
		fontSize: 24,
		textAlign: 'center'
	},

	title: {
		fontSize: 24,
		textAlign: 'center',
		color: '#ffffff',
		marginTop: 64
	},
	subtitle: {
		fontSize: 20,
		textAlign: 'center',
		color: '#ffffff'
	},

	inputGroup: {
		marginLeft: 32,
		marginRight: 32,
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
		backgroundColor: '#121212',
		fontSize: 16,
		color: '#ffffff'
	},
	input: {
		fontSize: 16,
		borderColor: '#ffffff',
		borderWidth: 1,
		color: '#ffffff',
		padding: 8,
		borderRadius: 4,
		marginBottom: 16
	},
	submit: {
		marginTop: 16,
		backgroundColor: '#ffffff'
	},
	submitText: {
		fontSize: 20,
		color: '#000000',
		textAlign: 'center'
	},
	cancel: {
		marginTop: 0
	},
	cancelText: {
		fontSize: 20,
		color: '#ffffff',
		textAlign: 'center'
	}
});

export default styles;
