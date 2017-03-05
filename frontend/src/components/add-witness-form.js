import React, { Component } from 'react';
import { Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Panel } from 'react-bootstrap';

import AddPersonFields from './add-person-fields';

class AddWitnessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            sectionShown: false
        };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
        this.renderAddWitnessModal = this.renderAddWitnessModal.bind(this);
    }

    submitForm(values) {
        console.log(values);
    }

    renderAddedWitnesses(witnesses) {
        return witnesses.map(witness => {
            return (
                <tr>
                    <td>{ witness.firstName }</td>
                    <td>{ witness.lastName }</td>
                </tr>
            );
        });
    }

    renderAddedWitnessesTable(witnesses) {
        return (
            <table>
                <tr>
                    <th> Eesnimi </th>
                    <th> Perekonnanimi </th>
                </tr>
                { this.renderAddedWitnesses(witnesses) }
            </table>
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
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                    <Modal.Body>
                            <AddPersonFields/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Sulge</Button>
                        <Button type="submit" bsStyle="primary">Lisa tunnistaja</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

    renderSectionHeader() {
        return (
            <h3 onClick={() => this.setState({sectionShown: !this.state.sectionShown})}>
                TUNNISTAJA(TE) ANDMED
            </h3>
        );
    }

    render() {
        return (
            <Panel collapsible expanded={this.state.sectionShown} header={this.renderSectionHeader()}>
                <Button onClick={this.showModal}>
                    Lisa tunnistaja
                </Button>
                { this.renderAddWitnessModal() }
            </Panel>
        );
    }
}

const mapStateToProps = state => ({
    fieldValues: state.form.witnessForm && state.form.witnessForm.values ? state.form.witnessForm.values : [],
    witnesses: state.main.witnesses | []
});

AddWitnessForm = connect(mapStateToProps, dispatch => ({dispatch}))(AddWitnessForm);

AddWitnessForm = reduxForm({
    form: 'witnessForm'
})(AddWitnessForm);

export default AddWitnessForm;