import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from '@emotion/styled';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import PairGenerator from './PairGenerator';
import UserPage from './UserPage';
import Format from './Format';
import Complexity from './Complexity';
import Behavioral from './Behavioral';
import SortingEffect from './SortingEffect';
import { useTheme } from './ThemeContext';
import { AuthProvider } from './Auth';
import { firebase } from '../config/firebase.js';
import { Button, Grid, Link } from '@material-ui/core';
import mymui from '../mymui.png';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

const Wrapper = styled('div')`
  background: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
  h1 {
    color: ${(props) => props.theme.body};
  }
`;

const App = () => {
  const [user, setUser] = useState({ loggedIn: true });
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  const themeState = useTheme();
  return (
    <Wrapper>
      <Grid style={{ paddingTop: 64 }}>
        <Button onClick={() => themeState.toggle()}>
          {/* {themeState.dark ? "Light Mode" : "Dark Mode"} */}
          {themeState.dark ? <Brightness4OutlinedIcon /> : <Brightness4Icon />}
        </Button>
      </Grid>
      <AuthProvider value={user}>
        <BrowserRouter>
          <Header user={user} />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/format' component={Format} />
            <Route exact path='/complexity' component={Complexity} />
            <Route exact path='/behavioral' component={Behavioral} />
            <Route exact path='/pairgenerator' component={PairGenerator} />
            <Route exact path='/sortingeffect' component={SortingEffect} />
            <Route exact path='/' component={() => <Home user={user} />} />
            <Route
              exact
              path='/userpage'
              component={() => <UserPage user={user} />}
            />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      <Grid style={{ paddingTop: 330 }}>
        Influenced by:
        <Link href='https://my-mui.com'>
          {'  '}
          <img alt='mymui' src={mymui} />
        </Link>
      </Grid>
    </Wrapper>
  );
};

export default App;
