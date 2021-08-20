import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SingleToDoList } from '../listInterface';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.css']
})
export class SubListComponent implements OnInit {
  @Input() list: SingleToDoList = {listName: '', listItems: []};
  @Output() addNewListItemEvent = new EventEmitter<string>();
  item: any;
  /**
   * On Add List Item
   * ---
   * event for when a list item is added
   */
  onAddListItem(value: string): void {
    this.addNewListItemEvent.emit(value);
    this.item = null;
  }

  constructor() {
  }


  ngOnInit(): void {
  }

}
