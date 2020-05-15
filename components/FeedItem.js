import React from 'react';
import { Text, View, Image, Share } from 'react-native';

import ButtonSmall from '../components/ButtonSmall';

import styles from '../styles/styles';
import card from '../styles/card';

const FeedItem = (props) => {
	const numbRounder = (value) => {
		return value > 999 ? `${Math.round(value / 100) / 10}k` : value;
	};

	return (
		<View style={card.container}>
			<View style={styles.horizontal}>
				<Image
					source={require('../assets/icon.png')}
					style={card.icon}
				/>
				<View>
					<Text style={card.group}>r/{props.item.subreddit}</Text>
					<Text style={card.author}>by u/{props.item.author}</Text>
				</View>
			</View>
			<Text style={card.title}>{props.item.title}</Text>
			{props.item.post_type == 'image' ? (
				<Image
					source={{ uri: props.item.url }}
					style={{ aspectRatio: 3 / 2, resizeMode: 'contain' }}
				/>
			) : null}
			<View style={card.footer}>
				<ButtonSmall
					source={require('../assets/icons/upvote.png')}
					text={numbRounder(props.item.score)}
				/>
				<ButtonSmall
					source={require('../assets/icons/comment.png')}
					text={numbRounder(props.item.num_comments)}
				/>
				<ButtonSmall
					source={require('../assets/icons/share.png')}
					text={'share'}
					onPress={async () => {
						try {
							const result = await Share.share({
								message: props.item.url
							});
						} catch (error) {
							console.log(error);
						}
					}}
				/>
			</View>
		</View>
	);
};

export default FeedItem;
