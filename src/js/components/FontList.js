import React, { useState, useEffect } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core';

import fontSource from '../fontSource';

const FontList = ({ classes, search, setView }) => {
  const [fontList, setFontList] = useState([]);
  const [finalList, setFinalList] = useState([]);

  useEffect(() => {
    fetch(fontSource.list)
      .then(response => response.json())
      .then(data => {
        setFontList(data);
      });
  }, []);

  useEffect(() => {
    setFinalList(
      Object.keys(fontList)
        // Filter array to items that contain search
        .filter(v => v.includes(search))
        .sort((a, b) => {
          const aIndex = a.indexOf(search);
          const bIndex = b.indexOf(search);
          // Sort by index search key is at
          if (aIndex < bIndex) {
            return -1;
          }
          if (aIndex > bIndex) {
            return 1;
          }
          // Sort alphabetically
          return 0;
        })
    );
  }, [fontList, search]);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {
            // Generate list UI
            finalList.map(key => (
              <ListItem
                onClick={() => {
                  setView(key);
                }}
                button
                key={key}
              >
                <ListItemText primary={key} secondary={fontList[key]} />
              </ListItem>
            ))
          }
        </List>
      </div>
    </Drawer>
  );
};

export default React.memo(FontList);
