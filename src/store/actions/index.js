import * as types from './constants/actionTypes';

export const addCharacterById = (id) => ({
    type: types.ADD_CHARACTER,
    payload: {
        id
    }
});

export const removeCharacterById = (id) => ({
    type: types.REMOVE_CHARACTER,
    payload: {
        id
    }
});