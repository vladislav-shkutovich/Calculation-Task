export const initialState = {
	currentOperand:
		JSON.parse(localStorage.getItem('currentOperand')) ||
		null,
	previousOperand:
		JSON.parse(localStorage.getItem('previousOperand')) ||
		null,
	operation:
		JSON.parse(localStorage.getItem('operation')) || null,
	history:
		JSON.parse(localStorage.getItem('history')) || [],
	historyIsShown:
		JSON.parse(localStorage.getItem('historyIsShown')) ||
		false,
	selectedTheme:
		JSON.parse(localStorage.getItem('selectedTheme')) ||
		'dark',
}
