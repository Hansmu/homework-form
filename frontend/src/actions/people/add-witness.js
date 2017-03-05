import { ADD_WITNESS, REMOVE_WITNESS } from '../types';

export const addWitness = (witness) => {
    return {
        type: ADD_WITNESS,
        payload: witness
    };
};

export const removeWitness = (payload) => {
    return {
      type: REMOVE_WITNESS,
        payload
    };
};
