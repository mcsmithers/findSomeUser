import { SearchbarModule } from './searchbar/searchbar.module';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './../../../../libs/material/src/lib/libs-material.module';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, HomeModule, UsersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
