import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return(
    <Container>
        <Content>
            <img src={logo} alt="goBarber"/>

            <form>
                <h1>Faça seu login</h1>
                <Input icon={FiMail} name="email" placeholder="Email"/>

                <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="login">
                <FiLogIn/>
                Criar conta
            </a>
        </Content>
        <Background/>
    </Container>
  );
}

export default SignIn;