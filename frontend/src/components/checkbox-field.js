import React from 'react';
import { Field } from 'redux-form';
import { Checkbox } from 'react-bootstrap';

const renderCheckBox = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <Checkbox {...input}>
            { label }
        </Checkbox>
    );
};

const CheckBoxField = ({name, label}) => {
    return (
        <Field name={name}
               id={name}
               label={label}
               component={renderCheckBox}
               type="checkbox"/>
    );
};

export default CheckBoxField;
