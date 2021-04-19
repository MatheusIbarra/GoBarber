import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons'
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState<boolean>(false);
    const [filled, setFilled] = useState<boolean>(false);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputBlur = useCallback(() => {
        setFocused(false);
        setFilled(!!inputRef?.current?.value)
    }, []);

    const handleInputFocus = useCallback(() => {
        setFocused(true);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
    <Container isFilled={filled} isFocused={focused}>
        {Icon &&  <Icon size={20}/>}
        <input 
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={defaultValue} 
            ref={inputRef} 
            {...rest} 
        />
    </Container>
    )
}
export default Input;