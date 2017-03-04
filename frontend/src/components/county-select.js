import React from 'react';
import { Field } from 'redux-form';

const CountySelect = () => {
    return (
        <Field name="personCounty" component="select">
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
        </Field>
    );
};

export default CountySelect;