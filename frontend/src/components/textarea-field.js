import React from 'react';
import { Field } from 'redux-form';
import { Panel, FormControl, FormGroup } from 'react-bootstrap';

import ErrorMessage from './error-message';

const renderTextArea = ({ input, label, rows, cols, type, meta: { touched, error, warning } }) => {
    return (
        <span className="has-float-label">
            <FormGroup>
                <FormControl {...input} componentClass="textarea" rows={rows} cols={cols}/>
                <label>
                    {label}
                    {touched &&
                        ((error && <ErrorMessage message={error}/> ||
                        (warning && <ErrorMessage message={warning}/>)))
                    }
                </label>
            </FormGroup>
        </span>
    );
};

const TextAreaField = ({name, label, validate, rows, cols}) => {
    return (
        <Field name={name}
               label={label}
               rows={rows}
               cols={cols}
               validate={validate}
               component={renderTextArea}/>
    );
};

export default TextAreaField;