import { inject, Injectable, signal } from '@angular/core';
import type { Observable } from 'rxjs';
import { catchError, finalize, map, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import type { Cocktail, CocktailResponse } from '@app/cocktails/utils/interfaces';
import { MessageService } from 'primeng/api';

@Injectable()
export class CocktailsService {
  readonly isLoading = signal(false);
  readonly foundDrinks = signal<Array<Cocktail>>([]);
  readonly randomDrink = signal<Cocktail | undefined>(undefined);
  private readonly httpClient = inject(HttpClient);
  private readonly notify = inject(MessageService);

  searchByName(name: string): void {
    if (!name.trim()) {
      return;
    }

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

    this.isLoading.set(true);

    this.httpClient
      .get<CocktailResponse>(url, { params: { s: name } })
      .pipe(
        map(res => res.drinks || []),
        finalize(() => this.isLoading.set(false)),
        catchError(err => this.handleError(err)),
      )
      .subscribe(drinks => this.foundDrinks.set(drinks));
  }

  loadRandom(): Observable<Cocktail | undefined> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    this.isLoading.set(true);

    return this.httpClient.get<CocktailResponse>(url).pipe(
      map(res => (res.drinks || []).at(0)),
      tap(drink => this.randomDrink.set(drink)),
      finalize(() => this.isLoading.set(false)),
      catchError(err => this.handleError(err)),
    );
  }

  clearSearchResults(): void {
    this.foundDrinks.set([]);
    this.randomDrink.set(undefined);
  }

  private handleError(error: unknown): Observable<never> {
    const errorMsg = error instanceof HttpErrorResponse ? error.message : 'Не удалось получить коктейль.';

    this.notify.add({ severity: 'error', detail: errorMsg });
    return throwError(() => error);
  }
}
