import { Component } from '@angular/core';

export class Lang{
  id: number;
  name: string;
  lvl: number;
}

const LANGS: Lang[] = [
  { id: 1, name: 'Ruby', lvl: 6 },
  { id: 2, name: 'Java', lvl: 5 },
  { id: 3, name: 'HTML', lvl: 8},
  { id: 4, name: 'CSS', lvl: 8},
  { id: 5, name: 'JavaScript', lvl: 4},
  { id: 6, name: 'Angular 4', lvl: 4},
  { id: 7, name: 'English', lvl: 6}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CV';
  name = 'Skorodumov Eugene';
  langs = LANGS;
  selectedLang: Lang;

  onSelect(lang: Lang): void {
    this.selectedLang = lang;
  }
}

