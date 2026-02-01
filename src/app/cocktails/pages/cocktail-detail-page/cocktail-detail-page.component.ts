import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cocktail-detail-page',
  imports: [],
  templateUrl: './cocktail-detail-page.component.html',
  styleUrl: './cocktail-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CocktailDetailPageComponent {}
