import React from 'react';
import { Image } from 'react-native';

import Illustration from '../assets/Illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Container, Title, SubTitle, Content } from './styles';

export function SignIn() {
    return(
        <Container>
            <Image source={Illustration} />
            <Content>
            <Title>
                Conecte-se {'\n'}
                e organize suas {'\n'}
                jogatinas
            </Title>
            <SubTitle>
                Crie grupos {'\n'}
                para jogar seus games {'\n'}
                favoritos com seus amigos
            </SubTitle>
            <ButtonIcon title="Entrar com o discord"
                activeOpacity={0.7}
                disabled={false}
            />
            </Content>
        </Container>
    )
}