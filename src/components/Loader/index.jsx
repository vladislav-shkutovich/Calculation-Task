import React from 'react'

import theme from '@/themes/themeDark'

import { StyledLoader } from './styled'

const LOADER_SIZE = 100

export default () => {
	return (
		<StyledLoader
			type="Bars"
			color={theme.colors.black}
			height={LOADER_SIZE}
			width={LOADER_SIZE}
		/>
	)
}
