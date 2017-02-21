import React, { Component } from 'react'
import { Site, FeaturedModules } from '../containers'

class SiteAdmin extends Component {
	render(){
		return (
			<div className="container">
				<div className="row">

					<div className="col-md-6">
						<Site />
					</div>

					<div className="col-md-6">
						<FeaturedModules />
					</div>

				</div>

			</div>
		)
	}
}

export default SiteAdmin