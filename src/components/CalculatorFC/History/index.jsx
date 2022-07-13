import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { StyledHistory } from './styled'
import ShowMoreButton from '../ShowMoreButton'

export default () => {
	const store = useSelector(store => store)

	const { t } = useTranslation()

	const [
		fullHistoryIsShown,
		setFullHistoryIsShown,
	] = useState(false)

	const [buttonIsHidden, setButtonIsHidden] = useState(
		false,
	)

	const showFullHistoryHandler = () => {
		setFullHistoryIsShown(true)
		setButtonIsHidden(true)
	}

	return store.historyIsShown ? (
		<StyledHistory>
			<p>{t('history')}</p>
			<ul>
				{store.history
					?.slice(
						0,
						fullHistoryIsShown ? store.history.length : 3,
					)
					.map((el, i) => (
						<li key={i}>{el}</li>
					))}
			</ul>
			{store.history.length > 3 && !buttonIsHidden && (
				<ShowMoreButton
					handleShowMore={showFullHistoryHandler}
				/>
			)}
		</StyledHistory>
	) : null
}
