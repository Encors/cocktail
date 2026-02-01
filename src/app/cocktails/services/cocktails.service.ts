import { inject, Injectable, signal } from '@angular/core';
import type { Observable } from 'rxjs';
import { catchError, finalize, map, Subject, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import type { Cocktail, CocktailResponse } from '@app/cocktails/utils/interfaces';
import { MessageService } from 'primeng/api';

@Injectable()
export class CocktailsService {
  readonly isLoading = signal(false);

  lastSearchValue = '';
  foundDrinks$ = new Subject<Array<Cocktail>>();
  randomDrink$ = new Subject<Cocktail | undefined>();

  protected httpClient = inject(HttpClient);
  protected notify = inject(MessageService);

  fetchCocktailsByName(name: string): Observable<Array<Cocktail>> {
    if (this.lastSearchValue === name) {
      return this.foundDrinks$;
    }

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
    const params = {
      s: name,
    };

    this.toggleLoading(true);

    return this.httpClient.get<CocktailResponse>(url, { params }).pipe(
      map((res: CocktailResponse) => res.drinks || []),
      tap(drinks => {
        this.foundDrinks$.next(drinks);
        this.lastSearchValue = name;
      }),
      catchError(this.handleError.bind(this)),
      finalize(() => this.toggleLoading(false)),
    );
  }

  getRandomCocktail(): Observable<Cocktail | undefined> {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    this.toggleLoading(true);

    return this.httpClient.get<CocktailResponse>(url).pipe(
      map((res: CocktailResponse) => (res.drinks || []).at(0)),
      tap(drink => this.randomDrink$.next(drink)),
      catchError(this.handleError.bind(this)),
      finalize(() => this.toggleLoading(false)),
    );
  }

  handleError(error: any): Observable<any> {
    const errorMsg = error instanceof HttpErrorResponse ? error.message : 'Не удалось получить случайный коктейль.';

    this.notify.add({ severity: 'error', detail: errorMsg });
    return throwError(() => error);
  }

  toggleLoading(value: boolean): void {
    this.isLoading.set(value);
  }
}
