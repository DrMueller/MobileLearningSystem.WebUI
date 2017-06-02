import { Injectable } from '@angular/core';

import { HttpService } from '../../../common/core-services/http';

import { FactSelectentry } from '../models';

@Injectable()
export class FactSelectService {

  constructor(private httpService: HttpService) { }

  public loadSelectEntries(): Promise<FactSelectentry[]> {
    const url = 'FactSelect';
    return this.httpService.getArray(url, FactSelectentry);
  }
}
