import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(private _http: HttpClient){}

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  // onSubmit(form: NgForm){
  // 	console.log(form.value);
  // }
  onSubmit(form: NgForm): Promise <Book>{
    return this._http.post('http://127.0.0.1:8000/api/bookz', JSON.stringify(form.value), {headers: this.headers})
     .toPromise()
             .then(res => res)
              .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
console.error('An error occurred', error); // for demo purposes only
return Promise.reject(error.message || error);
}
}

