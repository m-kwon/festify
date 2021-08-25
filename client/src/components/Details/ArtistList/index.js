import React from 'react';
import { useSelector } from 'react-redux';

import Artist from './Artist/';
import useStyles from './styles';

const ArtistList = ({ festival }) => {
  const classes = useStyles();
  const artists = festival.artists || [];

  return (
    <div>
      <h1>Lineup</h1>
      <ul>
        {artists.map((artist, i) => (
          <Artist key={i} artist={artist} />
        ))}
      </ul>
    </div>
  )
}

export default ArtistList;