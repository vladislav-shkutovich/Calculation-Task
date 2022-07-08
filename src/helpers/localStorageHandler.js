export const setLocalStorage = ({
	history,
	historyIsShown,
	selectedTheme,
}) => {
	localStorage.setItem('history', JSON.stringify(history))
	localStorage.setItem(
		'historyIsShown',
		JSON.stringify(historyIsShown),
	)
	localStorage.setItem(
		'selectedTheme',
		JSON.stringify(selectedTheme),
	)
}
