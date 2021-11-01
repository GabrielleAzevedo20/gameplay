import React, { ReactNode } from 'react'
import { Container } from './styles'
import { theme } from '../../global/styles/theme'

interface Props {
    children: ReactNode
}


export function Background({children}: Props) {
    const { secondary30, secondary100 } = theme.colors
    return(
        <Container 
            colors={[secondary30, secondary100]}
        >
            {children}
        </Container>
    )
}