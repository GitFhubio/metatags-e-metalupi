import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form : FormGroup;
  error:boolean = false;
  constructor(private _http: HttpClient,private title:Title, private meta:Meta,public fb: FormBuilder){
    this.title.setTitle("Creation form");
    this.meta.updateTag({name:'description',content:"questa è la pagina di creazione"});
    this.meta.updateTag({name:'keywords',content:"create,insert,new"});
    this.form=fb.group({
      'title':['',Validators.required],
      'author':['',Validators.required],
      'price':['',Validators.required],
    })
  }
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  // onSubmit(form: NgForm){
  // 	console.log(form.value);
  // }
//   onSubmit(): Promise <Book>{
//     return this._http.post('http://127.0.0.1:8000/api/bookz', JSON.stringify(this.form.value), {headers: this.headers})
//      .toPromise()
//              .then(res => res)
//               .catch(this.handleError);
// }

// private handleError(error: any): Promise<any> {
// return Promise.reject(error.message || error);
// }

onSubmit(){
  if (this.form.valid){
    this.error=false;
  return this._http.post('http://127.0.0.1:8000/api/bookz', JSON.stringify(this.form.value), {headers: this.headers}).subscribe();
} else{
   this.error=true;
  return;
}
}
  checkString(input:string){
    let tag=this.form.controls[input];
    if(tag.value.length>=250){
      tag.setErrors({incorrect:true});
    } else{
      tag.setErrors(null);
    }
  }
  checkNumber(){
    let price=this.form.controls['price'];
    if(price.value>99.99){
      price.setErrors({incorrect:true});
    } else{
      price.setErrors(null);
    }
  }
}
