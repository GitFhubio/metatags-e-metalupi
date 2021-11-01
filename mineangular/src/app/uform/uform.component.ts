import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../mainservice.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-uform',
  templateUrl: './uform.component.html',
  styleUrls: ['./uform.component.scss']
})
export class UformComponent implements OnInit {
  form : FormGroup;
  fileName:string = 'Choose file...';
  file: any|null = null;
  error:boolean = false;
  updatingId:string|null='';
  book:Book=new Book();
  // private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(public route:ActivatedRoute, public mservice:MainService,
    private _http: HttpClient,private title:Title, private meta:Meta,public fb: FormBuilder) {
    this.title.setTitle("Updating form");
    this.meta.updateTag({name:'description',content:"questa è la pagina di update"});
    this.meta.updateTag({name:'keywords',content:"update,aggiornamento"});
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.updatingId=params.get('id');
    })
    this.form=fb.group({
      'title':['',Validators.required],
      'author':['',Validators.required],
      'price':['',Validators.required],
      'file':[''],
    })
    }

  ngOnInit(): void {
  this.mservice.downloadBook(this.updatingId).subscribe(res=>{
    this.book=res;
  })

}
onFileSelect(e:any) {
  this.fileName = e.target.files[0].name;
  this.file = e.target.files[0];
  console.log(this.fileName,this.file);
}
// onSubmit(form: NgForm): Promise <Book>{
//   return this._http.put('http://127.0.0.1:8000/api/bookz/'+this.updatingId, JSON.stringify(form.value), {headers: this.headers })
//    .toPromise()
//            .then(res => res)
//             .catch(this.handleError);
// }
// private handleError(error: any): Promise<any> {
// console.error('An error occurred', error); // for demo purposes only
// return Promise.reject(error.message || error);
// }
// }
onSubmit(){
  const formData: FormData = new FormData();
  console.log(this.file);
  formData.append('myform',JSON.stringify(this.form.value));
  if(this.file!= null){
  formData.append('image', this.file,this.fileName);
  }
  formData.append('_method', 'PUT');
  if (this.form.valid){
    this.error=false;
  return this._http.post('http://127.0.0.1:8000/api/bookz/'+this.updatingId,formData).subscribe((res)=>console.log(res),
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



