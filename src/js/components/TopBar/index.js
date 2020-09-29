import React, { useState, useEffect } from 'react';
import {
  AppBar,
  InputBase,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';

export default function TopBar({ setSearch }) {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [timer, setTimer] = useState();

  useEffect(() => {
    clearTimeout(timer);
    setTimer(setTimeout(() => setSearch(input), 300));
  }, [input]);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={e => setInput(e.target.value)}
          />
        </div>

        <div className={classes.title}>
          <Link
            href="https://github.com/fontsource/fontsource"
            variant="h6"
            classes={{ root: classes.titleText }}
          >
            Fontsource
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
