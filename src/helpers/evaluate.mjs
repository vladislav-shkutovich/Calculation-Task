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
	const commands = []

	// function action(command) {
	// 	const name = command.execute.toString().substr(9, 3)
	// 	return name.charAt(0).toUpperCase() + name.slice(1)
	// }

	return {
		execute: function(command) {
			current = format(
				command.execute(current, command.value),
			)
			commands.push(command)
			// console.log(action(command) + ': ' + command.value)
			// console.log(commands)
		},

		getCurrentValue: function() {
			return current
		},
	}
}

const calculator = new Calculator()

// ? evaluate function ////////////////////////////////////////////////

export function evaluate({
	previousOperand,
	operation,
	currentOperand,
}) {
	switch (operation) {
		case '+':
			return calculator.execute(
				new AddCommand(currentOperand),
			)
		case '-':
			return calculator.execute(
				new SubCommand(currentOperand),
			)
		case '*':
			return calculator.execute(
				new MulCommand(currentOperand),
			)
		case '/':
			return calculator.execute(
				new DivCommand(currentOperand),
			)
	}
}

// ? evaluate function ////////////////////////////////////////////////

calculator.execute(new AddCommand(100))
calculator.execute(new SubCommand(24))
calculator.execute(new MulCommand(6))
calculator.execute(new DivCommand(2.7))

console.log('\nValue: ' + calculator.getCurrentValue())
