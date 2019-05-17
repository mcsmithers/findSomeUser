import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //If lazy-load is a goal, this is useful, but it's buggy sometimes so I commented itout
    // { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
