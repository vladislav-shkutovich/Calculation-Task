import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { StyledHistory } from './styled'

import ShowMoreButton from '../ShowMoreButton'

export default ({ history, historyIsShown }) => {
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

	return historyIsShown ? (
		<StyledHistory>
			<p>{t('history')}</p>
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
			{history?.length > 3 && !buttonIsHidden && (
				<ShowMoreButton
					handleShowMore={showFullHistoryHandler}
				/>
			)}
		</StyledHistory>
	) : null
}
