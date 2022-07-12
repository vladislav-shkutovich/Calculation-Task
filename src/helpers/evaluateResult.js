import { evaluate as mathjsEvaluate } from 'mathjs'
// TODO переделать на паттерн команда

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

	const updatedHistory =
		history === undefined ? [] : [...history]

	let formattedResult = 'Error'

	// ! BRACKETS FUNCTIONALITY IS TEMPORARILY ON PAUSE
	// if (calculation.includes('('))
	// 	calculation = calculation.includes(')')
	// 		? calculation
	// 		: calculation.slice(
	// 				calculation.indexOf('(') + 1,
	// 				calculation.length,
	// 		  )

	try {
		// ! BRACKETS FUNCTIONALITY IS TEMPORARILY ON PAUSE
		// if (calculation.includes('('))
		// 	calculation = calculation.slice(
		// 		calculation.indexOf('(') + 1,
		// 		calculation.length,
		// 	)
		// console.log(calculation)
		// result = calculation

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
