import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { Container, IconWrapper, Imagem, Title } from './styles'
import discordImg from '../../assets/discord.png';

interface Props extends TouchableOpacityProps {
    title?: string;
}


export function ButtonIcon({ title, ...rest }: Props) {
    return(
        <Container {...rest}>
            <IconWrapper>
                <Imagem source={discordImg} />
            </IconWrapper>

            <Title>
                {title}
            </Title>

        </Container>
    )
}