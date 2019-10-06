import * as types from '../actions/constants/actionTypes';
import { createCharacter } from '../../helpers/createCharacter';
import characterData from '../../data/characters.json';
// characters.json is equivalent to initialState.js

export default function (state = characterData, action) {
    switch (action.type) {
        case types.ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.payload.id);
            return characters;
        case types.REMOVE_CHARACTER:
            let removeCharacters = [...state, createCharacter(action.payload.id)];
            return removeCharacters;
        default:
            return state;
    }
}