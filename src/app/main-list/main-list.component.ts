import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { List } from '../listInterface';
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
  providers: [ListServiceService]
})
export class MainListComponent implements OnInit {
  selectedList?: List;
  addList?: List;
  mainList: List[] = [];

  getMainList(): void {
    this.mainList = this.listService.getMainList()
  }

  onSelect(list: List): void {
    this.selectedList = list;
  }

  onAddList(): void {
    this.mainList.push({listName: '', nestedList: []});
    this.addList = this.mainList[this.mainList.length -1];
  }

  onCloseNewAddition(): void {
    this.addList = undefined;
  }

  onDelete(list: List): void {
    this.mainList.splice(this.mainList.indexOf(list), 1)
  }
  /**
  * Why is this service not accessible?  Read through the angular docs and they're fucking awful.
  * Couldn't even get a good example of how to integrate a service into a component.
  * The fuck google devs?
  */
  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
    this.getMainList()
  }

}
