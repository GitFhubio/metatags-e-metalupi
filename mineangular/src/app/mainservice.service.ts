import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, Output } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { Book } from "./models/book.model";
import { User } from "./models/user";
import { catchError, map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn:'root'
})
export class MainService{
  token: string='';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(public http:HttpClient,private router: Router,public jwtHelper: JwtHelperService){
  }
  // router e jwthelper nel costruttore li ho messi per canactivate e loggedin
  downloadBooks() {
    return this.http.get<Book[]>('http://127.0.0.1:8000/api/bookz');
}
downloadBook(id:string|null) {
  return this.http.get<Book>('http://127.0.0.1:8000/api/bookz/'+id);
}

filterBook(title:string) {
 return this.http.get<Book[]>('http://127.0.0.1:8000/api/books/'+title);
}

deleteBook(book:Book): Observable<any> {
  return this.http.delete('http://127.0.0.1:8000/api/bookz/'+book.id, {headers: this.headers});
}
private books = new Subject<Book[]>();
booksFiltered$= this.books.asObservable();

newBookList(booksList:Book[]){
this.books.next(booksList);
}

private mytoken = new Subject<string>();
log$= this.mytoken.asObservable();
session(t:string){
  this.mytoken.next(t);
  }
getUsers() {
  return this.http.get<User[]>(`http://127.0.0.1:8000/api/users`);
}
login(user: User): Observable<any> {
  return this.http.post(' http://127.0.0.1:8000/api/login', user)
    .pipe(
      map((response: any) => {
        const token = response.token;
        console.log('Response token:' + token);
        if (token) {
          this.token = token;
          localStorage.setItem('token', this.token);
          return true;
        } else {
          return false;
        }
      })
      ,
      catchError(this.errorHandler)
    );
}
logout(): void {
  this.token ='';
  localStorage.removeItem('token');
  console.log('you are logged out!');
  this.router.navigate(['/']);
}
canActivate(): any {
  if (!this.loggedIn()) {
    this.router.navigate(['/login']);
    return false;
  }
  return true;
}
loggedIn(): any {
  return !this.jwtHelper.isTokenExpired();
}
register(user:User): Observable<any> {
  return this.http.post('http://127.0.0.1:8000/api/register', user)
    .pipe(
      map((response) => response),
      catchError(this.errorHandler)
    );
}
errorHandler(error: HttpErrorResponse): any {
  return throwError(error.error || {message: 'Server Error'});
}

// readLocalStorageValue(key:any) {
//   return localStorage.getItem(key);
// }

}

