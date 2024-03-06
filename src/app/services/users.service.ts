import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Url = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  loginuser(user: User): Observable<{ token: string }>{
    return this.httpClient.post<{token: string}>(this.Url+"auth", user).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new ErrorEvent(error.error.message));
  }

}
