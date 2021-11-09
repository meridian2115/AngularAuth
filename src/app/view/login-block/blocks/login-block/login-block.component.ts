import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as auth from "../../../../store/auth-store/store/auth.selectors";
import {login} from "../../../../store/auth-store/store/auth.actions";

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit {

  loading$: Observable<boolean> = this.store$.pipe(select(auth.getLoading));
  loaded$: Observable<boolean> = this.store$.pipe(select(auth.getLoaded));
  serverError$: Observable<string> = this.store$.pipe(select(auth.getServerError));

  serverError = '';

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onLogin(loginPayload: {username: string, password: string}) {
    this.store$.dispatch(login(loginPayload));
  }
}
