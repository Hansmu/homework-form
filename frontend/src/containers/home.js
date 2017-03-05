import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';

import { addCat } from '../actions';
import SubmitterForm from '../components/submitter-form';
import EventForm from '../components/event-form';
import TextHeaders from '../components/text-header';
import AddWitnessForm from '../components/add-witness-form';
import AddCriminalForm from '../components/add-criminal-form';
import AdditionalData from '../components/additional-data';

const required = value => value ? undefined : 'Kohustuslik';
const isNumber = value => value && isNaN(Number(value)) ? 'Peab olema arv' : undefined;

class Home extends Component {
    constructor(props) {
        super(props);

        this.renderForm = this.renderForm.bind(this);
        this.isEstonia = this.isEstonia.bind(this);
    }

    isEstonia() {
        const {personCountry} = this.props.fieldValues;
        return personCountry ? personCountry === 'Eesti Vabariik' : true;
    }

    isPhoneSelected() {
        const { phone } = this.props.fieldValues;
        return phone ? phone : false;
    }

    submitForm(values) {
        console.log(values);
    }

    renderForm() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                <SubmitterForm required={required}
                               isNumber={isNumber}
                               isEstonia={this.isEstonia()}
                               isPhoneSelected={this.isPhoneSelected()}/>
                <EventForm required={required}/>
                <AddWitnessForm witnesses={this.props.witnesses}/>
                <AddCriminalForm criminals={this.props.criminals}/>
                <AdditionalData/>
                <button type="submit" className="btn btn-primary">Kinnita ja allkirjasta ID kaardiga</button>
                <button type="submit" className="btn btn-primary">Kinnita allkirjastamata</button>
            </Form>
        );
    }

    render() {
        return (
            <div>
                <TextHeaders />
                {this.renderForm()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    fieldValues: state.form.reportForm && state.form.reportForm.values ? state.form.reportForm.values : [],
    criminals: state.main.criminals ? state.main.criminals : [],
    witnesses: state.main.witnesses ? state.main.witnesses : []
});

Home = connect(mapStateToProps, dispatch => ({dispatch}))(Home);

Home = reduxForm({
    form: 'reportForm',
    initialValues: {
        personCountry: 'Eesti Vabariik',
        personCounty: 'Harju maakond',
        phone: false
    }
})(Home);

export default Home;