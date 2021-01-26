import { Drawer, List, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import pages from '../../pages';

import NavItem from './NavItem';
import NavNest from './NavNest';

import { drawerWidth, fontsPath } from '../core/constants';
import FontList from './FontList';

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'overflow',
  },
}));

export default function Nav({ search, mobileOpen, closeNav }) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const generatePagesNav = (pagesArray, indentation = 1) =>
    pagesArray.map(v => {
      if (v.path === fontsPath) {
        return <FontList key={fontsPath} {...{ search, indentation }} />;
      }

      const props = {
        primaryText: v.label,
        Icon: v.icon,
        path: v.path,
        indentation,
      };

      if (v.children) {
        return (
          <NavNest
            key={v.label}
            startOpen={props.primaryText === 'Fonts'}
            {...props}
          >
            {generatePagesNav(v.children, indentation + 1)}
          </NavNest>
        );
      }

      return <NavItem key={v.label} {...props} />;
    });
  return (
    <Drawer
      classes={{
        root: classes.drawer,
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
      <List component="nav" className={classes.drawerContainer}>
        {generatePagesNav(pages)}
      </List>
    </Drawer>
  );
}
