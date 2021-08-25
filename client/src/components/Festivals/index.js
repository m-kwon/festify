import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import { getFestivals } from '../../actions/festivals';
import SearchBar from './SearchBar/';
import FestivalTile from './FestivalTile/';

const Festivals = () => {
  const festivals = useSelector((state) => state.festivals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFestivals());
  }, [dispatch]);

  return (
    !festivals.length ? <CircularProgress /> : (
      <div>
        <SearchBar /><br/>
        <Grid container display="flex" flex-direction="column" alignItems="center" spacing={4}>
          {festivals.map((festival) => (
            <Grid key={festival._id} item xs={12} sm={12} md={4}>
              <FestivalTile festival={festival} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
}

export default Festivals;