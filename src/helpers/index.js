import { evaluate as mathjsEvaluate } from 'mathjs'

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
			calculation + ' = ' + result.toFixed(3).toString(),
		)

		formattedResult = Number.isInteger(result)
			? result.toString()
			: result.toFixed(3).toString()

		return { formattedResult, updatedHistory }
	} catch {
		return { formattedResult, updatedHistory }
	}
}
