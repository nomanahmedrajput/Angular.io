import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<shop-item></shop-item>`
})
export class AppComponent {
  title = 'Heyy! Welcome heros world';
  hero: Hero = {
    id: 1,
    name: 'QAID E AZAM'
  }
}
