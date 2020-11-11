import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IUserProfile } from './userProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userUrl = 'https://localhost:44374/api/UserManager/GetUserProfiles';
  //private userUrl = 'api/users/users.json';
constructor(private http: HttpClient) { }
getUserProfiles(): Observable<IUserProfile[]> {
  return this.http.get<IUserProfile[]>(this.userUrl)
   .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
  );
  //return this.http.get<IUser[]>(this.userUrl);
}

getUserProfile(id: number): Observable<IUserProfile | undefined> {
  return this.getUserProfiles()
    .pipe(
      map((userProfiles: IUserProfile[]) => userProfiles.find(u => u.user.id === id)),
      tap(userProfiles => console.log('All: ' + JSON.stringify(userProfiles))),
    );
}

private handleError(err: HttpErrorResponse) {
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
  } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}
}
