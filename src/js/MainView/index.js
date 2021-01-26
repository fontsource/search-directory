import { Route } from 'react-router-dom';
import template from 'lodash/template';

import FontRoute from './FontRoute';
import Markdown from './Markdown';
import { fontsPath } from '../core/constants';
import pages from '../../pages';

import Wrapper from './Wrapper';

let fontTemplate;

const routes = (() => {
  const routesArray = [];
  const generateRoutesArray = pagesArray => {
    for (let i = 0; i < pagesArray.length; i += 1) {
      if (pagesArray[i].path) {
        if (pagesArray[i].path === fontsPath) {
          fontTemplate = template(pagesArray[i].page);
        } else {
          routesArray.push(
            <Route
              key={pagesArray[i].path}
              path={pagesArray[i].path}
              render={() => <Markdown>{pagesArray[i].page}</Markdown>}
              exact
            />
          );
        }
      }

      if (pagesArray[i].children) generateRoutesArray(pagesArray[i].children);
    }
  };
  generateRoutesArray(pages);
  return routesArray;
})();

export default function MainView() {
  return (
    <Wrapper>
      <Route
        path={fontsPath}
        render={() => <FontRoute {...{ fontTemplate }} />}
      />
      {routes}
    </Wrapper>
  );
}
