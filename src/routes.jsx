/**
 * Created by megan on 12/5/16.
 */
import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './app';
import Home from './components/home';
import Receiving from './components/receiving';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="receiving" component={Receiving} />
        </Route>
    </Router>
), document.getElementById('app'));
