import { Component, ViewContainerRef } from '@angular/core';

import { ToastConfigService } from 'app/common/core-services/toast/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    vcr: ViewContainerRef,
    toastConfigService: ToastConfigService) {
    toastConfigService.setContainer(vcr);
  }
}
