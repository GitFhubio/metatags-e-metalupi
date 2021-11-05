import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MainService } from './mainservice.service';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService implements CanActivate {
 books = new BehaviorSubject<Book[]>([]);
 mybooks:Book[]=[];
  constructor(public mservice:MainService,public router:Router) {

    this.mservice.downloadMyBooks(this.mservice.current('id')).subscribe( (value) => {
      this.mybooks=value
    //   this.books.subscribe(res=>
    //   {
    //     console.log(res);

    //     }
    // )
 })
 console.log(this.mservice.downloadBooks());

}

  canActivate(route: ActivatedRouteSnapshot): any {

//  if (!this.book_ids.includes(route.params.id)) {
//   this.router.navigate(['/admin']);
//   return false
// }
  return true


}
}
