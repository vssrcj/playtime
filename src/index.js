import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

styles();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
