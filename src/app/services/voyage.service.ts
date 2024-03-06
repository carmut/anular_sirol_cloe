import { Injectable } from '@angular/core';
import { Voyage } from '../models/voyage';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { VoyageForm } from '../models/voyage-form';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  Url = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Voyage[]>{
    return this.httpClient.get<Voyage[]>(this.Url+"voyages").pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  add(voyage: VoyageForm): Observable<Voyage>{
    return this.httpClient.post<Voyage>(this.Url+'voyages', voyage).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  delete(id: any){
    return this.httpClient.delete<Voyage>(this.Url+'voyages/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new ErrorEvent(error.error["hydra:description"]));
  }
}



