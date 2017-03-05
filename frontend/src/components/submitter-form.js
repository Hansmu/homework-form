import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Panel, FormControl, Col, Glyphicon } from 'react-bootstrap';

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
            sectionShown: true
        };

        this.renderSectionHeader = this.renderSectionHeader.bind(this);
    }

    renderPersonInfoFields() {
        return (
            <div>
                <Col xs={12} sm={4}>
                    <InputField name="firstName"
                                label="Eesnimi"
                                validate={[this.props.required]}/>
                </Col>
                <Col xs={12} sm={4}>
                    <InputField name="lastName"
                                label="Perekonnanimi"
                                validate={[this.props.required]}/>
                </Col>
                <Col xs={12} sm={4}>
                    <InputField name="personCode"
                                label="Isikukood"
                                validate={[this.props.isNumber]}/>
                </Col>
            </div>
        );
    }

    renderResidenceInfoFields() {
        return (
            <div>
                <Col xs={12} sm={7}>
                    <CountrySelect />
                </Col>
                { this.props.isEstonia &&
                    <Col xs={12} sm={5}>
                        <CountySelect />
                    </Col>}
                <Col xs={12}>
                    <InputField name="placeOfResidence"
                                label="Elukoha aadress (linn, korter, maja nr, tänav)"/>
                </Col>
            </div>
        );
    }

    renderContactInfoFields() {
        return (
            <div>
                <Col xs={12} sm={7}>
                    <InputField name="contactEmail"
                                label="E-mail"
                                validate={[this.props.required]}/>
                </Col>
                <Col xs={12} sm={5}>
                    <InputField name="contactPhone" label="Telefon"/>
                </Col>
                <Col xs={12}>
                    <hr/>
                </Col>
                <Col xs={12}>
                    <CheckboxField name="isCorporateBody" label="Kannatanu on juriidiline isik"/>
                </Col>
            </div>
        );
    }

    renderSectionHeader() {
        const glyph = this.state.sectionShown ? "chevron-up" : "chevron-down";

        return (
            <h3 className="text-center"
                onClick={() => this.setState({sectionShown: !this.state.sectionShown})}>
                <Glyphicon glyph={glyph} style={{marginRight: '10px'}}/>
                TEATAJA
                <Glyphicon glyph={glyph} style={{marginLeft: '10px'}}/>
            </h3>
        );
    }

    render() {
        return (
            <Panel collapsible
                   expanded={this.state.sectionShown}
                   bsStyle="primary"
                   header={this.renderSectionHeader()}>

                {this.renderPersonInfoFields()}
                <Col xs={12}>
                    <hr/>
                </Col>
                {this.renderResidenceInfoFields()}
                <Col xs={12}>
                    <hr/>
                </Col>
                {this.renderContactInfoFields()}
            </Panel>
        );
    }
}

export default SubmitterForm;
