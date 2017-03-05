import React from 'react';
import { Field } from 'redux-form';

const renderInputField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <div className="input-group">
                <input {...input} className="form-control" placeholder={label} type={type}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
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