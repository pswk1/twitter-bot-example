const Twit = require('twit');
require('dotenv').config()

let creds = {
	"consumer_key": process.env.API_KEY,
	"consumer_secret": process.env.SECRET_API_KEY,
	"access_token": process.env.ACCESS_TOKEN,
	"access_token_secret": process.env.ACCESS_TOKEN_SECRET,
};

const client = new Twit(creds);

function sendTweet(message) {
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

sendTweet(`It's time to hydrate!`);
