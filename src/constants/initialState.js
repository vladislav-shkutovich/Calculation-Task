export const initialState = {
	// currentOperand:
	// 	JSON.parse(localStorage.getItem('currentOperand')) ||
	// 	'',
	// previousOperand:
	// 	JSON.parse(localStorage.getItem('previousOperand')) ||
	// 	'',
	// operation:
	// 	JSON.parse(localStorage.getItem('operation')) || '',
	history:
		JSON.parse(localStorage.getItem('history')) || [],
	// historyIsShown:
	// 	JSON.parse(localStorage.getItem('historyIsShown')) ||
	// 	false,
	selectedTheme:
		JSON.parse(localStorage.getItem('selectedTheme')) ||
		'dark',
}
