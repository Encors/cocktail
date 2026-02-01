import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';
import { tap } from 'rxjs';
import { RandomCocktailDialogComponent } from '@app/cocktails/components/random-cocktail-dialog/random-cocktail-dialog.component';

@Component({
  selector: 'app-search-panel',
  imports: [InputTextModule, ButtonModule, FormsModule, RandomCocktailDialogComponent],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent {
  readonly searchValue = signal<string>('');
  readonly showModal = signal<boolean>(false);

  protected cocktailsService = inject(CocktailsService);
  protected destroyRef = inject(DestroyRef);

  searchCocktails(): void {
    const searchValue = this.searchValue();

    if (searchValue) {
      this.cocktailsService.fetchCocktailsByName(searchValue).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }
  }

  searchRandomCocktail(): void {
    this.cocktailsService
      .getRandomCocktail()
      .pipe(
        tap(() => this.showModal.set(true)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
