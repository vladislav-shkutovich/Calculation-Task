// "Command" design pattern implementation
function add(x, y) {
	return x + y
}
function sub(x, y) {
	return x - y
}
function mul(x, y) {
	return x * y
}
function div(x, y) {
	return x / y
}

function format(stringValue) {
	return Number.isInteger(stringValue)
		? stringValue.toString()
		: stringValue.toFixed(3).toString()
}

const Command = function(execute, value) {
	this.execute = execute
	this.value = value
}

const AddCommand = function(value) {
	return new Command(add, value)
}

const SubCommand = function(value) {
	return new Command(sub, value)
}

const MulCommand = function(value) {
	return new Command(mul, value)
}

const DivCommand = function(value) {
	return new Command(div, value)
}

const Calculator = function() {
	let current = 0

	/*
	const commands = []
	function action(command) {
		const name = command.execute.toString().substr(9, 3)
		return name.charAt(0).toUpperCase() + name.slice(1)
	}
	*/

	return {
		execute: function(command) {
			current = format(
				command.execute(current, command.value),
			)

			/*
			commands.push(command)
			console.log(action(command) + ': ' + command.value)
			console.log(commands)
			*/
		},

		getCurrentValue: function() {
			return current
		},
	}
}

const calculator = new Calculator()

export function evaluate({
	previousOperand,
	operation,
	currentOperand,
	history,
}) {
	// Part of string expression for history component
	const calculation =
		previousOperand + operation + currentOperand
	// Guard for case with empty history array
	const updatedHistory =
		history === undefined ? [] : [...history]
	// Declaring formatted result for display component
	let formattedResult

	switch (operation) {
		case '+':
			formattedResult = calculator.execute(
				new AddCommand(currentOperand),
			)
			break
		case '-':
			formattedResult = calculator.execute(
				new SubCommand(currentOperand),
			)
			break
		case '*':
			formattedResult = calculator.execute(
				new MulCommand(currentOperand),
			)
			break
		case '/':
			formattedResult = calculator.execute(
				new DivCommand(currentOperand),
			)
			break
	}
	updatedHistory.push(calculation + ' = ' + formattedResult)

	return { formattedResult, updatedHistory }
}

/*
Идея: попробовать изменить редюсер таким образом, чтобы каждое промежуточное вычисление сохранялось в калькуляторе при CHOOSE_OPERATION и при EVALUATE, но в дисплее ничего менять не нужно. Меня интересует только formattedResult, чтобы он высчитывался внутри калькулятора по "команде". Но тогда нужно реализовать ещё и очистку, а это ужё ёбально.
*/

// Test
// /*
calculator.execute(new AddCommand(100))
calculator.execute(new SubCommand(24))
calculator.execute(new MulCommand(6))
calculator.execute(new DivCommand(2.7))

console.log('\nValue: ' + calculator.getCurrentValue())
// */
