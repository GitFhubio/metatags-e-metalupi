import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../mainservice.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-uform',
  templateUrl: './uform.component.html',
  styleUrls: ['./uform.component.scss']
})
export class UformComponent implements OnInit {
  updatingId:string|null='';
  book:Book=new Book();
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(public route:ActivatedRoute, public mservice:MainService,private _http: HttpClient) {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.updatingId=params.get('id');
    })
    }

  ngOnInit(): void {
  this.mservice.downloadBook(this.updatingId).subscribe(res=>{
    this.book=res;
  })

}
onSubmit(form: NgForm): Promise <Book>{
  return this._http.put('http://127.0.0.1:8000/api/bookz/'+this.updatingId, JSON.stringify(form.value), {headers: this.headers })
   .toPromise()
           .then(res => res)
            .catch(this.handleError);
}
private handleError(error: any): Promise<any> {
console.error('An error occurred', error); // for demo purposes only
return Promise.reject(error.message || error);
}
}



