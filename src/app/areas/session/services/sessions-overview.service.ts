import { Injectable } from '@angular/core';

import { HttpService } from '../../../common/core-services/http';

import { SessionOverviewEntry } from '../models';

@Injectable()
export class SessionsOverviewService {

  constructor(private httpService: HttpService) { }

  public loadOverview(): Promise<SessionOverviewEntry[]> {
    const url = 'SessionsOverview';
    return this.httpService.getArray(url, SessionOverviewEntry);
  }
}
