import React, { Component } from 'react';
import { Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Panel, Table, Col, Row, Glyphicon } from 'react-bootstrap';

import AddPersonFields from './add-person-fields';
import { addWitness, removeWitness } from '../actions/people/add-witness';

class AddWitnessForm extends Component {
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
        this.renderAddWitnessModal = this.renderAddWitnessModal.bind(this);
    }

    submitForm(values) {
        this.props.dispatch(addWitness(values));
        this.props.reset();
        this.closeModal();
    }

    renderAddedWitnesses(witnesses = []) {
        return witnesses.map((witness, index) => {
            return (
                <tr key={index}>
                    <td>{ index }</td>
                    <td>{ witness.firstName }</td>
                    <td>{ witness.lastName }</td>
                    <td>
                        <Button onClick={() => this.props.dispatch(removeWitness(index))}>
                            <span className="glyphicon glyphicon-remove"/>
                        </Button>
                    </td>
                </tr>
            );
        });
    }

    renderAddedWitnessesTable(witnesses = []) {
        return (
            <Table striped bordered condensed hover>
                <thead>
                { witnesses.length > 0 &&
                    <tr>
                        <th>#</th>
                        <th> Eesnimi </th>
                        <th> Perekonnanimi </th>
                        <th/>
                    </tr>}
                </thead>
                <tbody>
                    { this.renderAddedWitnesses(witnesses) }
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

    renderAddWitnessModal() {
        return (
            <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header>
                    <Modal.Title className="text-center">Lisa tunnistaja</Modal.Title>
                </Modal.Header>

                <Form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                    <div style={{marginBottom: '20px'}}>
                        <Modal.Body>
                                <AddPersonFields/>
                        </Modal.Body>

                        <hr/>
                        <Row>
                            <Col xs={5} style={{marginLeft: '30px'}}>
                                <Button type="submit" bsStyle="primary">Lisa tunnistaja</Button>
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
                TUNNISTAJA(TE) ANDMED
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

                { this.renderAddedWitnessesTable(this.props.witnesses) }
                <Button onClick={this.showModal}>
                    <span className="glyphicon glyphicon-plus"/>
                    Lisa tunnistaja
                </Button>
                { this.renderAddWitnessModal() }
            </Panel>
        );
    }
}

const mapStateToProps = state => ({
    fieldValues: state.form.witnessForm && state.form.witnessForm.values ? state.form.witnessForm.values : []
});

AddWitnessForm = connect(mapStateToProps, dispatch => ({dispatch}))(AddWitnessForm);

AddWitnessForm = reduxForm({
    form: 'witnessForm'
})(AddWitnessForm);

export default AddWitnessForm;