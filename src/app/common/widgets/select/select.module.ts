import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SelectComponent } from './components';

@NgModule({
  exports: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  declarations: [
    SelectComponent
  ]
})
export class SelectModule { }
