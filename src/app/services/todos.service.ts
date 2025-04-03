import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);

  // todoItems: Array<Todo> = [
  //   {
  //     title: 'Groceries',
  //     id: 0,
  //     userId: 1,
  //     completed: false,
  //   },
  //   {
  //     title: 'Study',
  //     id: 1,
  //     userId: 2,
  //     completed: true,
  //   },
  // ];

  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }

  constructor() {}
}
