import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: ()=>import('./routing/dashboard/dashboard.module')
        .then(module=>module.DashboardModule)
      }
    ])
  ]
})
export class AdminModule { }
