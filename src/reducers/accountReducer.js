import constants from '../constants'

var initialState = {
	user: null,
	site: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state)

	switch (action.type){
		case constants.CURRENT_USER_RECEIVED:
//			console.log('CURRENT_USER_RECEIVED: '+JSON.stringify(action.user))
			updated['site'] = action.user
			return updated

		default:
			return state

	}

}