export function bracketsValidation(s) {
	let needToCloseCount = 0
	let depth = 0
	let maxDepth = 0
	let bracketsIsValid = false

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			++needToCloseCount
			++depth
			if (depth >= maxDepth) maxDepth = depth
		}

		if (s[i] === ')') {
			--needToCloseCount
			// --depth;
		}
	}

	if (needToCloseCount === 0) bracketsIsValid = true

	return { bracketsIsValid, maxDepth }
}

// console.log(bracketsValidation('2(1+1(11))'))
