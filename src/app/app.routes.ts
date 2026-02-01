import type { Routes } from '@angular/router';
import { MessageService } from 'primeng/api';

export const routes: Routes = [
  {
    path: '',
    title: 'Стартовая страница',
    providers: [MessageService],
    loadChildren: () => import('@app/cocktails/cocktails.routes'),
  },
  {
    path: '**',
    title: 'Страница не найдена',
    loadComponent: () => import('@app/components/not-found-page/not-found-page.component'),
  },
];
