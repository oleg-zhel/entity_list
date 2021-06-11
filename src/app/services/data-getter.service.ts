import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
export interface Books {
  name: string;
  author: string;
  page_amount: number;
  publish_year: number;
}
@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private books: Books[]= [
    {
      name: `Гарри Поттер`,
      author: 'Джоан Роулинг',
      page_amount: 304,
      publish_year: 1985
    },
    {
      name: `Код да Винчи`,
      author: 'Дэн Браун',
      page_amount: 256,
      publish_year: 1998
    },
  ];
  private username: string = '';

  private users = [
    'Admin', 'User1', 'User2'
  ];

  constructor() { }
  getBooks(): Observable<Books[]>{
    return of(this.books);
  }
  addBook(book:Books){
    this.books.push(book);
  }
  deleteBook(index){
    this.books.splice(index,1);
  }
  public getUser(){
    return this.username;
  }

  public setUser(user: string){
    this.username = user;
  }

  public isUserExists(name: string){
    return this.users.indexOf(name) !== -1;
  }
}
