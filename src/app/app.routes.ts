import type { Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CocktailsService } from '@app/cocktails/services/cocktails.service';

export const routes: Routes = [
  {
    path: '',
    title: 'Стартовая страница',
    providers: [MessageService, CocktailsService],
    loadChildren: () => import('@app/cocktails/cocktails.routes'),
  },
  {
    path: '**',
    title: 'Страница не найдена',
    loadComponent: () => import('@app/components/not-found-page/not-found-page.component'),
  },
];
