import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from './TopBar';
import FontList from './FontList';
import FontViewer from './FontViewer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [view, setView] = useState('');

  return (
    // <div>
    //   <TopBar search={search} setSearch={setSearch} />
    //   <div className={classes.offset} />
    //   <FontList search={search} />
    // </div>
    <div className={classes.root}>
      <CssBaseline />
      <TopBar setSearch={setSearch} />
      <FontList classes={classes} search={search} setView={setView} />
      <FontViewer view={view} />
    </div>
  );
}
