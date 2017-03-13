import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Checkbox, Glyphicon, OverlayTrigger, Popover, Panel } from 'react-bootstrap';

import CheckboxField from './checkbox-field';

class AdditionalData  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionShown: false
        };

        this.renderSectionHeader = this.renderSectionHeader.bind(this);
    }

    renderPopover() {
        return (
            <Popover id="agreement-info" style={{maxWidth: '500px'}}>
                Kokkuleppemenetlus on menetluse liik, mille käigus nõustuvad süüdistatav ja tema kaitsja süüdistuse sisu ja kuriteo kvalifikatsiooni,
                kuriteoga tekitatud kahju laadi ja suurusega ning jõuavad kokkuleppele prokuröri poolt kohtus nõutava karistuse liigis ja määras
            </Popover>
        );
    }

    renderAgreementHeader() {
        return (
            <OverlayTrigger trigger={['hover', 'focus']}
                            placement="right"
                            overlay={this.renderPopover()}>
                <label>
                    Olen nõus kokkuleppemenetlusega
                    <Glyphicon style={{color: '#428bca'}} glyph="exclamation-sign"/>
                </label>
            </OverlayTrigger>
        );
    }

    renderEToimikHeader() {
        return (
            <label>
                Soovin teavet E-Toimiku kaudu <a href="https://www.e-toimik.ee/" target="_blank"><Glyphicon glyph="exclamation-sign"/></a>
            </label>
        );
    }

    renderSectionHeader() {
        const glyph = this.state.sectionShown ? "chevron-up" : "chevron-down";

        return (
            <h3 className="text-center"
                onClick={() => this.setState({sectionShown: !this.state.sectionShown})}>
                <Glyphicon glyph={glyph} style={{marginRight: '10px'}}/>
                TÄIENDAVAD ANDMED
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
                <CheckboxField name="isAcceptingAgreement"
                               label={this.renderAgreementHeader()}/>
                <CheckboxField name="isForwardingAllowed"
                               label={<label>Olen nõus, et menetlusega seotud dokumendid edastatakse minu poolt antud e-posti aadressile</label>}/>
                <CheckboxField name="isThroughEFolder"
                               label={ this.renderEToimikHeader() }/>
            </Panel>
        );
    }
}

export default AdditionalData;