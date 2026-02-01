import type { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { cocktailResolver } from '@app/cocktails/services/cocktail.resolver';
import type { Cocktail } from '@app/cocktails/utils/interfaces';

type ActivatedRouteSnapshotWith<TResolveData extends object> = Omit<ActivatedRouteSnapshot, 'data'> & {
  data: TResolveData;
};

export interface CocktailRouteMetadata {
  cocktail?: Cocktail;
}

const cocktailsRoutes: Routes = [
  {
    path: 'cocktails',
    title: 'Список коктейлей',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/cocktails/pages/cocktails-page/cocktails-page.component'),
      },
      {
        path: ':cocktailId',
        runGuardsAndResolvers: 'always',
        resolve: {
          cocktail: cocktailResolver,
        },
        children: [
          {
            path: '',
            title: (route: ActivatedRouteSnapshotWith<CocktailRouteMetadata>) =>
              route.data.cocktail?.strDrink ?? 'Карточка коктейля',
            loadComponent: () => import('@app/cocktails/pages/cocktail-detail-page/cocktail-detail-page.component'),
          },
        ],
      },
    ],
  },
];

export default cocktailsRoutes;
