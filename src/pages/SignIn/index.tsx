import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon'
import { Container, Title, SubTitle, Content } from './styles';

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }



    return(
        <Container>
            <Image source={illustrationImg} />
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
                onPress={handleSignIn}
            />
            </Content>
        </Container>
    )
}