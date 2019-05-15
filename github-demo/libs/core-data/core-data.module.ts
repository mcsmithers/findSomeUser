import { UsersListService } from './../../apps/github-demo/src/app/users-list/users-list.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    providers: [
        UsersListService
    ]
})

export class CoreDataModule {}
