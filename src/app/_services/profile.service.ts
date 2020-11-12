import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IUserProfile } from './userProfile';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private userUrl = 'https://localhost:44374/api/UserManager/GetUserProfiles';
private updateUrl = 'https://localhost:44374/api/UserManager/SaveUserDetails';
//private userUrl = 'api/users/users.json';
constructor(private http: HttpClient,
  private authService: AuthService) { }
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

updateUserProfile(userProfile: IUserProfile) {
  return this.http.post(this.updateUrl, userProfile.user).pipe(
    tap(data => console.log('Profile: ' + JSON.stringify(data))),
    catchError(this.handleError)
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
