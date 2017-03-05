import { ADD_WITNESS, REMOVE_WITNESS } from '../actions/types';

const INITIAL_STATE = { examples: [], helloWorldMessage: '' };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_WITNESS:
            const witnesses = state.witnesses.push(action.payload);
            return { ...state, witnesses };
        case REMOVE_WITNESS:
            return {...state };
        default:
            return state;
    }
}
