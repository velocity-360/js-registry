import React, { Component } from 'react'
import { APIManager, TextUtils } from '../../utils'
import Dropzone from 'react-dropzone'

class CreateModule extends Component {
	constructor(){
		super()
		this.state = {
			module: {}
		}
	}

	uploadModule(files){
		console.log('uploadModule: ')
		const file = files[0]

		const filename = TextUtils.randomString(8)+'-'+file.name
		let url = null


		APIManager
		.handleGet('/aws', {filename:filename, filetype:file.type})
		.then(response => {
			url = response.url
			return APIManager.directUpload(file, response.signedRequest)
		})
		.then(response => {
			let updated = Object.assign({}, this.state.module)
			updated['cdn'] = url
			this.setState({
				module: updated
			})

			console.log(JSON.stringify(updated))
			return response
		})
		.catch(err => {
			console.log('ERROR: '+err)
		})
	}

	updateModule(field, event){
		let updated = Object.assign({}, this.state.module)
		updated[field] = event.target.value
		this.setState({
			module: updated
		})
	}

	submitModule(event){
		event.preventDefault()

		APIManager
		.handlePost('/api/module', this.state.module)
		.then(response => {
			// console.log(JSON.stringify(response))
			window.location.href = '/'
		})
		.catch(err => {
			console.log(err.message)
		})
	}

	render(){

		return (
			<div className="row">
				<div className="col-md-6">
					<h3>Create Module</h3>
					<hr />

					<input onChange={this.updateModule.bind(this, 'name')} type="text" style={localStyle.input} className="form-control" placeholder="Name" />
					<Dropzone onDrop={this.uploadModule.bind(this)} className="btn btn-info">
						Click to Upload
					</Dropzone>
					<br />
					<button onClick={this.submitModule.bind(this)} style={localStyle.button}>Create</button>
				</div>

				<div className="col-md-6">
					<div style={{marginTop:24, background:'#f9f9f9', padding:16, border:'1px solid #ddd'}}>


					</div>
				</div>
			</div>
		)
	}
}

const localStyle = {
	input: {
		border: 'none',
		borderRadius: 0,
		background: '#f9f9f9',
		padding: 6,
		marginBottom: 12
	},
	button: {
		marginTop: 12
	}
}

export default CreateModule