import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_BASE_DOMAIN } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = BACKEND_BASE_DOMAIN + 'api/test/user';
  private modUrl = BACKEND_BASE_DOMAIN + 'api/test/mod';
  private adminUrl = BACKEND_BASE_DOMAIN + 'api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard():Observable<string>{
    return this.http.get(this.userUrl, {responseType: 'text'});
  }

  getModBoard():Observable<string>{
    return this.http.get(this.modUrl, {responseType: 'text'});
  }

  getAdminBoard():Observable<string>{
    return this.http.get(this.adminUrl, {responseType: 'text'});
  }
}
