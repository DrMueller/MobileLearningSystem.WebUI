import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

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

  public getFact(id: string): Promise<Fact> {
    const url = `Fact\\${id}`;
    return this.httpService.get(url, Fact);
  }

  // public getFacts(ids: string[]): Promise<Fact[]> {
  //   if (ids.length === 0) {
  //     return Promise.resolve(new Array<Fact>());
  //   }

  //   const url = `Fact`;
  //   const params = new URLSearchParams();

  //   ids.forEach(id => {
  //     params.append('factIds', id);
  //   });

  //   debugger;
  //   return this.httpService.getArray(url, Fact, params);
  // }
}
