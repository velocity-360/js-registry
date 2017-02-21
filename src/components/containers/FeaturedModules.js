import React, { Component } from 'react'
import { APIManager } from '../../utils' 
import { Link } from 'react-router'

class FeaturedModules extends Component {
	constructor(){
		super()
		this.state = {
			modules: null
		}
	}

	componentDidMount(){
		APIManager
		.handleGet('/api/module', null)
		.then(response => {
			console.log(JSON.stringify(response))
			this.setState({
				modules: response.results
			})
		})
		.catch(err => {
			console.log('ERROR: '+err.message)
		})
	}

	toggleModule(module){
//		console.log('TOGGLE MODULE: '+JSON.stringify(module))

		// let updated = Object.assign({}, module)
		// let subscribers = Object.assign([], updated.subscribers)
		// subscribers.push
	}

	render(){
		const list = this.state.modules || []

		return (
			<div style={{marginTop:24, background:'#f9f9f9', padding:16, border:'1px solid #ddd'}}>
				<h4 style={{marginBottom:6}}>Select Modules</h4>
				<Link to="/modules">Create</Link>
				<hr />

				<ol>
				{ list.map((module, i) => {
						return (
							<li key={module.id}>
								{module.name}
								<br />
								<button onClick={this.toggleModule.bind(this, module)}>Add</button>
							</li>
						)
					})
				}
				</ol>

			</div>

		)

	}
}

export default FeaturedModules