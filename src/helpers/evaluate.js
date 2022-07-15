// "Command" design pattern implementation

function add(x, y) {
	return Number(x) + Number(y)
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
function remainder(x, y) {
	return x % y
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
const RemainderCommand = function(value) {
	return new Command(remainder, value)
}

function format(str) {
	return Number.isInteger(str)
		? str.toString()
		: str.toFixed(3).toString()
}

const Calculator = function() {
	let current = 0
	const commands = []

	return {
		execute: function(command) {
			current = command.execute(current, command.value)
			commands.push(command)
		},

		getCurrentValue: function() {
			return current
		},
		getCommands: function() {
			return commands
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
	console.log(history)
	// Guard for case when current = 0
	if (calculator.getCommands().length === 0)
		calculator.execute(new AddCommand(previousOperand))
	// Guard for case with empty history array
	const updatedHistory =
		history === undefined ? [] : [...history]
	// Part of string expression for history component
	const calculation =
		previousOperand + operation + currentOperand
	// Declaring result for display component
	const result = calculator.getCurrentValue

	switch (operation) {
		case '+':
			calculator.execute(new AddCommand(currentOperand))
			return result()
		case '-':
			calculator.execute(new SubCommand(currentOperand))
			return result()
		case '*':
			calculator.execute(new MulCommand(currentOperand))
			return result()
		case '/':
			calculator.execute(new DivCommand(currentOperand))
			return result()
		case '%':
			calculator.execute(
				new RemainderCommand(currentOperand),
			)
			return result()
	}

	// updatedHistory.push(calculation + ' = ' + result())

	return result()
}

// Test
// /*
// calculator.execute(new AddCommand(100))
// calculator.execute(new SubCommand(24))
// calculator.execute(new MulCommand(6))
// calculator.execute(new DivCommand(2.7))

// console.log('\nValue: ' + calculator.getCurrentValue())
// */
