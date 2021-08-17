import { Injectable } from '@angular/core';
import { LISTOFLISTS } from './ListOfLists';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  getMainList() { return LISTOFLISTS;}
  
  constructor() { }
}
