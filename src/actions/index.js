import constants from '../constants'
import { APIManager } from '../utils'

const putRequest = (endpoint, params) => {
	return APIManager
		.handlePut(endpoint, params)
		.then(response => {

		})
		.catch(err => {
			throw err
		})
}

export default {

	currentUserReceived: (user) => {
		return {
			type: constants.CURRENT_USER_RECEIVED,
			user: user
		}
	},

	updateModule: (module, params) => {
		return (dispatch) => {
			return dispatch(putRequest(endpoint, params))
		}
	}

}