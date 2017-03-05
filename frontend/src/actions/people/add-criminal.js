import { ADD_CRIMINAL, REMOVE_CRIMINAL } from '../types';

export const addCriminal = (criminal) => {
    return {
        type: ADD_CRIMINAL,
        payload: criminal
    };
};

export const removeCriminal = (payload) => {
    return {
        type: REMOVE_CRIMINAL,
        payload
    };
};
