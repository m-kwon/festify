# festify
Discover and explore upcoming music festivals

- change URL in "/client/src/api/index.js"
- change ".env"

# Table Of Contents
1. [Overview](#Overview)
1. [Technologies](#Technologies)
1. [Installation](#Installation)
1. [Setup](#Setup)
1. [Start](#Start)

# Overview
festify is a web application

![](./client/dist/SpotiBot.gif)

# Technologies
- HTML + CSS
- React
- JavaScript
- Express
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) (Premium Required)

# Installation
1. Clone down the latest version of festify from GitHub and navigate to the project directory.
```
$ git clone https://github.com/m-kwon/festify.git
$ cd festify
```
2. Using install project dependencies inside the festify directory.
```
$ npm install
```

# Setup

## Spotify API Key
1. Sign up for a [Spotify Developer Account](https://developer.spotify.com/dashboard/) and create a new web app.

2. Click **Edit Settings** in your application and save `http://localhost:3000/callback` (for local development) in the **Rdirect URIs** section. *Note:* It is vital that the Redirect URI you save on Spotify matches the `redirect_uri` in your `spotifyConfig-ex.js` file.

3. Copy and paste your app's Client ID & Client Secret to the respective fields in `/server/spotifyConfig-ex.js`.
```
// Spotify API Config
module.exports = {
    redirect_uri: 'http://localhost:3000/callback',
    client_id: 'INSERT SPOTIFY APP CLIENT ID',
    client_secret: 'INSERT SPOTIFY APP CLIENT SECRET'
};
```

4. Rename `/server/spotifyConfig-ex.js` to `/server/spotifyConfig.js`. Renaming the file will cause it to become gitignored and is the correct filepath for the express server to import your Spotify configuration.



# Start
1. Compile the project build.
```
$ npm run build
```
2. Start the express server.
```
$ npm start
```
3. Navigate to the localhost port in your browser. The project default is `localhost:3000`.
