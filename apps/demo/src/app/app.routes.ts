import { Route } from '@angular/router';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { Playground } from './pages/playground/playground';
import { Home } from './pages/home/home';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      { path: 'playground', component: Playground },
    ],
  },
  { path: '**', redirectTo: '' },
];
