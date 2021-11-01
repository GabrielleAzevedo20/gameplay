import React from 'react'
import { Container, Content, User, Greetting, Username, Message } from './styles'


export function Profile() {
    return(
        <Container>
            <Content>
                <User>
                    <Greetting>
                        Olá
                    </Greetting>
                    <Username>
                        Gabrielle
                    </Username>
                    <Message>
                        Insieme per la victoria
                    </Message>
                </User>
            </Content>
        </Container>
    )
}