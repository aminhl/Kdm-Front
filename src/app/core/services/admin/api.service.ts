import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {
  environment as env,
  environment,
} from '../../../../environments/environment';
import { map, Observable, Subject, tap } from 'rxjs';
import { IArchivePercentType } from '../../models/ArchivePercentType';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  private _refreshNeeded = new Subject<void>();

  get refreshNeeded() {
    return this._refreshNeeded;
  }
  get(target: string) {
    return this.httpClient.get(env.apiRoot + target);
  }

  add(target: string, requestBody: Object) {
    return this.httpClient.post(env.apiRoot + target, requestBody).pipe(
      tap(() => {
        this._refreshNeeded.next();
      })
    );
  }

  delete(target: string, elementId: number) {
    return this.httpClient.delete(env.apiRoot + target + '/' + elementId).pipe(
      tap(() => {
        this._refreshNeeded.next();
      })
    );
  }

  update(target: string, elementId: number, requestBody: Object) {
    return this.httpClient
      .put(env.apiRoot + target + '/' + elementId, requestBody)
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
      );
  }

  // ContratArchiveStats
  getStats(): Observable<Array<IArchivePercentType>> {
    return this.httpClient
      .get<Array<IArchivePercentType>>(
        'http://localhost:8080/vData/percentArchiveStatus'
      )
      .pipe(map((d: Array<IArchivePercentType>) => d));
  }

  login(username, password): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.httpClient.post(
      'http://localhost:8080/login',
      body.toString(),
      {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      }
    );
  }

  //pdf
  exportPDF(path: string): Observable<Blob> {
    return this.httpClient.get(environment.apiRoot + path, {
      responseType: 'blob',
    });
  }


  assignchefdepartement(target : string, elementId1: string, elementId2: number)
  {
    return this.httpClient.put(env.apiRoot +target +'/'+elementId1+ '/' +elementId2,null);
  }


  
  register(target: string, requestBody: Object) {
    return this.httpClient.post(env.apiRoot + target, requestBody);
  }

  // get anything by id
  getbyID(target: string, elementId: number) {
    return this.httpClient.get(env.apiRoot + target + '/' + elementId);
  }
  getbyName(target: string, elementId: string) {
    return this.httpClient.get(env.apiRoot + target + '/' + elementId);
  }
  // assignEtudiantToDepartement
  assignEtudiantToDepartement(
    target: string,
    elementId1: number,
    elementId2: number
  ) {
    return this.httpClient
      .put(env.apiRoot + target + '/' + elementId1 + '/' + elementId2, null)
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
      );
  }

  addAndAssignEtudiantToEquipeAndContract(
    target: string,
    elementId1: number,
    elementId2: number,
    requestBody: Object
  ) {
    return this.httpClient
      .put(
        env.apiRoot + target + '/' + elementId1 + '/' + elementId2,
        requestBody
      )
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
      );
  }
  findContratBySpecialiteAndDateDebutContratAndDateFinContrat(
    target: string,
    elementId1: string,
    elementId2: string,
    elementId3: string,
    elementId4: string
  ) {
    return this.httpClient
      .get(
        env.apiRoot +
          target +
          '/' +
          elementId1 +
          '/' +
          elementId2 +
          '/' +
          elementId3 +
          '/' +
          elementId4
      )
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
      );
  }

  assignProfessorToDepartement(
    target: string,
    elementId1: number,
    elementId2: number
  ) {
    return this.httpClient
      .put(env.apiRoot + target + '/' + elementId1 + '/' + elementId2, null)
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
      );
  }

  assignEquipeToDetailEquipe(
    target: string,
    element1: string,
    element2: string
  ) {
    return this.httpClient.put(
      env.apiRoot + target + '/' + element1 + '/' + element2,
      null
    ).pipe(
      tap(() => {
        this._refreshNeeded.next();
      })
    );
  }
}
