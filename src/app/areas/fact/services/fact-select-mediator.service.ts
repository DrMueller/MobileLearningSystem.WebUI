import { Injectable } from '@angular/core';

import { FactSelectEntry } from '../../../models';

@Injectable()
export class FactSelectMediatorService {
  private _selectedFactEntries: FactSelectEntry[];

  constructor() { }

  public initialize(): void {
    this._selectedFactEntries = [];
  }

  public addSelection(entry: FactSelectEntry): boolean {
    if (this._selectedFactEntries.indexOf(entry) === -1) {
      this._selectedFactEntries.push(entry);
      return true;
    }

    return false;
  }

  public getSelectedEntries(): FactSelectEntry[] {
    return this._selectedFactEntries;
  }
}
