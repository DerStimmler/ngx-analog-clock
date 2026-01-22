import { Route } from '@angular/router';





export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/default-layout/default-layout').then(m => m.DefaultLayout),
    children: [
      { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
      { path: 'playground', loadComponent: () => import('./pages/playground/playground').then(m => m.Playground) },
      { path: 'showcase', loadComponent: () => import('./pages/showcase/showcase').then(m => m.Showcase) },
    ],
  },
  { path: '**', redirectTo: '' },
];
