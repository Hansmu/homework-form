import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import { Button, Col, Panel, Modal, Row } from 'react-bootstrap';

import { addCat } from '../actions';
import SubmitterForm from '../components/submitter-form';
import EventForm from '../components/event-form';
import TextHeaders from '../components/text-header';
import AddWitnessForm from '../components/add-witness-form';
import AddCriminalForm from '../components/add-criminal-form';
import AdditionalData from '../components/additional-data';
import '../../style/style.css';

const required = value => value ? undefined : 'Kohustuslik';
const isNumber = value => value && isNaN(Number(value)) ? 'Peab olema arv' : undefined;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formValues: {},
            showFormValues: false
        };

        this.isEstonia = this.isEstonia.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderFormValuesModal = this.renderFormValuesModal.bind(this);
    }

    isEstonia() {
        const {personCountry} = this.props.fieldValues;
        return personCountry ? personCountry === 'Eesti Vabariik' : true;
    }

    submitForm(values) {
        let formValues = values;
        values.criminals = this.props.criminals;
        values.witnesses = this.props.witnesses;

        this.setState({formValues});
        this.setState({showFormValues: true});
    }

    closeModal() {
        this.setState({showFormValues: false});
    }

    renderFormValuesModal() {
        return (
            <Modal show={this.state.showFormValues} onHide={this.closeModal}>
                <Modal.Header>
                    <Modal.Title className="text-center">Vormi väljad</Modal.Title>
                </Modal.Header>

                    <div style={{marginBottom: '20px'}}>
                        <Modal.Body>
                            <Col xs={12}>
                                <p className="text-wrap">
                                    {JSON.stringify(this.state.formValues, null, 2)}
                                </p>
                            </Col>
                        </Modal.Body>

                        <Col xs={12}>
                            <hr/>
                        </Col>

                        <Row>
                            <Col xs={5} className="pull-right" style={{marginRight: '30px'}}>
                                <Button className="pull-right"
                                        bsStyle="danger"
                                        onClick={this.closeModal}>
                                    Sulge
                                </Button>
                            </Col>
                        </Row>
                    </div>
            </Modal>
        );
    }

    renderForm() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                <Panel>
                    <SubmitterForm required={required}
                                   isNumber={isNumber}
                                   isEstonia={this.isEstonia()}/>
                    <EventForm required={required}/>
                    <AddWitnessForm witnesses={this.props.witnesses}/>
                    <AddCriminalForm criminals={this.props.criminals}/>
                    <AdditionalData/>
                    <Col xs={12}>
                        <hr/>
                    </Col>
                    <Button type="submit" bsStyle="primary">Kinnita ja allkirjasta ID kaardiga</Button>
                    <Button className="pull-right" type="submit" bsStyle="primary">Kinnita allkirjastamata</Button>
                </Panel>
            </Form>
        );
    }

    render() {
        return (
            <div>
                <TextHeaders />
                { this.renderForm() }
                { this.renderFormValuesModal() }
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