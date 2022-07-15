const history = JSON.parse(localStorage.getItem('history'))
const historyIsShown = JSON.parse(
	localStorage.getItem('historyIsShown'),
)
const selectedTheme = JSON.parse(
	localStorage.getItem('selectedTheme'),
)

export const initialState = {
	history: history || [],
	historyIsShown: historyIsShown || false,
	selectedTheme: selectedTheme || 'dark',
	currentOperand: null,
	previousOperand: null,
	operation: null,
}

/*
export const initialState = {
	currentOperand: null,
	previousOperand: null,
	operation: null,
	history: [],
	historyIsShown: false,
	selectedTheme: 'dark',
}
*/
