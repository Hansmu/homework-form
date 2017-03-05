import React, { Component } from 'react';
import { Field } from 'redux-form';
import 'react-datepicker/dist/react-datepicker.css';

import InputField from '../components/input-field';
import DatepickerField from '../components/datepicker-field';
import TextAreaField from '../components/textarea-field';

class EventForm extends Component {
    renderCurrencyField({ input, label, type, meta: { touched, error, warning } }) {
        return (
            <div>
                <div className="input-group">
                    <span className="input-group-addon glyphicon glyphicon-euro"/>
                    <input {...input} className="form-control" placeholder={label} type={type}/>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        )
    };

    renderEventFormFields() {
        return (
            <div>
                <DatepickerField name="eventDate" label="Toimumise aeg"/>
                <InputField name="eventTime" label="Kellaaeg"/>
                <InputField name="eventAddress" label="Aadress"/>
                <InputField name="eventLocation" label="Toimumise koht (nt park, kauplus, internet vms)"/>
                <TextAreaField name="eventDescription"
                               label="Toimunu kirjeldus"
                               rows={4}
                               cols={80}
                               validate={[this.props.required]}/>
                <Field name="eventCost"
                       className="form-control"
                       label="Tekitatud varaline kahju"
                       component={this.renderCurrencyField}/>
            </div>
        );
    }

    render() {
        return (
            <div className="panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="text-center" data-toggle="collapse" href="#collapse-event-info">SÜNDMUSE INFO</a>
                        </h4>
                    </div>
                    <div id="collapse-event-info" className="panel-collapse collapse">
                        <div className="panel-body">
                            {this.renderEventFormFields()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventForm;