import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getFestival } from '../../actions/festivals';
import BasicInfo from './BasicInfo/';
import ArtistList from './ArtistList/';
import Generator from './Generator/';
import VideoPlayer from './VideoPlayer/';
import RelatedArtists from './RelatedArtists/';
import useStyles from './styles';

const Details = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const festival = useSelector((state) => state.festival);

  useEffect(() => {
    dispatch(getFestival(id));
  }, [dispatch, id]);

  return (
    <div>
      <BasicInfo festival={festival} />
      <ArtistList festival={festival} />
      <Generator />
      <VideoPlayer />
      <RelatedArtists />
    </div>
  );
}

export default Details;