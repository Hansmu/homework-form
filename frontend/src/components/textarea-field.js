import React from 'react';
import { Field } from 'redux-form';
import { Panel, FormControl } from 'react-bootstrap';

const renderTextArea = ({ input, label, rows, cols, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <div>
                <FormControl {...input} componentClass="textarea" rows={rows} cols={cols} placeholder={label}/>
            </div>
        </div>
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