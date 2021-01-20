import { Home as HomeIcon, List as ListIcon } from '@material-ui/icons';
import Home from './Home.md';
import Installation from './Installation.md';
import Webpack from './Webpack.md';
import Sass from './Sass.md';
import Changelog from './Changelog.md';

import FontTemplate from './FontTemplate.md';

export default [
  { label: 'Home', id: '', icon: HomeIcon, page: Home },
  { label: 'Changelog', id: 'changelog', icon: ListIcon, page: Changelog },
  {
    label: 'Installation',
    id: 'installation',
    page: Installation,
    children: [
      { label: 'Webpack', id: 'webpack', page: Webpack },
      { label: 'Sass', id: 'sass', page: Sass },
    ],
  },
  { label: 'Fonts', children: [{ id: 'font-template', page: FontTemplate }] },
];
