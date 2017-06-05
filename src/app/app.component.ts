import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { trigger, style, transition, state, animate, keyframes } from '@angular/animations';
import { MdSidenav } from '@angular/material';

import { ToastConfigService } from 'app/common/core-services/toast/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sidebarArrowAnimation',
      [
        state('1', style(
          {
            transform: 'rotate(0deg)'
          })),
        state('0', style(
          {
            transform: 'rotate(180deg)'
          })),
        transition('* => *', animate('400ms ease-out'))
      ]),
  ]
})
export class AppComponent {
  @ViewChild('sidenav') public sidenav: MdSidenav;

  public get isSidebarOpen(): boolean {
    return this.sidenav._isOpened;
  }

  constructor(
    vcr: ViewContainerRef,
    toastConfigService: ToastConfigService) {
    toastConfigService.setContainer(vcr);
  }

  public openNavigationClicked(): void {
    this.sidenav.open();
  }

  public navigationClicked(): void {
    this.sidenav.close();
  }
}
