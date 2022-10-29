import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { StateProvider } from './StateProvider';
import reducer, { initialState } from './Reducer.js';

ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
);