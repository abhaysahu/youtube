import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { Observable } from 'rxjs';
import { LoginUser } from './login/loginuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:3000/";

  constructor(private http: HttpClient) { }

  createuser(user: User): Observable<User>
  {
    return this.http.post<User>(this.url+'api/user/signup', user)
  }

  loginuser(loginuser: LoginUser): Observable<LoginUser>
  {
    return this.http.post<LoginUser>(this.url+'api/user/login', loginuser)
  }

  getuser(userId)
  {
    let Users={}

    Users["uuid"] = userId;

    console.log(Users)

    return this.http.post<User>(this.url+'api/user/getuser', Users)
  }
  
}
