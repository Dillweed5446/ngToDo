import { Component, OnInit, Input } from '@angular/core';
import { ToDoListItem, ToDoListCollectionItem, ToDoList } from '../listInterface';
import { SubList } from '../sublist';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.css']
})
export class SubListComponent implements OnInit {
  //@ts-ignore
  @Input() list?: ToDoListCollectionItem = this.subList;
  subList: ToDoListCollectionItem;
  tertiaryList: ToDoListItem;
  name = this.list?.name;

  /**
   * On Add List Item
   * ---
   * event for when a list item is added
   */
  onAddListItem(item: string): void {
    /**
     * What did I fix:
     * 00: Changed your list from an array of type list to a singular
     *     list 'interface'.
     * 01: used a question mark after list to give the compiler (NGCC)
     *     a clue that this variable can at any point be undefined.
     * 02: in the constructor initialized the property of nested list
     *     because if you wouldn't initialize the empty array, the
     *     compiler will not take care of creating the scaffolding
     *     of a type for you.
     */
    this.tertiaryList?.nestedItems.push(item)
  }

  constructor() {
    this.subList = {
      name: ''
    };
    this.tertiaryList = {
      itemName: this.subList?.name,
      nestedItems: []
    };
  }


  ngOnInit(): void {
  }

}
