import React from 'react'
import withRedux from '../utils/withRedux'
import { initStore } from '../utils/store'
import { addCount } from '../reducers/countReducer'

class Main extends React.Component {

	render () {
		const {count, addCount} = this.props
		return (
			<div>
				{count}
				<button onClick={addCount}>Add</button>
			</div>
		)
	}
}

const mapState = ({count}) => {
	return {
		count: count,
	}
}

const mapDispatch = (dispatch) => {
	return {
		addCount: () => dispatch(addCount()),
	}
}

export default withRedux(initStore, mapState, mapDispatch)(Main)
