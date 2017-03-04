import React, { Component } from 'react';
import { Field } from 'redux-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class EventForm extends Component {

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

    renderDatePicker({ props, label, type, meta: { touched, error, warning } }) {
        console.log(props);
        return (
            <div>
                <div>
                    <DatePicker/>
                </div>
            </div>
        );
    }

    renderEventFormFields() {
        return (
            <div>
                <Field name="eventDate"
                       className="form-control"
                       label="Toimumise aeg"
                       component={this.renderDatePicker}
                       type="text"/>
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