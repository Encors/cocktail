import type { OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';
import { RandomCocktailDialogComponent } from '@app/cocktails/components/random-cocktail-dialog/random-cocktail-dialog.component';

@Component({
  selector: 'app-search-panel',
  imports: [InputTextModule, ButtonModule, FormsModule, RandomCocktailDialogComponent],
  templateUrl: './search-panel.component.html',
  styleUrl: './search-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent implements OnDestroy {
  readonly searchValue = signal('');
  readonly showModal = signal(false);
  private readonly cocktailsService = inject(CocktailsService);
  readonly isLoading = computed(() => this.cocktailsService.isLoading());

  readonly isSearchDisabled = computed(() => {
    return !this.searchValue().trim() || this.isLoading();
  });

  ngOnDestroy(): void {
    this.cocktailsService.clearSearchResults();
  }

  onSearchInput(event: Event): void {
    this.searchValue.set((event.target as HTMLInputElement).value);
  }

  searchCocktails(): void {
    const value = this.searchValue().trim();

    if (!value) {
      return;
    }

    this.cocktailsService.searchByName(value);
  }

  searchRandomCocktail(): void {
    this.cocktailsService.loadRandom().subscribe(() => this.showModal.set(true));
  }
}
