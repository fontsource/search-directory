import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import '../style.css';
import '@fontsource/roboto/latin-300.css';
import '@fontsource/roboto/latin-300-italic.css';
import '@fontsource/roboto/latin-400.css';
import '@fontsource/roboto/latin-400-italic.css';
import '@fontsource/roboto/latin-500.css';
import '@fontsource/roboto/latin-500-italic.css';
import '@fontsource/roboto/latin-700.css';
import '@fontsource/roboto/latin-700-italic.css';

import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
