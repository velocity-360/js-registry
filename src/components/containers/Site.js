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
		const scriptTag = (site == null ) ? null : '<script src="http://54.158.144.8/library/'+site.id+'"></script>'

		return (site == null ) ? <div></div> : (
			<div>
				<h3>{site.name}</h3>
				<a target="_blank" href={site.url}>{site.url}</a>
				<br />
				<span>Copy and paste the code below into your site before the end of the body tag:</span>
				<br />
				<code style={{background:'#f9f9f9', padding:16, border:'1px solid #ddd'}}>
					{scriptTag}
				</code>
				<div style={{marginTop:24}}>
					<a href="/account/logout">Log Out</a>
				</div>

			</div>
		)
	}
}

export default Site