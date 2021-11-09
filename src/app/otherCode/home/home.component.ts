import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  info: any;
  roles: string[];
  authority: string;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
      this.info = {
        token: this.token.getToken().substring(7),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()
      };
      if (this.token.getToken()) {
        this.roles = this.token.getAuthorities();
        this.roles.every(role => {
          if (role === 'ROLE_ADMIN') {
            this.authority = 'admin';
            return false;
          }
          this.authority = 'user';
          return true;
        });
      }
  }

  logout(){
    this.token.signOut();
    window.location.reload();
  }

}
