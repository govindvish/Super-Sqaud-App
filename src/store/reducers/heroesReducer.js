import * as types from '../actions/constants/actionTypes';
import { createCharacter } from '../../helpers/createCharacter';

export default function (state = [], action) {
    switch (action.type) {
        case types.ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.payload.id)];
            return heroes;
        case types.REMOVE_CHARACTER:
            let removeHeroes = state.filter(item => item.id !== action.payload.id);
            return removeHeroes;
        default:
            return state;
    }
}