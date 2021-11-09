import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_BASE_DOMAIN } from 'src/env';
import { JwtResponse } from '../jwt-response';
import { AuthLoginInfo } from '../../view/login-block/blocks/login-block/login-info';
import { SignUpInfo } from '../auth/signup-info';

const httpOptions = {
  headers: new HttpHeaders ({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl =  BACKEND_BASE_DOMAIN + 'api/auth/login';
  private signupUrl = BACKEND_BASE_DOMAIN + 'api/auth/signup';

  attemptAuth(credentials: AuthLoginInfo):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info:SignUpInfo):Observable<string>{
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
