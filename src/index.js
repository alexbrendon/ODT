import React from  'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss } from 'react-router';


import './css/style.css';
import Home from  './components/Home';
import Main from './components/Main';
import NotFound from './components/NotFound';



const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home} />
				<Match exactly pattern="/main/" component={Main} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}


render( <Root/>, document.querySelector('#main') );