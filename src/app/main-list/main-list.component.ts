import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { SingleToDoList, ToDoListCollection } from '../listInterface';
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
  providers: [ListServiceService]
})
export class MainListComponent implements OnInit {
  selectedList?: SingleToDoList;
  addList: boolean = false;
/**
*  mainList dummy setup to keep it simple
*/
  mainList: ToDoListCollection = [
    {listName: 'GroceryList', listItems: ['milk', 'cheese', 'rice', 'steak']},
    {listName: 'Hiking List', listItems: []},
    {listName: 'Yard Tool List', listItems: []},
    {listName: 'Camping List', listItems: []},
    {listName: 'Vacation List', listItems: []}
  ]
  /**
  *  mainList setup for when ListServiceService is fully configured
  */
  // mainList: ToDoListCollection = [{listName: '', listItems: []}];

  getMainList(): void {
    this.mainList = this.listService.getMainList()
  }

  onSelect(list: SingleToDoList): void {
    this.selectedList = list;
  }

  onAddList(): void {
    this.addList = true;
  }

  addNewListName(value: string): void {
    this.mainList.push({listName: value, listItems: []});
    this.addList = false;
  }

  addListItem(newListItem: string): void{
    this.selectedList?.listItems.push(newListItem);
  }

  onDelete(list: SingleToDoList): void {
    this.mainList.splice(this.mainList.indexOf(list), 1)
  }

  constructor(
    private listService: ListServiceService,
    ) {}

  ngOnInit(): void {
    /**
    *  Use this when ListServiceService is fully
    */
    // this.getMainList()
  }

}
