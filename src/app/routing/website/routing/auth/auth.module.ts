import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginBlockModule } from 'src/app/view/login-block/login-block.module';
import { RegisterBlockModule } from 'src/app/view/register-block/register-block.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    LoginBlockModule,
    RegisterBlockModule,
    RouterModule.forChild([
      {
        path: '',        
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'register',
        component: RegisterPageComponent
      }
    ])
  ]
})
export class AuthModule { }
