import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AUTH_FEATURE_NAME, authReducer} from "./store/auth.reducer";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/auth.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(AUTH_FEATURE_NAME, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthStoreModule { }
