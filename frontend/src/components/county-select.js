import React from 'react';
import { Field } from 'redux-form';
import { FormControl, FormGroup } from 'react-bootstrap';

const Select = ({ input, label, type, meta: { touched, error, warning } }) => {
        return (
            <span className="has-float-label">
                <FormGroup>
                    <FormControl {...input} componentClass="select" placeholder={label}>
                            <option>Harju maakond</option>
                            <option>Hiiu maakond</option>
                            <option>Ida-Viru maakond</option>
                            <option>Jõgeva maakond</option>
                            <option>Järva maakond</option>
                            <option>Lääne maakond</option>
                            <option>Lääne-Viru maakond</option>
                            <option>Põlva maakond</option>
                            <option>Pärnu maakond</option>
                            <option>Rapla maakond</option>
                            <option>Saare maakond</option>
                            <option>Tartu maakond</option>
                            <option>Valga maakond</option>
                            <option>Viljandi maakond</option>
                            <option>Võru maakond</option>
                    </FormControl>
                    <label>
                        {label}
                    </label>
                </FormGroup>
            </span>
        );
};

const CountySelect = ({name = "personCounty", label = "Maakond"}) => {
    return (
        <Field name={name}
               label={label}
               type="select"
               component={Select}/>
    );
};

export default CountySelect;