import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BACKEND_BASE_DOMAIN} from "../../../../env";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(body: {username: string, password: string}) {
    return this.httpClient.post<{token: string}>(
      BACKEND_BASE_DOMAIN+'api/auth/login',
      body
    );
  }
}
