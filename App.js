import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles/styles';

import Login from './screens/Login';
import Feed from './screens/Feed';
import Auth from './screens/Auth';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode={'none'}>
				<Stack.Screen name="Auth" component={Auth} />
				<Stack.Screen name="Feed" component={Feed} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
