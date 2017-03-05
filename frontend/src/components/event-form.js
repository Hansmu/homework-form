import React, { Component } from 'react';
import { Field } from 'redux-form';
import 'react-datepicker/dist/react-datepicker.css';
import { Panel, FormControl, FormGroup, InputGroup, Glyphicon, Col } from 'react-bootstrap';

import InputField from '../components/input-field';
import DatepickerField from '../components/datepicker-field';
import TextAreaField from '../components/textarea-field';
import CountrySelect from './country-select';
import ErrorMessage from './error-message';

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionShown: true
        };

        this.renderSectionHeader = this.renderSectionHeader.bind(this);
    }

    renderCurrencyField({ input, label, type, meta: { touched, error, warning } }) {
        return (
            <span className="has-float-label">
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="euro"/></InputGroup.Addon>
                        <FormControl {...input} placeholder={label} type={type}/>
                        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                    </InputGroup>
                    <label>
                        {label}
                    </label>
                </FormGroup>
            </span>
        )
    };

    renderEventFormFields() {
        return (
            <div>
                <Col xs={12} sm={4}>
                    <DatepickerField name="eventDate" label="Toimumise aeg"/>
                </Col>
                <Col xs={12} sm={3}>
                    <InputField name="eventTime" label="Kellaaeg"/>
                </Col>
                <Col xs={12} sm={5}>
                    <Field name="eventCost"
                           className="form-control"
                           label="Tekitatud varaline kahju"
                           component={this.renderCurrencyField}/>
                </Col>
                <Col xs={12}>
                    <hr/>
                </Col>
                <Col xs={12} sm={3}>
                    <CountrySelect name="eventCountry"/>
                </Col>
                <Col xs={12} sm={5}>
                    <InputField name="eventAddress" label="Aadress"/>
                </Col>
                <Col xs={12} sm={4}>
                    <InputField name="eventLocation" label="Toimumise koht (nt park, kauplus, internet vms)"/>
                </Col>
                <Col xs={12}>
                    <hr/>
                </Col>
                <Col xs={12}>
                    <TextAreaField name="eventDescription"
                                   label="Toimunu kirjeldus * "
                                   rows={4}
                                   cols={80}
                                   validate={[this.props.required]}/>
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
                SÜNDMUSE INFO
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
                {this.renderEventFormFields()}
            </Panel>
        );
    }
}

export default EventForm;