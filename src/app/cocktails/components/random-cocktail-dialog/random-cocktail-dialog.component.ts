import { ChangeDetectionStrategy, Component, computed, inject, model } from '@angular/core';
import CocktailDetailPageComponent from '@app/cocktails/pages/cocktail-detail-page/cocktail-detail-page.component';
import { DialogModule } from 'primeng/dialog';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';

@Component({
  selector: 'app-random-cocktail-dialog',
  imports: [DialogModule, CocktailDetailPageComponent],
  templateUrl: './random-cocktail-dialog.component.html',
  styleUrl: './random-cocktail-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomCocktailDialogComponent {
  readonly visible = model(false);
  private readonly cocktailsService = inject(CocktailsService);
  readonly cocktail = this.cocktailsService.randomDrink;

  readonly dialogHeader = computed(() => this.cocktail()?.strDrink ?? 'Карточка коктейля');
}
