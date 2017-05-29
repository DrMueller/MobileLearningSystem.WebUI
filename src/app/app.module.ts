import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// third-parties
import { AgGridModule } from 'ag-grid-angular/main';

// core-services
import { CoreServicesModule } from './common/core-services';

// widgets
import { RxFormsModule } from './common/widgets/rx-forms';

// areas
import * as session from './areas/session';
import * as fact from './areas/fact';
import * as appNav from './areas/navigation';
import * as login from './areas/login';

// app
import * as app from '.';

@NgModule({
  declarations: [
    app.AppComponent,
    session.SessionsOverviewComponent,
    session.SessionEditComponent,
    fact.FactsOverviewComponent,
    fact.FactEditComponent,
    appNav.AppNavigationListComponent,
    login.LoginComponent
  ],
  imports: [
    app.AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([
      session.SessionsOverviewComponent
    ]),
    RxFormsModule.forRoot(),
    CoreServicesModule,
    BrowserAnimationsModule
  ],
  providers: [
    session.SessionsOverviewService,
    session.SessionEditService,
    fact.FactEditService,
    fact.FactsOverviewService
  ],
  bootstrap: [app.AppComponent]
})
export class AppModule { }
