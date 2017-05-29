import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';

import * as session from './areas/session';
import * as fact from './areas/fact';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sessions',
    pathMatch: 'full'
  },
  {
    path: 'sessions/:id',
    component: session.SessionEditComponent
  },
  {
    path: 'sessions',
    component: session.SessionsOverviewComponent
  },
  {
    path: 'facts/:id',
    component: fact.FactEditComponent
  },
  {
    path: 'facts',
    component: fact.FactsOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}
