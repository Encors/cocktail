import type { ResolveFn } from '@angular/router';
import type { Cocktail, CocktailResponse } from '@app/cocktails/utils/interfaces';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export const cocktailResolver: ResolveFn<Cocktail | undefined> = route => {
  const httpClient = inject(HttpClient);
  const cocktailId = route.paramMap.get('cocktailId');

  if (!cocktailId) {
    throw new Error(`Неверно задан идентификатор`);
  }

  return httpClient
    .get<CocktailResponse>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', { params: { i: cocktailId } })
    .pipe(map(response => response.drinks.at(0)));
};
