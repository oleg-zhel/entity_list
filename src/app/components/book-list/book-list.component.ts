import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Books } from 'src/app/services/data-getter.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() book: Books;
  @Input() isNew: boolean;
  @Output() addBook = new EventEmitter();
  @Output() cancelAddingBook = new EventEmitter();
  title: string;
  constructor() { }

  ngOnInit() {
    if(this.isNew){
      this.book = {
        name: '',
        author: '',
        page_amount: null,
        publish_year: null
      };
      this.title = 'Нова книга'
    }
  }
addNew() {
  if(this.isNew){
    this.addBook.emit(this.book);
  }
}
cancelAdding(){
  if(this.isNew){
    this.cancelAddingBook.emit();
  }
}
}
