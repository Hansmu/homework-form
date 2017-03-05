import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Checkbox, Glyphicon, OverlayTrigger, Popover } from 'react-bootstrap';

class AdditionalData  extends Component {
    constructor(props) {
        super(props);
    }

    renderCheckBox({ input, label, type, meta: { touched, error, warning } }) {
        return (
            <Checkbox {...input}>
                { label }
            </Checkbox>
        );
    }

    renderPopover() {
        return (
            <Popover id="blablabla">
                Extra info
            </Popover>
        );
    }

    renderAgreementHeader() {
        return (
            <label>
                <Glyphicon glyph="exclamation-sign"/>
            </label>
        );
    }

    renderEToimikHeader() {
        return (
            <label>
                Soovin teavet E-Toimiku kaudu <a href="https://www.e-toimik.ee/" target="_blank"><Glyphicon glyph="exclamation-sign"/></a>
            </label>
        );
    }

    render() {
        return (
            <div>
                <Field name="isAcceptingAgreement"
                       id="isAcceptingAgreement"
                       label={this.renderAgreementHeader()}
                       component={this.renderCheckBox}
                       type="checkbox"/>
                <Field name="isForwardingAllowed"
                       id="isForwardingAllowed"
                       label="Olen nõus, et menetlusega seotud dokumendid edastatakse minu poolt antud e-posti aadressile"
                       component={this.renderCheckBox}
                       type="checkbox"/>
                <Field name="isThroughEFolder"
                       id="isThroughEFolder"
                       label={ this.renderEToimikHeader() }
                       component={this.renderCheckBox}
                       type="checkbox"/>
            </div>
        );
    }
}

export default AdditionalData;