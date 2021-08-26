import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';

import Festivals from './components/Festivals/';
import Details from './components/Details/';
import Login from './components/Login/';
import Form from './components/Form/';
import festifyimg from './images/logo.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const festivals = useSelector((state) => state.festivals);
  const artistList = [];

  for (let i = 0; i < festivals.length; i++) {
    for (let j = 0; j < festivals[i].artists.length; j++) {
      artistList.push(festivals[i].artists[j]);
    }
  }

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography className={classes.heading} variant="h3" align="center">festify</Typography>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img className={classes.image} src={festifyimg} alt="festify" height="60" />
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}><Button className={classes.loginButton} color="inherit" >Login / Signup</Button></Link>
        <Link to="/form" style={{ textDecoration: 'none' }}><Button className={classes.loginButton} color="inherit" >Form</Button></Link>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={12}>
              <Switch>
                <Route exact path="/" component={Festivals}></Route>
                <Route exact path="/details/:id" component={Details}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/form" component={Form}></Route>
              </Switch>
            </Grid>
            <Grid item xs={12} sm={12}>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;