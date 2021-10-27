import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Book } from "./models/book.model";
@Injectable({
  providedIn:'root'
})
export class MainService{
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(public http:HttpClient){
  }
  downloadBooks() {
    return this.http.get<Book[]>('http://127.0.0.1:8000/api/bookz');
}
downloadBook(id:string|null) {
  return this.http.get<Book>('http://127.0.0.1:8000/api/bookz/'+id);
}

deleteBook(book:Book): Observable<any> {
  return this.http.delete('http://127.0.0.1:8000/api/bookz/'+book.id, {headers: this.headers});
}
}
