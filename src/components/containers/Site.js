import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Site extends Component {
	constructor(){
		super()
		this.state = {
			site: null
		}
	}

	componentDidMount(){
		APIManager
		.handleGet('/account/currentuser')
		.then(response => {
			console.log(JSON.stringify(response))
			this.setState({
				site: response.site
			})
		})
		.catch(err => {
			console.log(err.message)
		})
	}

	render(){
		const site = this.state.site

		return (site == null ) ? null : (
			<div>
				<h3>{site.name}</h3>
				<div>
					<a target="_blank" href={site.url}>{site.url}</a><br />
					<a href="/account/logout">Log Out</a>
				</div>

				<hr />
				<span style={{fontWeight:100}}>Copy and paste the code below into your site before the end of the body tag:</span><br />
				<div style={{marginTop:6, background:'#f9f9f9', padding:16, border:'1px solid #ddd'}}>
					<code>{ '<script src="http://54.158.144.8/library/'+site.id+'"></script>' }</code>
				</div>

				<div style={{marginTop:24, background:'#f9f9f9', padding:16, border:'1px solid #ddd'}}>
					<h4>My Modules</h4>
				</div>
			</div>

		)
	}
}

export default Site