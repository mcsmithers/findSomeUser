import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarRoutingModule } from './searchbar-routing.module';
import { SearchbarComponent } from './searchbar.component';
import { MaterialModule } from 'libs/material/src/lib/libs-material.module';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    SearchbarRoutingModule, MaterialModule
  ],
  exports: [SearchbarComponent]
})
export class SearchbarModule { }
