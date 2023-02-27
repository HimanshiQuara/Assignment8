const https = require('https');

https.get('https://official-joke-api.appspot.com/random_joke', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const joke = JSON.parse(data);
    console.log(joke.setup);
    console.log(joke.punchline);
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
