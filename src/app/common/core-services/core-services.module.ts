import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { EnvironmentService } from './environment';
import { ToastService, ToastConfigService } from './toast/services';
import { HttpService } from './http';
import { EventMediatorService } from './event-mediation';

@NgModule({
  imports: [
    CommonModule,
    ToastModule.forRoot(),
  ],
  exports: [
  ],
  declarations: [],
  providers: [
    EnvironmentService,
    ToastService,
    ToastConfigService,
    HttpService,
    EventMediatorService
  ]
})
export class CoreServicesModule { }
