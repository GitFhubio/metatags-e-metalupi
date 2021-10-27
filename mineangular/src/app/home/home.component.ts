import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../mainservice.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books:Book[]=[];
  constructor(public mservice:MainService) { }

  ngOnInit(): void {
    this.mservice.downloadBooks().subscribe(res=>{
      this.books=res;
      console.log(this.books);
  })
  }

  delete(book:Book){
    this.books = this.books.filter(item => item !== book);
    this.mservice.deleteBook(book)
    .subscribe();
  }
}





