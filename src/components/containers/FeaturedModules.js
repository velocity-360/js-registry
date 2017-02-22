import React, { Component } from 'react'
import { APIManager } from '../../utils' 
import { Link } from 'react-router'
import { connect } from 'react-redux'
import actions from '../../actions'

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

	addRemoveModule(module){
		const site = this.props.account.site
		if (site == null)
			return


		let updated = Object.assign({}, module)
		let subscribers = Object.assign([], updated.subscribers)
		const index = subscribers.indexOf(site.id)
		console.log('INDEX = '+index)
		if (index == -1)
			subscribers.push(site.id)
		else 
			subscribers.splice(index, 1)


		console.log('addRemoveModule: '+JSON.stringify(subscribers))

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
									{ module.name }
									<br />
									<button onClick={this.addRemoveModule.bind(this, module)}>Add</button>
								</li>
							)
						})
					}
				</ol>

			</div>

		)

	}
}

const stateToProps = (state) => {
	return {
		account: state.account
	}
}

const dispatchToProps = (dispatch) => {
	return {
		updateModule: (module, params) => dispatch(actions.updateModule(module, params))
	}
}

export default connect(stateToProps, dispatchToProps)(FeaturedModules)

