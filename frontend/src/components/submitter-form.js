import React, { Component } from 'react';
import { Field } from 'redux-form';

import CountrySelect from '../components/country-select';
import CountySelect from '../components/county-select';

const inline = {
    display: 'inline'
};

class SubmitterForm extends Component {

    renderInputField({ input, label, type, meta: { touched, error, warning } }) {
        return (
            <div>
                <div>
                    <input {...input} placeholder={label} type={type}/>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        );
    }

    renderPersonInfoFields() {
        return (
            <div>
                <Field name="firstName"
                       className="form-control"
                       label="Eesnimi"
                       validate={[this.props.required]}
                       component={this.renderInputField}
                       type="text"/>
                <Field name="lastName"
                       className="form-control"
                       label="Perekonnanimi"
                       validate={[this.props.required]}
                       component={this.renderInputField}
                       type="text"/>
                <Field name="personCode"
                       className="form-control"
                       label="Isikukood"
                       validate={[this.props.isNumber]}
                       component={this.renderInputField}
                       type="text"/>
            </div>
        );
    }

    renderResidenceInfoFields() {
        return (
            <div>
                <CountrySelect />
                { this.props.isEstonia &&  <CountySelect /> }
                <Field name="placeOfResidence"
                       label="Elukoha aadress (linn, korter, maja nr, tänav)"
                       component={this.renderInputField}
                       type="text"/>
            </div>
        );
    }

    renderMeansOfContact() {
        return (
            <div className="form-inline">
                <label className="checkbox-inline" htmlFor="email">E-mail</label>
                <div>
                    <Field name="email" id="email" component="input" type="checkbox"/>
                </div>

                <label className="checkbox-inline" htmlFor="phone">Telefon</label>
                <div>
                    <Field name="phone"
                           id="phone"
                           component="input"
                           type="checkbox"/>
                </div>
            </div>
        );
    }

    renderPhoneContact() {
        return (
            <div>
                <Field name="contactPhone"
                       label="Telefon"
                       component={this.renderInputField}
                       type="text"/>

                <Field name="contactTime"
                       label="Sobiv aeg kontakteerumiseks"
                       component={this.renderInputField}
                       type="text"/>
            </div>
        );
    }

    renderContactInfoFields() {
        return (
            <div>
                <Field name="contactEmail"
                       label="E-mail"
                       validate={[this.props.required]}
                       component={this.renderInputField}
                       type="text"/>

                { this.renderMeansOfContact() }
                { this.props.isPhoneSelected && this.renderPhoneContact() }

                <label htmlFor="isCorporateBody">Kannatanu on juriidiline isik</label>
                <div>
                    <Field name="isCorporateBody"
                           id="isCorporateBody"
                           style={inline}
                           component="input"
                           type="checkbox"/>
                </div>
            </div>
        );
    }

    renderSubmitterFormFields() {
        return (
            <div className="form-group">
                {this.renderPersonInfoFields()}
                <hr/>
                {this.renderResidenceInfoFields()}
                <hr/>
                {this.renderContactInfoFields()}
                <hr/>
            </div>
        );
    }

    render() {
        return (
            <div className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="text-center" data-toggle="collapse" href="#collapse-submitter">TEATAJA</a>
                        </h4>
                    </div>
                    <div id="collapse-submitter" className="panel-collapse collapse">
                        <div className="panel-body">
                            {this.renderSubmitterFormFields()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmitterForm;