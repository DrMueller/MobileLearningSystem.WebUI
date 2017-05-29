import { Injectable } from '@angular/core';

import { HttpService } from '../../../common/core-services/http';

import { Session } from '../../../models';

@Injectable()
export class SessionEditService {
  constructor(private httpService: HttpService) { }

  public deleteSession(id: string): Promise<void> {
    const url = `Session\\${id}`;
    return this.httpService.delete(url);
  }

  public saveSession(session: Session): Promise<Session> {
    const url = 'Session';
    return this.httpService.put(url, session, Session);
  }

  public createNewSession(): Session {
    const s = new Session();
    s.name = 'New Session';
    return s;
  }

  public getSession(id: string): Promise<Session> {
    const url = `Session\\${id}`;
    return this.httpService.get(url, Session);
  }
}
