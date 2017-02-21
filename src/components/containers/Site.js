import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Site extends Component {

	componentDidMount(){
		APIManager
		.handleGet('/account/currentuser')
		.then(response => {
			console.log(JSON.stringify(response))
			
		})
		.catch(err => {
			console.log(err.message)
		})
		

	}

	render(){
		return (
			<div>Site Container</div>
		)
	}
}

export default Site