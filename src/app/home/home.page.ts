import { Component } from '@angular/core';
import { Books, DataGetterService } from '../services/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books:Books[];
  showNew = false;
  showEdit = -1;
  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getBooks().subscribe(
      (data)=>{
        this.books = data;
      }
    );
  }
  add(){
    this.showNew = true;
  }
  delete(index:number){
    this.dataGetter.deleteBook(index)
  }
  addBook(book){
    this.dataGetter.addBook(book);
    this.showNew = false;
  }
}
