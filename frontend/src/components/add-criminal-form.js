import React, { Component } from 'react';
import { Form } from 'redux-form';
import { connect } from 'react-redux';

import AddPersonFields from './add-person-fields';
import InputField from '../components/input-field';

class AddCriminalForm extends Component {
    submitForm(values) {
        console.log(values);
    }

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                <AddPersonFields/>
                <InputField />
                <button type="submit" className="btn btn-primary">Lisa isik</button>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    fieldValues: state.form.criminalForm && state.form.criminalForm.values ? state.form.criminalForm.values : []
});

AddCriminalForm = connect(mapStateToProps, dispatch => ({dispatch}))(AddCriminalForm);

AddCriminalForm = reduxForm({
    form: 'criminalForm'
})(AddCriminalForm);

export default AddCriminalForm;