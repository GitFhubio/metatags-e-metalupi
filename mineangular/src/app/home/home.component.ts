import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  books:Book[]=[];
  constructor(public mservice:MainService,private title:Title, private meta:Meta) {
  this.title.setTitle("Mine-angular");
  this.meta.updateTag({name:'description',content:"questa è la homepage"});
  this.meta.updateTag({name:'keywords',content:"homepage,landing,home"});}

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





