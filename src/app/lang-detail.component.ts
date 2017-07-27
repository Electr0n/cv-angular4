import { Component, Input } from '@angular/core';
import { Lang } from './lang';

@Component({
  selector: 'lang-detail',
  templateUrl: './lang-detail.component.html',
  styleUrls: ['./lang-detail.component.css']
})

export class LangDetailComponent {
	@Input() lang: Lang;
}