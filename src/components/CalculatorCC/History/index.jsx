import React from 'react'
import { connect } from 'react-redux'
import i18n from 'i18next'
import { StyledHistory } from './styled'
import ShowMoreButton from '../ShowMoreButton'

class History extends React.Component {
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
		const { history, historyIsShown } = this.props
		const {
			fullHistoryIsShown,
			buttonIsHidden,
		} = this.state

		return historyIsShown ? (
			<StyledHistory>
				<p>{i18n.t('history')}</p>
				<ul>
					{history
						?.slice(
							0,
							fullHistoryIsShown ? history.length : 3,
						)
						.map((el, i) => (
							<li key={i}>{el}</li>
						))}
				</ul>
				{history.length > 3 && !buttonIsHidden && (
					<ShowMoreButton
						handleShowMore={this.showFullHistoryHandler}
					/>
				)}
			</StyledHistory>
		) : null
	}
}

const mapStateToProps = state => {
	return {
		history: state.history,
		historyIsShown: state.historyIsShown,
	}
}

export default connect(mapStateToProps)(History)
