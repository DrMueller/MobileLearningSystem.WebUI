import { Injectable } from '@angular/core';

import { SaveModelCallback } from '../types';

@Injectable()
export class ModelMediationService {
  private _callbacks: SaveModelCallback[] = [];

  constructor() { }

  public registerCallback<T>(callback: SaveModelCallback):  void {
    this._callbacks.push(callback);
  }
}
