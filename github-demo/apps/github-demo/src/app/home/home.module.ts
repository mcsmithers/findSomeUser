import { SearchbarModule } from './../searchbar/searchbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UsersListModule } from '../users-list/users-list.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, SearchbarModule, UsersListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
