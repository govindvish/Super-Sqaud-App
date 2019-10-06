import characterData from '../data/characters.json';

export function createCharacter(id) {
    let character = characterData.find(char => char.id === id);
    return character;
}