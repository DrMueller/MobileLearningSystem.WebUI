import { Injectable } from '@angular/core';

import { HttpService } from '../../../common/core-services/http';

import { Session, Fact } from '../../../models';

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

  public getSession(id: string): Promise<Session> {
    const url = `Session\\${id}`;
    return this.httpService.get(url, Session);
  }

  public getFactsBySessionId(sessionId: string): Promise<Fact[]> {
    const url = `Session\\${sessionId}\\facts`;
    return this.httpService.getArray(url, Fact);
  }
}
