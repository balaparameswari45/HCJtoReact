import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Nav from './Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

ReactDOM.render(
<div>
<Nav />
<App />
</div>, document.getElementById('root')
);