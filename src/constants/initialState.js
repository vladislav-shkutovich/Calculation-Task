export const initialState = {
	history:
		JSON.parse(localStorage.getItem('history')) || [],
	historyIsShown:
		JSON.parse(localStorage.getItem('historyIsShown')) ||
		false,
	selectedTheme:
		JSON.parse(localStorage.getItem('selectedTheme')) ||
		'dark',
	currentOperand: null,
	previousOperand: null,
	operation: null,
}

// export const initialState = {
// 	currentOperand: null,
// 	previousOperand: null,
// 	operation: null,
// 	history: [],
// 	historyIsShown: false,
// 	selectedTheme: 'dark',
// }
