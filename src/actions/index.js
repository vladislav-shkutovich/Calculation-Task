import { evaluate as mathjsEvaluate } from 'mathjs'

export default function evaluate({
	currentOperand,
	previousOperand,
	operation,
}) {
	try {
		const calculation =
			previousOperand + operation + currentOperand
		console.log(calculation)

		const result = mathjsEvaluate(calculation)
		// todo PLACEHOLDER FOR DISPATCH TO HISTORY

		const formattedResult = Number.isInteger(result)
			? result.toString()
			: result.toFixed(3).toString()

		return formattedResult
	} catch {
		return 'Error'
	}
}
