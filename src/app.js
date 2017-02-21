import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { SiteAdmin, ModuleAdmin } from './components/layout'
import { browserHistory, Route, IndexRoute, Router } from 'react-router'
import { Provider } from 'react-redux'
import store from './stores'

const app = (
	<Provider store={ store.configureStore() }>
		<Router history={browserHistory}>
			<Route path="/" component={SiteAdmin}></Route>
			<Route path="/modules" component={ModuleAdmin}></Route>
		</Router>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))