import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import moment from 'moment';

import { attendFestival, favoriteFestival } from '../../../actions/festivals';
import useStyles from './styles';

const FestivalTile = ({ festival }) => {
  const classes = useStyles();
  const [favorite, setFavorite] = useState(false)
  const dispatch = useDispatch();

  const linkString = `/details/${festival._id}/`;

  return (
      <Card className={classes.card}>
        <Link to={linkString} style={{ textDecoration: 'none' }}>
          <CardMedia className={classes.media} image={festival.posterUrl} title={festival.title} />
          <CardContent>
            <Typography variant="h6">{festival.title}</Typography>
            <Typography variant="subtitle1">{festival.city}, {festival.state}</Typography>
            <Typography variant="subtitle1">{moment(festival.start_date).format('MMM DD')} - {moment(festival.end_date).format('MMM DD')}</Typography>
          </CardContent>
        </Link>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(attendFestival(festival._id))}>
            <DirectionsRunIcon fontSize="small" />
            Going {festival.going}
          </Button>
          <Button size="small" color="primary" onClick={() => {
            setFavorite(!favorite);
            dispatch(favoriteFestival(festival._id));
          }}>
            {favorite ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
          </Button>
        </CardActions>
      </Card>
  );
}

export default FestivalTile;