import { Injectable, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ToastType } from '../models';

@Injectable()
export class ToastService {

  // https://www.npmjs.com/package/ng2-toastr
  constructor(private toastsManager: ToastsManager) {
  }

  public setContainer(vcr: ViewContainerRef): void {
    this.toastsManager.setRootViewContainerRef(vcr);
  }

  public showInfoToast(message: string, title?: string): void {
    this.toastsManager.info(message, title);
  }

  public showSuccessToast(message: string, title?: string): void {
    this.toastsManager.success(message, title);
  }

  public showErrorToast(message: string, title?: string): void {
    this.toastsManager.error(message, title);
  }
}
