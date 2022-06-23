import React from 'react'

import { History } from './components'

import ShowMoreButton from './ShowMoreButton'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fullHistoryIsShown: false,
			buttonIsHidden: false,
		}
	}

	showFullHistoryHandler = () => {
		this.setState({
			fullHistoryIsShown: true,
			buttonIsHidden: true,
		})
	}

	render() {
		const { history } = this.props
		const {
			fullHistoryIsShown,
			buttonIsHidden,
		} = this.state

		return (
			<History>
				<p>History</p>
				<ul>
					{history
						?.slice(
							0,
							fullHistoryIsShown ? history.length : 3,
						)
						.map((el, i) => <li key={i}>{el}</li>)}
				</ul>
				{history?.length > 3 && !buttonIsHidden && (
					<ShowMoreButton
						handleShowMore={this.showFullHistoryHandler}
					/>
				)}
			</History>
		)
	}
}
