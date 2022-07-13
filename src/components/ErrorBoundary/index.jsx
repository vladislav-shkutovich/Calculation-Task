import React from 'react'
import { Message } from './styled'

export default class ErrorBoundary extends React.Component {
	state = {
		hasError: false,
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error,
		}
	}

	componentDidCatch(error, info) {
		console.log(error, info)
	}

	render() {
		if (this.state.hasError) {
			return <Message>Something went wrong...</Message>
		}

		return this.props.children
	}
}
