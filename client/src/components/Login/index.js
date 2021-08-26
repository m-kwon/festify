import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';
import { createFestival } from '../../actions/festivals'

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const clear = () => {

  }

  return (
    <div>
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        {/* <TextField name="title" variant="outlined" label="Name of Festival" fullWidth value={festivalData.title} onChange={(e) => setFestivalData({ ...festivalData, title: e.target.value })} /> */}
        <TextField label="Name" />
        <TextField label="E-mail" />
        <TextField label="Social Security" />
        <TextField label="Zip Code" />
        <TextField label="Password" />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Create Account</Button>
      </form>
    </Paper>
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField label="Name / E-mail" />
        <TextField label="Password" />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>
      </form>
    </Paper>

    </div>
  );
}

export default Login;