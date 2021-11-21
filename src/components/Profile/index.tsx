import React from 'react'
import { Avatar } from '../Avatar'
import { Container, Content, User, Greetting, Username, Message } from './styles'


export function Profile() {
    return(
        <Container>
            <Avatar urlImage='https://avatars.githubusercontent.com/u/67234590?s=40&v=4'/>
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