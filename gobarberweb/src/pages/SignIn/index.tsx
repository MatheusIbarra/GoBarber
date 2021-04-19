import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup'

import { useAuth  } from '../../hooks/AuthContext'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

interface SignInFormData {
    email: string;
    password: string;
}


const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn, user } = useAuth();


    const handleSubmit = useCallback( async (data: SignInFormData) => {
        try {
            formRef?.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No minimo 6 caractéres'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            signIn({
                email: data.email,
                password: data.password
            });

        } catch (error) {
            const errors = getValidationErrors(error)
            formRef?.current?.setErrors(errors);
        }
    }, [signIn]); 

  return(
    <Container>
        <Content>
            <img src={logo} alt="goBarber"/>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu login</h1>
                <Input icon={FiMail} name="email" placeholder="Email"/>

                <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </Form>

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