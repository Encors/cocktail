import type { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      }),
      withComponentInputBinding(),
    ),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
