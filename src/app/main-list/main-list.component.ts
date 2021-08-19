import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { ToDoListCollection, ToDoListCollectionItem } from '../listInterface';
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
  providers: [ListServiceService]
})
export class MainListComponent implements OnInit {
  selectedList?: ToDoListCollectionItem;
  addList?: ToDoListCollectionItem;
  mainList: ToDoListCollection = [];

  getMainList(): void {
    this.mainList = this.listService.getMainList()
  }

  onSelect(list: ToDoListCollectionItem): void {
    this.selectedList = list;
  }

  onAddList(): void {
    this.mainList.push();
    this.addList = this.mainList[this.mainList.length -1];
  }

  onCloseNewAddition(): void {
    this.addList = undefined;
  }

  onDelete(list: ToDoListCollectionItem): void {
    this.mainList.splice(this.mainList.indexOf(list), 1)
  }

  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
    this.getMainList()
  }

}
