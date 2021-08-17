import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListTitleComponent } from './list-title/list-title.component';
import { SelectedListComponent } from './selected-list/selected-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MainListComponent } from './main-list/main-list.component';
import { ListServiceService } from './list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTitleComponent,
    SelectedListComponent,
    ListItemComponent,
    MainListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
