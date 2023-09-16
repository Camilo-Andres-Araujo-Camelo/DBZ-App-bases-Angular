import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Contador: {{ counter }}</h2>
    <button (click)="increaseBy(2)">+2</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(2)">-2</button>
  `,
})
export class counterComponent {
  constructor() {}
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
