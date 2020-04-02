import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark1
	},
	horizontal: {
		flexDirection: 'row'
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
	cancel: {
		marginTop: 0
	},
	cancelText: {
		fontSize: 20,
		color: colors.light0,
		textAlign: 'center'
	},

	itemContainer: {
		backgroundColor: colors.dark2,
		padding: 8,
		margin: 16,
		marginBottom: 0,
		borderRadius: 4
	},
	itemTitle: {
		fontSize: 20,
		color: colors.light0
	},
	itemFooter: {
		borderTopColor: colors.dark0,
		marginLeft: -8,
		marginRight: -8,
		marginTop: 8,
		padding: 8,
		paddingBottom: 0,
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	itemFooterItem: {
		color: colors.light0,
		width: 64,
		textAlign: 'center'
	}
});

export default styles;
