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
	let commands = []

	return {
		execute(command) {
			current = command.execute(current, command.value)
			commands.push(command)
		},

		getCurrentValue() {
			return current
		},
		getCommands() {
			return commands
		},
		clearCommands() {
			commands = []
			current = 0
		},
	}
}

const calculator = new Calculator()

export function evaluate({
	previousOperand,
	operation,
	currentOperand,
	history = [],
}) {
	// Guard for case when current = 0
	if (calculator.getCommands().length === 0) {
		calculator.execute(new AddCommand(previousOperand))
	}

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
			break
		case '-':
			calculator.execute(new SubCommand(currentOperand))
			break
		case '*':
			calculator.execute(new MulCommand(currentOperand))
			break
		case '/':
			calculator.execute(new DivCommand(currentOperand))
			break
		case '%':
			calculator.execute(
				new RemainderCommand(currentOperand),
			)
			break
	}

	const formattedResult = format(result())

	updatedHistory.push(calculation + ' = ' + formattedResult)

	return { formattedResult, updatedHistory }
}

export function resetCommands() {
	calculator.clearCommands()
}
