import React, { Component } from 'react';
import { Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Modal, Button, Panel, Table } from 'react-bootstrap';

import AddPersonFields from './add-person-fields';
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
                    <td>{ index }</td>
                    <td>{ criminal.firstName }</td>
                    <td>{ criminal.lastName }</td>
                    <td>
                        <Button onClick={() => this.props.dispatch(removeCriminal(index))}>
                            <span className="glyphicon glyphicon-remove"/>
                        </Button>
                    </td>
                </tr>
            );
        });
    }

    renderAddedCriminalsTable(criminals = []) {
        return (
            <Table striped bordered condensed hover>
                <thead>
                { criminals.length > 0 &&
                <tr>
                    <th>#</th>
                    <th> Eesnimi </th>
                    <th> Perekonnanimi </th>
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
                    <Modal.Title>SÜÜTEO TOIME PANNUD ISIKU</Modal.Title>
                </Modal.Header>

                <Form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
                    <Modal.Body>
                        <AddPersonFields/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Sulge</Button>
                        <Button type="submit" bsStyle="primary">
                            Lisa isik
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

    renderSectionHeader() {
        return (
            <h3 className="text-center"
                onClick={() => this.setState({sectionShown: !this.state.sectionShown})}>
                SÜÜTEO TOIME PANNUD ISIKU(TE) ANDMED
            </h3>
        );
    }

    render() {
        return (
            <Panel collapsible expanded={this.state.sectionShown} header={this.renderSectionHeader()}>
                { this.renderAddedCriminalsTable(this.props.criminals) }
                <Button onClick={this.showModal}>
                    <span className="glyphicon glyphicon-plus"/>
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
    form: 'criminalForm'
})(AddCriminalForm);

export default AddCriminalForm;