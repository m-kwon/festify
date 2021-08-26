import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createFestival } from '../../actions/festivals'

const Form = () => {
  const [festivalData, setFestivalData] = useState({ title: '', start_date: '', end_date: '', venue: '', city: '', state: '', artists: [], websiteUrl: '', posterUrl: '' });
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createFestival(festivalData));
  }

  const clear = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Add Festival</Typography>
        <TextField name="title" variant="outlined" label="Name of Festival" fullWidth value={festivalData.title} onChange={(e) => setFestivalData({ ...festivalData, title: e.target.value })} />
        <TextField name="start_date" variant="outlined" label="Begins" fullWidth value={festivalData.start_date} onChange={(e) => setFestivalData({ ...festivalData, start_date: e.target.value })} />
        <TextField name="end_date" variant="outlined" label="Ends" fullWidth value={festivalData.end_date} onChange={(e) => setFestivalData({ ...festivalData, end_date: e.target.value })} />
        <TextField name="venue" variant="outlined" label="Venue" fullWidth value={festivalData.venue} onChange={(e) => setFestivalData({ ...festivalData, venue: e.target.value })} />
        <TextField name="city" variant="outlined" label="City" fullWidth value={festivalData.city} onChange={(e) => setFestivalData({ ...festivalData, city: e.target.value })} />
        <TextField name="state" variant="outlined" label="State" fullWidth value={festivalData.state} onChange={(e) => setFestivalData({ ...festivalData, state: e.target.value })} />
        <TextField name="artists" variant="outlined" label="Artists" fullWidth value={festivalData.artists} onChange={(e) => setFestivalData({ ...festivalData, artists: e.target.value.split(',') })} />
        <TextField name="websiteUrl" variant="outlined" label="Official Website" fullWidth value={festivalData.websiteUrl} onChange={(e) => setFestivalData({ ...festivalData, websiteUrl: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setFestivalData({ ...festivalData, posterUrl: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
}

export default Form;