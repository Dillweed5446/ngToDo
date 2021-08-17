import { Component } from '@angular/core';
import { List } from './listInterface';
import { LISTOFLISTS } from './ListOfLists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do App';
}
