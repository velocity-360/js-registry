import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	
	componentDidMount(){
		console.log('ComponentDidMount')
	}

	render(){
		return (
			<div>
				Entry Point
			</div>

		)
	}

}


ReactDOM.render(<App />, document.getElementById('root'))