import React from 'react'
import { Avatar } from '../Avatar'
import { Container, Content, User, Greetings, Username, Message } from './styles'


export function Profile() {
    return(
        <Container>
            <Avatar urlImage='https://avatars.githubusercontent.com/u/67234590?s=40&v=4'/>
            <Content>
                <User>
                    <Greetings>
                        Olá 
                    </Greetings>
                    <Username>
                        Gabrielle 
                    </Username>
                </User>
                    <Message>
                        Insieme per 
                        la victoria 
                    </Message>
            </Content>
        </Container>
    )
}