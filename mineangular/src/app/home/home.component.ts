import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { MainService } from '../mainservice.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() filteredBooks:Book[] = [];
  // books:Book[] = [];
  constructor(public mservice:MainService,private title:Title, private meta:Meta) {
  this.title.setTitle("Mine-angular");
  this.meta.updateTag({name:'description',content:"questa è la homepage"});
  this.meta.updateTag({name:'keywords',content:"homepage,landing,home"});
  //     this.mservice.downloadBooks().subscribe(res=>{
  //     this.books=res;
  //     console.log(this.books);
  // })
}

  ngOnInit(): void {
    this.mservice.booksFiltered$.subscribe(books=>{
      this.filteredBooks=books;
    })
    console.log(this.filteredBooks);
  //   this.mservice.downloadBooks().subscribe(res=>{
  //     this.filteredBooks=res;
  //     console.log(this.filteredBooks);
  // })
  }

  delete(book:Book){
    this.filteredBooks = this.filteredBooks.filter(item => item !== book);
    this.mservice.deleteBook(book)
    .subscribe();
  }
}





