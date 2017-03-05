import React from 'react';
import { Col } from 'react-bootstrap';

import InputField from '../components/input-field';
import CountrySelect from './country-select';

const AddPersonFields = () => {
    return (
        <div>
            <Col xs={12} sm={6}>
                <InputField name="firstName" label="Eesnimi"/>
            </Col>
            <Col xs={12} sm={6}>
                <InputField name="lastName" label="Perekonnanimi"/>
            </Col>
            <Col xs={12} sm={4}>
                <InputField name="personCode" label="Isikukood"/>
            </Col>
            <Col xs={12} sm={4}>
                <InputField name="personAge" label="Vanus"/>
            </Col>
            <Col xs={12} sm={4}>
                <CountrySelect name="personCitizenship" label="Kodakondsus"/>
            </Col>
            <Col xs={12}>
                <InputField name="personAddress" label="Aadress"/>
            </Col>
            <Col xs={12} sm={7}>
                <InputField name="personEmail" label="E-post"/>
            </Col>
            <Col xs={12} sm={5}>
                <InputField name="personPhone" label="Telefon"/>
            </Col>
        </div>
    );
};

export default AddPersonFields;