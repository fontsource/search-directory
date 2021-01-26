import { Home as HomeIcon, List as ListIcon } from '@material-ui/icons';
import { fontsPath } from '../js/core/constants';

import Home from './Home.md';
import Installation from './Installation.md';
import Webpack from './Webpack.md';
import Sass from './Sass.md';
import Changelog from './Changelog.md';

import FontTemplate from './FontTemplate.md';

export default [
  { label: 'Home', path: '/', icon: HomeIcon, page: Home },
  { label: 'Changelog', path: '/changelog', icon: ListIcon, page: Changelog },
  {
    label: 'Installation',
    path: '/installation',
    page: Installation,
    children: [
      { label: 'Webpack', path: '/installation/webpack', page: Webpack },
      { label: 'Sass', path: '/installation/sass', page: Sass },
    ],
  },
  { label: 'Fonts', children: [{ path: fontsPath, page: FontTemplate }] },
];
