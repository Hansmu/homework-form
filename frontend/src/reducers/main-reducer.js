import { ADD_WITNESS, REMOVE_WITNESS, ADD_CRIMINAL, REMOVE_CRIMINAL } from '../actions/types';

const INITIAL_STATE = { witnesses: [], criminals: [] };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_WITNESS:
            const witnesses = state.witnesses.slice();
            witnesses.push(action.payload);
            return { ...state, witnesses };
        case REMOVE_WITNESS:
            return {...state, witnesses: state.witnesses.filter((witness, index) => index !== action.payload) };
        case ADD_CRIMINAL:
            const criminals = state.criminals.slice();
            criminals.push(action.payload);
            return { ...state, criminals };
        case REMOVE_CRIMINAL:
            return {...state, criminals: state.criminals.filter((witness, index) => index !== action.payload) };
        default:
            return state;
    }
}
