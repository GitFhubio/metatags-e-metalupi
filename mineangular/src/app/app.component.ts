import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, ChangeDetectorRef, Component, Input} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faGithub,faFacebook, faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { MainService } from './mainservice.service';
import { Book } from './models/book.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked{
  title='mineangular';
  onSearch:boolean= false;
  message: string = 'loading :(';
  // @Input() token : string|null= '';
  filteredBooks:Book[]=[];
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faHamburger = faBars;
  faInstagram= faInstagram;
  faLinkedin= faLinkedin;
  faGithub=faGithub;
  constructor(private cdr: ChangeDetectorRef,private _http: HttpClient,public router:Router,public mservice:MainService){
    this.router.events.subscribe((e) => {
    if(e instanceof NavigationEnd){
      window.scrollTo(0,0);
    }
    }
    )
  this.allBooks();
}
ngAfterContentChecked() : void {
  this.cdr.detectChanges();
}

allBooks(){
  this.onSearch=false;
  this.mservice.downloadBooks().subscribe(res=>{
    this.filteredBooks=res;
    console.log(this.filteredBooks);
      this.mservice.booksFiltered$.subscribe(books=>{
  this.filteredBooks=books;
  console.log(this.filteredBooks);
})
this.mservice.newBookList(this.filteredBooks);
//         console.log(this.filteredBooks);
})

}

 searchBook(title:HTMLInputElement){
   if(title.value!= ''){
 this.onSearch=true;
      this.mservice.filterBook(title.value).subscribe(res => {this.filteredBooks=res;
        console.log(this.filteredBooks);

        this.mservice.booksFiltered$.subscribe(books=>{
          this.filteredBooks=books;
          console.log(this.filteredBooks);
        })
        this.mservice.newBookList(this.filteredBooks);
        console.log(this.filteredBooks);
      });

  }
}

 }
