import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { FiArrowLeft, FiUser , FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';


const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async (data: object) => {
        try {
            formRef?.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No minimo 6 caractéres'),
            });

            await schema.validate(data, {
                abortEarly: false
            });


        } catch (error) {
            const errors = getValidationErrors(error)
            formRef?.current?.setErrors(errors);
        }
    }, []); 

    return(
        <Container>
            <Background/>
            <Content>
                <img src={logo} alt="goBarber"/>

                <Form ref={formRef} onSubmit={handleSubmit}>
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