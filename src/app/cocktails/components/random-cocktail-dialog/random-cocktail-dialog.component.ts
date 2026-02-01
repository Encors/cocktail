import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, model, signal } from '@angular/core';
import CocktailDetailPageComponent from '@app/cocktails/pages/cocktail-detail-page/cocktail-detail-page.component';
import { DialogModule } from 'primeng/dialog';
import type { Cocktail } from '@app/cocktails/utils/interfaces';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-random-cocktail-dialog',
  imports: [DialogModule, CocktailDetailPageComponent],
  templateUrl: './random-cocktail-dialog.component.html',
  styleUrl: './random-cocktail-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomCocktailDialogComponent implements OnInit {
  readonly visible = model(false);
  readonly cocktail = signal<Cocktail | null>(null);
  readonly dialogHeader = computed(() => this.cocktail()?.strDrink ?? 'Карточка коктейля');

  protected cocktailsService = inject(CocktailsService);
  protected destroyRef = inject(DestroyRef);
  protected router = inject(Router);

  ngOnInit(): void {
    this.cocktailsService.randomDrink$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(res => res && this.cocktail.set(res)),
      )
      .subscribe();
  }
}
