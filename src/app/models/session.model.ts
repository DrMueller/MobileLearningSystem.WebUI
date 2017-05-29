import { SessionFact } from '.';

export class Session {
  public id: string | undefined = undefined;
  public name: string | undefined = undefined;

  public sessionFacts: SessionFact[];

  constructor() {
    this.sessionFacts = [];
  }
}
