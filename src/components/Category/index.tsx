import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Content, Checked, Title } from './styles';
import { SvgProps } from 'react-native-svg';
import { categories } from '../../utils/categories';

interface Props extends TouchableOpacityProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}


export function Category({title, icon: Icon, checked = false, ...rest}: Props) {
    return (
      <Container {...rest}>
        <Content>
          <Checked>
            <Icon width={48}
              height={48}
              />
          </Checked>
          <Title>{title}</Title>
        </Content>
      </Container>
    );
}