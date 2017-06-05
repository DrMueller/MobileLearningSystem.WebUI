import { Injectable } from '@angular/core';

import { HttpService } from '../../../common/core-services/http';

import { FactSelectEntry } from '../../../models';

@Injectable()
export class FactSelectService {

  constructor(private httpService: HttpService) { }

  public getFactSelectEntries(): Promise<FactSelectEntry[]> {
    const url = 'FactSelect';
    return this.httpService.getArray(url, FactSelectEntry);
  }
}
