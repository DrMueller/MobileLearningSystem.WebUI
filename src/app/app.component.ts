import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { ToastConfigService } from 'app/common/core-services/toast/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') public sidenav: MdSidenav;

  constructor(
    vcr: ViewContainerRef,
    toastConfigService: ToastConfigService) {
    toastConfigService.setContainer(vcr);
  }

  public navigationClicked(): void {
    this.sidenav.close();
  }
}
