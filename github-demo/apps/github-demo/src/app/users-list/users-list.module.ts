import { UsersModule } from './../users/users.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule, UsersModule
  ], exports: [UsersListComponent]
})
export class UsersListModule { }
