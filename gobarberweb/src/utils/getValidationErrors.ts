import { ValidationError } from 'yup';

interface Errors {
    [key : string]: string;
}


export default function getValidationErrors(err: ValidationError): Errors {
    const validationErrors : Errors = {};

    err.inner.forEach(error => {
         validationErrors[error.path ? error.path : 0] = error.message
    });

    return validationErrors;
}