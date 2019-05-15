import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarRoutingModule } from './searchbar-routing.module';
import { SearchbarComponent } from './searchbar.component';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    SearchbarRoutingModule
  ],
  exports: [SearchbarComponent]
})
export class SearchbarModule { }
