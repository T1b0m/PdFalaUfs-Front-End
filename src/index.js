import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Login_Screen from './components/Login_Screen';

import Rotas from './rotas'

import * as serviceWorker from './components/serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Rotas />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
