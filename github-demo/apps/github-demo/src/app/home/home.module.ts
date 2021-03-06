import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UsersListModule } from '../users-list/users-list.module';
import { MaterialModule } from 'libs/material/src/lib/libs-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, UsersListModule, MaterialModule, AppRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
