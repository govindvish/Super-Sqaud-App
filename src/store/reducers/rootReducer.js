import { combineReducers } from 'redux';

import characterReducer from './charactersReducer';
import heroesReducer from './heroesReducer';

const rootReducer = combineReducers({
    character: characterReducer,
    heroes: heroesReducer,
});

export default rootReducer;