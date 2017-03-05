import React from 'react';
import { Field } from 'redux-form';
import { FormControl, FormGroup } from 'react-bootstrap';

const renderInputField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <span className="has-float-label">
            <FormGroup>
                <FormControl {...input} type={type}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                <label>
                    {label}
                </label>
            </FormGroup>
        </span>
    );
};

const InputField = ({name, label, validate}) => {
    return (
        <Field name={name}
               label={label}
               placeholder={label}
               validate={validate}
               component={renderInputField}
               type="text"/>
    );
};

export default InputField;