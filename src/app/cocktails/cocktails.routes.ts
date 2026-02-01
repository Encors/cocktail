import type { Routes } from '@angular/router';
import { cocktailResolver } from '@app/cocktails/services/cocktail.resolver';
import type { Cocktail } from '@app/cocktails/utils/interfaces';

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
            title: ({ parent }) => (parent?.data as { cocktail: Cocktail }).cocktail?.strDrink ?? 'Карточка коктейля',
            loadComponent: () => import('@app/cocktails/pages/cocktail-detail-page/cocktail-detail-page.component'),
          },
        ],
      },
    ],
  },
];

export default cocktailsRoutes;
