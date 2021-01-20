import { useState } from 'react';
import { Collapse, List } from '@material-ui/core';

import NavItem from './NavItem';

export default function NavNest({ children, onClick, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavItem
        {...props}
        onClick={() => {
          setOpen(!open);
          if (onClick) {
            onClick();
          }
        }}
      />
      <Collapse in={open} timeout={500}>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
}
