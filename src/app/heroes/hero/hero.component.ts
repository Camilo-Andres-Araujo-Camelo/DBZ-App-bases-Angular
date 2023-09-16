import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public realName: string = 'Tony Stark';
  public name: string = 'Iron man';
  public age: number = 50;
  public power: string = 'volar y tirar misíles';

  //getters
  get capitalizedName(): string {
    // este "getter" lo toma como una propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    // este "getter" es un método
    return `Puede ${this.power}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
    this.realName = 'Peter Parker';
  }

  changePower(): void {
    this.power = 'Lanzar telaraña';
  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    (this.name = 'Iron man'),
      (this.age = 50),
      (this.power = 'volar y tirar misíles');
  }
}
