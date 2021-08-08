import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../listItemInterface';
import { List } from '../listInterface';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {
  @Input() list?: List[]

  onAddListItem(item: string): void {
    this.selectedList.nestedList.push(item)
  }

  constructor() {}

  ngOnInit(): void {
  }

}
