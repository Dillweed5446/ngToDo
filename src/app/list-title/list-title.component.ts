import { Component, OnInit } from '@angular/core';
import { List } from '../listInterface';
import { LISTOFLISTS } from '../ListOfLists';

@Component({
  selector: 'app-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.css']
})
export class ListTitleComponent implements OnInit {
  list = LISTOFLISTS;
  selectedList?: List;
  addList?: List;

  onSelect(list: List): void {
    this.selectedList = list;
  }

  onAddList(): void {
    LISTOFLISTS.push({listName: '', nestedList: []});
    this.addList = LISTOFLISTS[LISTOFLISTS.length -1];
  }

  onCloseNewAddition(): void {
    this.addList = undefined;
  }

  onDelete(list: List): void {
    LISTOFLISTS.splice(LISTOFLISTS.indexOf(list), 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
