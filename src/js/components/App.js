import { useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useEventListener from '@use-it/event-listener';

import TopBar from './TopBar';
import SideNav from './SideNav';
import FontViewer from './MainView';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default function App() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [view, setView] = useState(window.location.hash.substring(1));
  const [mobileOpen, setMobileOpen] = useState(false);

  // If view is changed , update hash
  useEffect(() => {
    window.location.hash = view;
  }, [view]);

  // Listen for URL hash changes and update view
  useEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash !== view) setView(hash);
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        {...{
          setSearch,
          openNav: () => setMobileOpen(true),
        }}
      />
      <SideNav
        {...{
          search,
          setView,
          mobileOpen,
          closeNav: () => setMobileOpen(false),
        }}
      />
      <FontViewer {...{ view }} />
    </div>
  );
}
