import { useState, useEffect } from 'react';
import {
  AppBar,
  IconButton,
  InputBase,
  Link,
  Toolbar,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';

export default function TopBar({ setSearch, openNav }) {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [timer, setTimer] = useState();

  useEffect(() => {
    clearTimeout(timer);
    setTimer(setTimeout(() => setSearch(input), 300));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={openNav}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
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
