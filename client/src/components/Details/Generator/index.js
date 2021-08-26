import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

import useStyles from './styles';

const CLIENT_ID = '18be2138262140aeac3a96742dfbc497';
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/details';
const SPACE_DELIMITER = '%20';
const SCOPES = [ 'playlist-modify-public', 'playlist-modify-private' ];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashTag = hash.substring(1);
  const paramsInUrl = stringAfterHashTag.split('&');
  const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split('=');
    accumulator[key] = value;
    return accumulator;
  }, {});

  return paramsSplitUp;
}


const Generator = ({ id }) => {
  const classes = useStyles();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnedParamsFromSpotifyAuth(window.location.hash);
      localStorage.clear();
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('expiresIn', expires_in);
      localStorage.setItem('tokenType', token_type);
    }
  })

  const spotifyApi = new SpotifyWebApi();
  if (localStorage.getItem('accessToken')) {
    // spotifyApi.setAccessToken(localStorage.getItem('accessToken'));
    spotifyApi.setAccessToken('BQBNxIsyXClyD-TNzkku9RARBiS-X0fkJYzOnamc5KnPZzb30AsywK6N9tc_61MXrKDUPpkJQj2-W5sK3M11X846b9DwUfZ3kQC30RiZH5chS3VwQHTcHlOH9yngp6kd0Y_Rzzl7BCkKikfopEoJF6xHwLTZu-9y2AqfXvZuuBZ7FUql2-R2ioID2kOiO1zHf6FK1uS904f2');
  }

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}/${id}/&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  }

  const generatePlaylist = () => {
    spotifyApi.createPlaylist('Generated Playlist', { 'description': 'festify playlist', 'public': true })
      .then(function(data) {
        console.log('Created playlist!');
      }, function(err) {
        console.log('Something went wrong!', err);
      })
      .then(() => {
      spotifyApi.getUserPlaylists('mkwon.flac')
      .then(function(data) {
        console.log('Retrieved playlists', data.body);
        return data.body;
      },function(err) {
        console.log('Something went wrong!', err);
      })
      })
      .then((data) => {
        let playlistId = '2jIAV4iZnWxXs7HmRlWuN3';
        spotifyApi.addTracksToPlaylist(playlistId, ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
          .then(function(data) {
            console.log('Added tracks to playlist!');
          }, function(err) {
            console.log('Something went wrong!', err);
          });
      })
  }

  if (!localStorage.getItem('accessToken')) {
    return (
      <div className="spotify-generator">
        <button onClick={handleLogin}>Login to Spotify</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={generatePlaylist}>Generate playlist</button>
      </div>
    );
  }
}

export default Generator;