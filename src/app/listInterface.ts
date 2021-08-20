export interface SingleToDoList {
    listName: string | null,
    listItems: Array<string>
}

// export interface ListOfToDoLists {
//     name: string,
//     content: SingleToDoList
// }

export type ToDoListCollection = SingleToDoList[]