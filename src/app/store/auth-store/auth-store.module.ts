import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AUTH_FEATURE_NAME, authReducer} from "./store/auth.reducer";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/auth.effects";
import {JwtModule} from "@auth0/angular-jwt";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: request => request as any
      }
    }),
    StoreModule.forFeature(AUTH_FEATURE_NAME, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthStoreModule { }
