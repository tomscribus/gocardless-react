import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

ReactDOM.render(
	<Router>
	<Switch>
		<Route  exact path="/" component={App} />
		<Route  path="/:year" render={(props) => <App {...props} key={props.match.params.year} /> } />
	</Switch>
	</Router>, 

	document.getElementById('root'));


