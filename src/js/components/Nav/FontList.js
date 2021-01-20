import { useState, useEffect, memo } from 'react';

import NavItem from './NavItem';

import useFetch from '../../hooks/useFetch';

import fontSourceData from '../../fontSourceData';

const FontList = ({ search, setView, indentation }) => {
  const fontList = useFetch(fontSourceData.list, true, []);
  const [finalList, setFinalList] = useState([]);

  useEffect(() => {
    const optimizedSearch = search.toLowerCase().replace(/[^\w\d]+/g, '-');

    setFinalList(
      Object.keys(fontList)
        // Filter array to items that contain search
        .filter(v => v.includes(optimizedSearch))
        .sort((a, b) => {
          const aIndex = a.indexOf(optimizedSearch);
          const bIndex = b.indexOf(optimizedSearch);
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
        .map(key => (
          // Generate Font Navigation
          <NavItem
            primaryText={key}
            secondaryText={fontList[key]}
            indentation={indentation}
            onClick={() => {
              setView(`font-${key}`);
            }}
            key={`font-${key}`}
          />
        ))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fontList, search]);

  return finalList;
};

export default memo(FontList);
