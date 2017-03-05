import React from 'react';
import moment from 'moment';
import { Field } from 'redux-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class DateField extends React.Component {
    render() {
        return (
            <div className="input-group">
                <span className="input-group-addon glyphicon glyphicon-calendar"/>
                <input {...this.props} className="form-control"/>
            </div>
        );
    }
}

const renderDatePicker = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <div>
                <DatePicker {...input}
                            customInput={<DateField />}
                            dateFormat="DD/MM/YYYY"
                            placeholderText="Palun valige toimumise aeg"
                            selected={input.value ? moment(input.value, 'DD/MM/YYYY') : null}/>
            </div>
        </div>
    );
}

const DatepickerField = ({name, label}) => {
    return (
        <Field name={name}
               label={label}
               component={renderDatePicker}/>
    );
};

export default DatepickerField;