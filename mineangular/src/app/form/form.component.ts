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
  fileName:string = 'Choose file...';
  file: any|null;
  error:boolean = false;
  constructor(private _http: HttpClient,private title:Title, private meta:Meta,public fb: FormBuilder){
    this.title.setTitle("Creation form");
    this.meta.updateTag({name:'description',content:"questa è la pagina di creazione"});
    this.meta.updateTag({name:'keywords',content:"create,insert,new"});
    this.form=fb.group({
      'title':['',Validators.required],
      'author':['',Validators.required],
      'price':['',Validators.required],
      'file':[''],
    })
  }
  // private headers = new HttpHeaders({'Content-Type': 'application/json'})
  // private headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data'}) //da problemi,
  //non metto headers con multipart form data
onFileSelect(e:any) {
  this.fileName = e.target.files[0].name;
  this.file = e.target.files[0];
  console.log(this.fileName,this.file);
}
onSubmit(){
  const formData: FormData = new FormData();
  console.log(this.file);
  formData.append('myform',JSON.stringify(this.form.value));
  if(this.file!= null){
  formData.append('image', this.file,this.fileName);
  }
  if (this.form.valid){
    this.error=false;
  return this._http.post('http://127.0.0.1:8000/api/bookz',formData).subscribe((res)=>console.log(res),
  (err) => console.log(err));

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
