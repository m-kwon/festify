import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';

import Festivals from './components/Festivals/';
import Details from './components/Details/';
import Form from './components/Form/Form';
import festifyimg from './images/logo.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography className={classes.heading} variant="h3" align="center">festify</Typography>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img className={classes.image} src={festifyimg} alt="festify" height="60" />
        </Link>
        <Link to="/login">
          <Button className={classes.loginButton} color="inherit">Login / Signup</Button>
        </Link>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={12}>
              <Switch>
                <Route exact path="/" component={Festivals}></Route>
                <Route exact path="/:id/details" component={Details}></Route>
              </Switch>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;