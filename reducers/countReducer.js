import { defineAction } from 'redux-define'

const init = 0
const TYPE = defineAction('COUNT', ['ADD'])

export const addCount = () => {
	return {
		type: TYPE.ADD,
	}
}

const countReducer = (state = init, action) => {
	switch (action.type) {
		case TYPE.ADD:
			return state + 1
		default:
			return state
	}
}

export default countReducer