import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      name: 'krilin',
      power: 500,
      id: uuid(),
    },
    {
      name: 'Goku',
      power: 10000,
      id: uuid(),
    },
    {
      name: 'Babidi',
      power: 100,
      id: uuid(),
    },
  ];

  addNewCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
    };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(characterId: string): void {
    const filteredCharacters = this.characters.filter(
      (character) => character.id !== characterId
    );
    this.characters = filteredCharacters;
  }
}
