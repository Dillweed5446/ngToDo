import { ToDoList } from "./listInterface";
import { LISTOFLISTS } from "./ListOfLists";

let SubList: ToDoList = [];

function subListPopulator(): void {
  for (let i = 0; i < LISTOFLISTS.length; i++){
      SubList.push({itemName: LISTOFLISTS[i].name, nestedItems: []})
  }
}

subListPopulator();

export { SubList };