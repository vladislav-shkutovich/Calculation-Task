import { evaluate as mathjsEvaluate } from 'mathjs'

function format(stringValue) {
	return Number.isInteger(stringValue)
		? stringValue.toString()
		: stringValue.toFixed(3).toString()
}

// todo BRACKETS ADDING LOGIC HERE
export function evaluate({
	currentOperand,
	previousOperand,
	operation,
	history,
}) {
	// console.log(
	// 	previousOperand +
	// 		' ' +
	// 		operation +
	// 		' ' +
	// 		currentOperand,
	// )

	const calculation =
		previousOperand + operation + currentOperand

	/*
	// ! brackets logic adding from here
	if (calculation.includes('('))
		calculation = calculation.includes(')')
			? calculation
			: calculation.slice(
					calculation.indexOf('(') + 1,
					calculation.length,
			  )
	// ! to here
	*/

	// Guard for case when history array is empty
	const updatedHistory =
		history === undefined ? [] : [...history]
	let formattedResult = 'Error'
	let result

	try {
		/*
		// ! brackets logic adding from here
		if (calculation.includes('('))
			calculation = calculation.slice(
				calculation.indexOf('(') + 1,
				calculation.length,
			)
		console.log(calculation)
		result = calculation
		// ! to here
		*/

		result = mathjsEvaluate(calculation)
		updatedHistory.push(
			calculation + ' = ' + format(result),
		)

		formattedResult = format(result)

		return { calculation, formattedResult, updatedHistory }
	} catch {
		return { formattedResult, updatedHistory }
	}
}
