import { useState } from 'react';
import { Drawer, List, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import pages from '../../../pages';

import NavItem from './NavItem';
import NavNest from './NavNest';

import { drawerWidth } from '../../variables';
import FontList from './FontList';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

export default function Nav({ search, setView, mobileOpen, closeNav }) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const generatePagesNav = (pagesArray, indentation = 1) =>
    pagesArray.map((v, i) => {
      if (v.id === 'font-template') {
        return (
          <FontList
            key={i}
            indentation={indentation}
            {...{ search, setView }}
          />
        );
      }

      const props = {
        primaryText: v.label,
        icon: v.icon,
        onClick: typeof v.id === 'string' ? () => setView(v.id) : undefined,
        indentation,
      };

      if (v.children) {
        return (
          <NavNest key={i} {...props}>
            {generatePagesNav(v.children, indentation + 1)}
          </NavNest>
        );
      }

      return <NavItem key={i} {...props} />;
    });

  const [pagesNav] = useState(generatePagesNav(pages));

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      {...(mobile
        ? // Mobile Version
          {
            variant: 'temporary',
            open: mobileOpen,
            onClose: closeNav,
            ModalProps: {
              keepMounted: true,
            },
          }
        : // Desktop Version
          { variant: 'permanent', open: true })}
    >
      <List component="nav" className={classes.drawer}>
        {pagesNav}
      </List>
    </Drawer>
  );
}
