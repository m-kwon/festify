import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import useStyles from './styles';

const Artist = ({ artist }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // useEffect()

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={artist.imageUrl} />
      <CardContent>
        <Typography variant="subtitle2">{artist}</Typography>
        <Typography variant="subtitle1">{artist.followers}</Typography>
      </CardContent>
    </Card>
  );
}

export default Artist;
// import React from 'react';

// import useStyles from './styles';

// const Artist = ({ artist }) => {
//   const classes = useStyles();
//   return (
//     <li>{artist}</li>
//   )
// }

// export default Artist;