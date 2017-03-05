import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Panel, FormControl } from 'react-bootstrap';

import CountrySelect from '../components/country-select';
import CountySelect from '../components/county-select';
import InputField from './input-field';
import CheckboxField from './checkbox-field';

const inline = {
    display: 'inline'
};

class SubmitterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionShown: false
        };

        this.renderSectionHeader = this.renderSectionHeader.bind(this);
    }

    renderPersonInfoFields() {
        return (
            <div>
                <InputField name="firstName"
                            label="Eesnimi"
                            validate={[this.props.required]}/>
                <InputField name="lastName"
                            label="Perekonnanimi"
                            validate={[this.props.required]}/>
                <InputField name="personCode"
                            label="Isikukood"
                            validate={[this.props.isNumber]}/>
            </div>
        );
    }

    renderResidenceInfoFields() {
        return (
            <div>
                <CountrySelect />
                { this.props.isEstonia &&  <CountySelect /> }
                <InputField name="placeOfResidence"
                            label="Elukoha aadress (linn, korter, maja nr, tänav)"/>
            </div>
        );
    }


    renderContactInfoFields() {
        return (
            <div>
                <InputField name="contactEmail"
                            label="E-mail"
                            validate={[this.props.required]}/>
                <InputField name="contactPhone" label="Telefon"/>
                <CheckboxField name="isCorporateBody" label="Kannatanu on juriidiline isik"/>
            </div>
        );
    }

    renderSectionHeader() {
        return (
            <h3 className="text-center"
                onClick={() => this.setState({sectionShown: !this.state.sectionShown})}>
                TEATAJA
            </h3>
        );
    }

    render() {
        return (
            <Panel collapsible expanded={this.state.sectionShown} header={this.renderSectionHeader()}>
                {this.renderPersonInfoFields()}
                <hr/>
                {this.renderResidenceInfoFields()}
                <hr/>
                {this.renderContactInfoFields()}
                <hr/>
            </Panel>
        );
    }
}

export default SubmitterForm;