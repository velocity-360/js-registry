import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { SiteAdmin, ModuleAdmin } from './components/layout' 
import { browserHistory, Route, IndexRoute, Router } from 'react-router' 

const app = (
	<div>
		<Router history={browserHistory}>
			<Route path="/" component={SiteAdmin}></Route>
			<Route path="/modules" component={ModuleAdmin}></Route>
		</Router>
	</div>
)


ReactDOM.render(app, document.getElementById('root'))