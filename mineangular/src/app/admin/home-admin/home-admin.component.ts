import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { MainService } from 'src/app/mainservice.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  books:Book[]=[];
  constructor(public mservice:MainService) {
    this.mservice.downloadMyBooks(this.mservice.current('id')).subscribe(res=>{
      this.books=res;
  })
}
ngOnInit(): void {

}
delete(book:Book){
  this.books = this.books.filter(item => item !== book);
  this.mservice.deleteBook(book).subscribe();
}
getBookId(input:number) : string{
  return input.toString();
}

}
