// export interface List {
//     listName: string,
//     nestedList: Array<string>
// }

/**
 * The place where you specify the properties that a given list
 * item can potentially have.
 */
export interface ToDoListItem {
    itemName?: string;
    nestedItems: Array<string>;
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
export  type ToDoList = ToDoListItem[];
  
  // Ref to actual to do list
export  interface ToDoListCollectionItem {
    name: string;
    // list: ToDoList;
  }

  // a list of the target item again, just like before with the list.
export  type ToDoListCollection = ToDoListCollectionItem[];
