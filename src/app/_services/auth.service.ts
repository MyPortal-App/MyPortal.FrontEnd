import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { IUserProfile } from './userProfile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  IsloggedIn: boolean;
  baseUrl = 'https://localhost:44374/api/';
  private currentUserSource = new ReplaySubject<IUserProfile>(1);
  currentUser$ = this.currentUserSource.asObservable();

constructor(private http: HttpClient) { }

login(model: any){
  return this.http.post(this.baseUrl + 'auth/login', model).pipe(
    map((response: IUserProfile) => {
      const user = response;
      console.log(user);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      }
    }));
  }
// setCurrentUser(user:User){
//   this.currentUserSource.next(user);
// }
    logout() {
      localStorage.removeItem('user');
      // this.currentUserSource.next(null);
    }
    
loggedIn() {
  const user = localStorage.getItem('user');
  if (user){
    this.IsloggedIn = true;
    return this.IsloggedIn;
  }
  else {
    this.IsloggedIn = false;
    return this.IsloggedIn;
  }
  // return !this.jwtHelper.isTokenExpired(token);
}
}