import React from 'react';

import InputField from '../components/input-field';

const AddPersonFields = () => {
    return (
        <div>
            <InputField name="lastName" label="Perekonnanimi"/>
            <InputField name="firstName" label="Eesnimi"/>
            <InputField name="personCode" label="Isikukood"/>
            <InputField name="personAge" label="Vanus"/>
            <InputField name="personAddress" label="Aadress"/>
            <InputField name="personEmail" label="E-post"/>
            <InputField name="personPhone" label="Telefon"/>
        </div>
    );
};

export default AddPersonFields;