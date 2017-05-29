import { Injectable } from '@angular/core';

import { HttpService } from '../../../common/core-services/http';

import { Fact } from '../../../models';

@Injectable()
export class FactEditService {
  constructor(private httpService: HttpService) { }

  public deleteFact(id: string): Promise<void> {
    const url = `Fact\\${id}`;
    return this.httpService.delete(url);
  }

  public saveFact(fact: Fact): Promise<Fact> {
    const url = 'Fact';
    return this.httpService.put(url, fact, Fact);
  }

  public createNewFact(): Fact {
    const s = new Fact();
    s.name = 'New Fact';
    return s;
  }

  public getFact(id: string): Promise<Fact> {
    const url = `Fact\\${id}`;
    return this.httpService.get(url, Fact);
  }
}
