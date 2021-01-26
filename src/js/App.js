import { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Switch } from 'react-router-dom';

import TopBar from './TopBar';
import Nav from './Nav';
import MainView from './MainView';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default function App() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        {...{
          setSearch,
          openNav: () => setMobileOpen(true),
        }}
      />
      <Nav
        {...{
          search,
          mobileOpen,
          closeNav: () => setMobileOpen(false),
        }}
      />
      <Switch>
        <MainView />
      </Switch>
    </div>
  );
}
