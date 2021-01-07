const Twit = require('twit');
require('dotenv').config();

let creds = {
	consumer_key: process.env.API_KEY,
	consumer_secret: process.env.SECRET_API_KEY,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const client = new Twit(creds);
const tweets = [
	'DID YOU DRINK ENOUGH WATER TODAY?',
	'It is time to hydrate!',
	'Remember to drink some water!',
	'You need to drink a glass of water ASAP.',
	'Please drink some water right now.',
	'Only fools stay dehydrated',
	'It is really trendy right now to stay hydrated',
	'IT WOULD BE A SHAME IF SOMEONE AROUND HERE WAS DEHYDRATED',
	'Maybe you would be better equipped to solve that problem after drinking some water',
	'Before you respond to that email, have a glass of water.',
];

function pickARandomTweet(tweets) {
	for (let i = tweets.length - 1; i > 0; i--) {
		const randomTweetIndex = Math.floor(Math.random() * (i + 1));
		return randomTweetIndex;
	}
}

function sendTweet() {
	const tweetIndex = pickARandomTweet(tweets);
	const message = tweets[tweetIndex];

	client.post(
		'statuses/update',
		{ status: message },
		function (err, data, response) {
			if (err) {
				console.log(err);
			} else {
				console.log('Tweeted: ' + message);
			}
		}
	);
}

sendTweet();
