import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cocktails-page',
  imports: [],
  templateUrl: './cocktails-page.component.html',
  styleUrl: './cocktails-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CocktailsPageComponent {}
