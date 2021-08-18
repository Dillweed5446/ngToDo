import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubListComponent } from './sub-list/sub-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MainListComponent } from './main-list/main-list.component';
import { ListServiceService } from './list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SubListComponent,
    ListItemComponent,
    MainListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
