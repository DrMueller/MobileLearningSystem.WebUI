import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable()
export class EnvironmentService {
  public get webServiceBaseUrl(): string {
    return environment.webServiceBaseUrl;
  }
}
