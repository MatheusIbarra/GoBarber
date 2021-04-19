import React from 'react';
import { FiLogIn, FiArrowLeft, FiUser , FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';


import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const handleSubmit = () => {

  }

    return(
        <Container>
            <Background/>
            <Content>
                <img src={logo} alt="goBarber"/>

                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input icon={FiUser} name="name" placeholder="Nome"/>

                    <Input icon={FiMail} name="email" placeholder="Email"/>

                    <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

                    <Button type="submit">Cadastrar</Button>

                </Form>

                <a href="login">
                    <FiArrowLeft/>
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
}

export default SignUp;