import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//import cytoscape from 'cytoscape';

//Redux application uses Redux (songs/blog)
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Songs app
//import songReducers from './components/songs/reducers';

//Blog app
import blogReducers from './components/blog/reducers';

import App from './App';

ReactDOM.render(
    <Provider store={createStore(blogReducers)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
