import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


const button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <Container>
        <button type="button" {...rest} >{children}</button>
    </Container>
    );
}

export default button;