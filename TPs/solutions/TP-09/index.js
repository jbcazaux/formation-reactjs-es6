import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Part1 from './Part1';
import Part2 from './Part2';
import {Router, hashHistory, Route} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/part1" component={Part1}/>
            <Route path="/part2" component={Part2}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
