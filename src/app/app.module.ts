import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

// third-parties
import { AgGridModule } from 'ag-grid-angular/main';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// core-services
import { CoreServicesModule } from './common/core-services';

// widgets
import { RxFormsModule } from './common/widgets/rx-forms';

// areas
import * as session from './areas/session';
import * as fact from './areas/fact';
import * as login from './areas/login';

// app
import * as app from '.';

@NgModule({
  entryComponents: [
    fact.FactSelectComponent
  ],
  declarations: [
    app.AppComponent,
    session.SessionsOverviewComponent,
    session.SessionEditComponent,
    fact.FactsOverviewComponent,
    fact.FactEditComponent,
    login.LoginComponent,
    fact.FactSelectComponent,
    session.SessionEditFactsComponent,
    session.SessionEditDataComponent,
    session.SessionLearningRunComponent,
    session.SessionTestRunComponent,
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
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MaterialModule
  ],
  providers: [
    session.SessionsOverviewService,
    session.SessionEditService,
    fact.FactEditService,
    fact.FactsOverviewService,
    fact.FactSelectService,
    fact.FactSelectMediatorService
  ],
  bootstrap: [app.AppComponent]
})
export class AppModule { }
