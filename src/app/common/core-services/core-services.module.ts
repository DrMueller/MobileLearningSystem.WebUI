import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { EnvironmentService } from './environment';
import { ToastService, ToastConfigService } from './toast/services';
import { HttpService } from './http';

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
    HttpService
  ]
})
export class CoreServicesModule { }
