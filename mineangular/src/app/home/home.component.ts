import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationStart, Router,Event, NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../mainservice.service';
import { Book } from '../models/book.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    // @Input() token:string|null ='';
  @Input() filteredBooks:Book[] = [];
  // books:Book[] = [];
  constructor(public mservice:MainService,private title:Title, private meta:Meta,private router:Router) {
  this.title.setTitle("Mine-angular");
  this.meta.updateTag({name:'description',content:"questa è la homepage"});
  this.meta.updateTag({name:'keywords',content:"homepage,landing,home"});
  this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
     this.mservice.downloadBooks().subscribe(res=>{
      this.filteredBooks=res;
      console.log(this.filteredBooks);
  })
    }
});
// console.log(this.mservice.loggedIn());

  }
  ngOnInit(): void {
//  con questa sintassi li ho messi osservabili
    this.mservice.booksFiltered$.subscribe(books=>{
      this.filteredBooks=books;
    })
  //   this.mservice.downloadBooks().subscribe(res=>{
  //     this.filteredBooks=res;
  //     console.log(this.filteredBooks);
  // })

  // ho messo direttamente mservice in html quindi tolgo le due righe successive
  // this.token=this.mservice.readLocalStorageValue('token');
  // console.log(this.token);
  }


  // delete(book:Book){
  //   this.filteredBooks = this.filteredBooks.filter(item => item !== book);
  //   this.mservice.deleteBook(book).subscribe();
  // }
}





