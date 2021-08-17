import { Component, OnInit, Input } from '@angular/core';
import { List } from '../listInterface';


/**
 * The place where you specify the properties that a given list
 * item can potentially have.
 */
interface ToDoListItem {
  itemName: string;
  nestedItems: ToDoListItem[];
}

// Here the list, is a simple array of known types.
/**
 * By creating the list as an array of the items that are supposed to go
 * inside of it, rather than array of itself, it makes accessing the internal
 * properties of those items make sense to the compiler.
 *
 * Also, in the case of lists, if you have a list of lists, that gives you
 * the ability to have multiple names todo lists.
 * 
 * but then they need meta data to decsribe them, so it'd be more like
 */
type ToDoList = ToDoListItem[]; 

// Ref to actual to do list
interface ToDoListCollectionItem {
  name: string;
  list: ToDoList;
}

// a list of the target item again, just like before with the list.
type ToDoListCollection = ToDoListCollectionItem[];





@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {
  @Input() list?: List = this.selectedList;
  selectedList?: List;
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
    this.list?.nestedList.push(item)
  }

  constructor() {
    this.list = {
      listName: '',
      nestedList: []
    };
  }


  ngOnInit(): void {
  }

}
