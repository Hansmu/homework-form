import React, { Component } from 'react';
import { Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Panel, Table, Glyphicon, Col, Row } from 'react-bootstrap';

import AddPersonFields from './add-person-fields';
import TextAreaField from './textarea-field';
import { addCriminal, removeCriminal } from '../actions/people/add-criminal';

class AddCriminalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            sectionShown: false
        };

        this.showModal = this.showModal.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
        this.renderAddCriminalModal = this.renderAddCriminalModal.bind(this);
    }

    submitForm(values) {
        this.props.dispatch(addCriminal(values));
        this.props.reset();
        this.closeModal();
    }

    renderAddedCriminals(criminals = []) {
        return criminals.map((criminal, index) => {
            return (
                <tr key={index}>
                    <td className="text-center">{ index + 1 }</td>
                    <td className="text-center">{ criminal.firstName }</td>
                    <td className="text-center">{ criminal.lastName }</td>
                    <td className="text-center">{ criminal.personCitizenship }</td>
                    <td>
                        <Button className="pull-right" bsStyle="danger" onClick={() => this.props.dispatch(removeCriminal(index))}>
                            <span className="glyphicon glyphicon-remove"/>
                        </Button>
                    </td>
                </tr>
            );
        });
    }

    renderAddedCriminalsTable(criminals = []) {
        return (
            <Table striped condensed hover>
                <thead>
                { criminals.length > 0 &&
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center"> Eesnimi </th>
                    <th className="text-center"> Perekonnanimi </th>
                    <th className="text-center"> Kodakondsus </th>
                    <th/>
                </tr>}
                </thead>
                <tbody>
                { this.renderAddedCriminals(criminals) }
                </tbody>
            </Table>
        );
    }

    showModal() {
        this.setState({showModal: true});
    }

    closeModal() {
        this.setState({showModal: false});
    }

    renderAddCriminalModal() {
        return (
            <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header>
                    <Modal.Title className="text-center">Lisa süüteo toime pannud isik</Modal.Title>
                </Modal.Header>

                <Form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                    <div style={{marginBottom: '20px'}}>
                        <Modal.Body>
                            <AddPersonFields/>
                            <Col xs={12}>
                                <TextAreaField name="criminalDescription"
                                               label="Tundemärgid (sh sugu, vanus, kirjeldus, riietus jne)"
                                               rows={4}/>
                            </Col>
                        </Modal.Body>

                        <Col xs={12}>
                            <hr/>
                        </Col>

                        <Row>
                            <Col xs={5} style={{marginLeft: '30px'}}>
                                <Button type="submit" bsStyle="primary">Lisa isik</Button>
                            </Col>
                            <Col xs={5} className="pull-right" style={{marginRight: '30px'}}>
                                <Button className="pull-right"
                                        bsStyle="danger"
                                        onClick={this.closeModal}>
                                    Sulge
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </Modal>
        );
    }

    renderSectionHeader() {
        const glyph = this.state.sectionShown ? "chevron-up" : "chevron-down";

        return (
            <h3 className="text-center"
                onClick={() => this.setState({sectionShown: !this.state.sectionShown})}>
                <Glyphicon glyph={glyph} style={{marginRight: '10px'}}/>
                SÜÜTEO TOIME PANNUD ISIKU(TE) ANDMED
                <Glyphicon glyph={glyph} style={{marginLeft: '10px'}}/>
            </h3>
        );
    }

    render() {
        return (
            <Panel collapsible
                   bsStyle="primary"
                   expanded={this.state.sectionShown}
                   header={this.renderSectionHeader()}>
                { this.renderAddedCriminalsTable(this.props.criminals) }
                <Button className="pull-right" bsStyle="success" onClick={this.showModal}>
                    <Glyphicon glyph="plus"/>
                    Lisa isik
                </Button>
                { this.renderAddCriminalModal() }
            </Panel>
        );
    }
}

const mapStateToProps = state => ({
    fieldValues: state.form.criminalForm && state.form.criminalForm.values ? state.form.criminalForm.values : []
});

AddCriminalForm = connect(mapStateToProps, dispatch => ({dispatch}))(AddCriminalForm);

AddCriminalForm = reduxForm({
    form: 'criminalForm',
    initialValues: {
        personCitizenship: 'Eesti Vabariik'
    }
})(AddCriminalForm);

export default AddCriminalForm;