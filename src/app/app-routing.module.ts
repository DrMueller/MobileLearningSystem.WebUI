import { NgModule } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';
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
    path: 'sessions/:id/learningrun',
    component: session.SessionLearningRunComponent
  },
  {
    path: 'sessions/:id/testrun',
    component: session.SessionTestRunComponent
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
    path: 'facts/select',
    component: fact.FactSelectComponent
  },
  {
    path: 'facts/:id',
    component: fact.FactEditComponent
  },
  {
    path: 'facts',
    component: fact.FactsOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}
