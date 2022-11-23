import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get(target: string) {
    return this.httpClient.get(env.apiRoot + target);
  }

  add(target: string, contratBody: Object) {
    return this.httpClient.post(env.apiRoot + target, contratBody);
  }

  delete(target: string, elementId: number) {
    return this.httpClient.delete(env.apiRoot + target + '/' + elementId);
  }

}
