console.log('testing');

// docs
// https://github.com/reddit-archive/reddit/wiki/OAuth2

// auth link
// https://www.reddit.com/api/v1/authorize.compact?client_id=CLIENT_ID&response_type=TYPE&state=RANDOM_STRING&redirect_uri=URI&scope=SCOPE_STRING

// test account
// DemoAccount32
// Pp1234!

const CLIENT_ID = 'wLXGIHOihoabTQ';
const TYPE = '';
const RANDOM_STRING = '';
const URI = 'https://www.reddit.com';
const SCOPE_STRING = '';
// const URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${TYPE}&state=${RANDOM_STRING}&redirect_uri=${URI}&scope=${SCOPE_STRING}`;
const URL = `https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=token&state=RANDOM_STRING&redirect_uri=${URI}&scope=identity%20edit%20flair%20history%20modconfig%20modflair%20modlog%20modposts%20modwiki%20mysubreddits%20privatemessages%20read%20report%20save%20submit%20subscribe%20vote%20wikiedit%20wikiread`;

console.log(URL);
