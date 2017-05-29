import { Injectable } from '@angular/core';

import { HttpService } from '../../../common/core-services/http';
import { FactOverviewEntry } from 'app/areas/fact';

@Injectable()
export class FactsOverviewService {

  constructor(private httpService: HttpService) { }

  public loadOverview(): Promise<FactOverviewEntry[]> {
    const url = 'FactsOverview';
    return this.httpService.getArray(url, FactOverviewEntry);
  }
}
