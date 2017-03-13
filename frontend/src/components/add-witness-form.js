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
                    <td className="text-center">{ index + 1 }</td>
                    <td className="text-center">{ witness.firstName }</td>
                    <td className="text-center">{ witness.lastName }</td>
                    <td className="text-center">{ witness.personCitizenship }</td>
                    <td className="pull-right">
                        <Button bsStyle="danger" onClick={() => this.props.dispatch(removeWitness(index))}>
                            <Glyphicon glyph="remove"/>
                        </Button>
                    </td>
                </tr>
            );
        });
    }

    renderAddedWitnessesTable(witnesses = []) {
        return (
            <Table striped condensed hover>
                <thead>
                { witnesses.length > 0 &&
                    <tr>
                        <th className="text-center">#</th>
                        <th className="text-center"> Eesnimi </th>
                        <th className="text-center"> Perekonnanimi </th>
                        <th className="text-center"> Kodakondsus </th>
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

                        <Col xs={12}>
                            <hr/>
                        </Col>

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
                <Button className="pull-right" bsStyle="success" onClick={this.showModal}>
                    <Glyphicon glyph="plus"/>
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
    form: 'witnessForm',
    initialValues: {
        personCitizenship: 'Eesti Vabariik'
    }
})(AddWitnessForm);

export default AddWitnessForm;