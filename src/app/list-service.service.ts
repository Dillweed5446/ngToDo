import { Injectable } from '@angular/core';
import { LISTOFLISTS } from './ListOfLists';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  getMainList() { return LISTOFLISTS;}

  createNewList(value: string): void {
    LISTOFLISTS.push({listName: value, listItems: []});
  }

  constructor() { }
}
