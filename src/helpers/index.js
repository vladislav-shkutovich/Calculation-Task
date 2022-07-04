import { evaluate as mathjsEvaluate } from 'mathjs'

function format(stringValue) {
	return Number.isInteger(stringValue)
		? stringValue.toString()
		: stringValue.toFixed(3).toString()
}

export function evaluate({
	currentOperand,
	previousOperand,
	operation,
	history,
}) {
	const calculation =
		previousOperand + operation + currentOperand

	// Guard for case when history array is empty
	const updatedHistory =
		history === undefined ? [] : [...history]

	let formattedResult = 'Error'

	try {
		const result = mathjsEvaluate(calculation)
		updatedHistory.push(
			calculation + ' = ' + format(result),
		)

		formattedResult = format(result)

		return { calculation, formattedResult, updatedHistory }
	} catch {
		return { formattedResult, updatedHistory }
	}
}
