import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminGuestGuard } from './guards/admin-guest.guard';
import {StoreModule} from "@ngrx/store";
import {DEFAULT_ROUTER_FEATURENAME, routerReducer} from "@ngrx/router-store";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
    RouterModule.forChild([
      {
        path: 'auth',
        loadChildren: ()=>import('./routing/auth/auth.module')
        .then(module=>module.AuthModule)
      },
      {
        path: 'admin',
        loadChildren: ()=>import('./routing/admin/admin.module')
        .then(module=>module.AdminModule),
        canLoad: [AdminGuestGuard],
        canActivate: [AdminGuestGuard]
      }
      ,{
        path: 'not-found',
        loadChildren: ()=>import('./routing/not-found/not-found.module')
        .then(module=>module.NotFoundModule)
      },
      {
        path: 'home',
        loadChildren: ()=>import('./routing/home/home.module')
        .then(module=>module.HomeModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: '**',
        redirectTo: 'not-found'
      }
    ])
  ],
  providers: [AdminGuestGuard]
})
export class WebsiteModule { }
