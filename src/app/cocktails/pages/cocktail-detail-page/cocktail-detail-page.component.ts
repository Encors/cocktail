import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { Cocktail } from '@app/cocktails/utils/interfaces';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-cocktail-detail-page',
  imports: [Card],
  templateUrl: './cocktail-detail-page.component.html',
  styleUrl: './cocktail-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CocktailDetailPageComponent {
  readonly cocktail = input.required<Cocktail>();

  readonly ingredients = computed(() => {
    const cocktail = this.cocktail();

    return Object.keys(cocktail)
      .filter(key => key.startsWith('strIngredient'))
      .map(key => cocktail[key as keyof typeof cocktail])
      .filter(Boolean);
  });
}
