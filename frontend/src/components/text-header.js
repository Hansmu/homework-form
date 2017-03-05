import React from 'react';
import { Checkbox, Glyphicon, OverlayTrigger, Popover } from 'react-bootstrap';

const renderPopover = (id, text) => {
    return (
        <Popover id={id} style={{maxWidth: '500px'}}>
            {text}
        </Popover>
    );
};

const renderExtraInfo = (id, text, extraInfo) =>  {
    return (
        <OverlayTrigger trigger="click"
                        placement="right"
                        overlay={renderPopover(id, extraInfo)}>
            <label>
            { text }
            <Glyphicon glyph="exclamation-sign"/>
            </label>
        </OverlayTrigger>
    );
};

const TextHeaders = () => {
    return (
        <div>
            <p>
                {
                    renderExtraInfo('immediate-danger',
                        'Vahetu ohu korral helistada hädaabinumbrile 112.',
                        'Kui kellegi elu või tervis on vahetult ohus, siis helista viivitamatult hädaabinumbrile 112.')
                }
            </p>
            <p>
                {
                    renderExtraInfo('hard-crime',
                        'Raske kuriteo korral pöörduge lähimasse politsejaoskonda.',
                        <span>
                            Ära kasuta seda ankeeti raskest ja/või isikuvastasest kuriteost (vägistamine, tapmine, kehaline väärkohtlemine - löömine, peksmine vm) teatamiseks. Raskest kuriteost teada andmiseks pöördu lähimasse
                                <a href="https://www.politsei.ee/et/teenused/politseile-avalduse-esitamine.dot" target="_blank"> politseijaoskonda.</a>
                        </span>)
                }
            </p>
            <p>
                {
                    renderExtraInfo('e-post-correctness',
                        'Kontrollige e-posti aaddressi korrektsust.',
                        'Tähelepanu! Palun kontrolli, et sisestasid enda e-posti aadressi vormile korrektselt. Kui e-posti aadress on ôige, siis peaksid süüteoteate koopia päeva jooksul sisestatud e-posti aadressile saama, mis tähendab, et avaldus on politseini jõudnud. Kui seda ei juhtu, siis palun võta ühendust aadressil ppa@politsei.ee.'
                    )
                }
            </p>
            <label>
                Vajadusel tuleb menetleja kutsel tulla politseijaoskonda täiendavate ütluste andmiseks.
            </label>
        </div>
    );
}

export default TextHeaders;