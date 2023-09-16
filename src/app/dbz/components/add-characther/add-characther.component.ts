import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-characther.component.html',
  styleUrls: ['./add-characther.component.css'],
})
export class AddCharactherComponent {
  private id: number = 3;

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
    id: uuid(),
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit({ ...this.character });
    this.character = { name: '', power: 0, id: uuid() };
  }
}
